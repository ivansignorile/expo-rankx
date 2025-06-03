import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "@/utils/css";
import ArrowIcon from "@/components/ui/Arrow";
import { FlatList } from "react-native";
import { useTranslation } from "react-i18next";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import Box from "./Box";
import VerticalCard from "./VerticalCard";
import { setCurrentFigher } from "@/utils/user.slice";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";

const Header = ({ title, open, setIsOpen }) => {
  const { t } = useTranslation();
  return (
    <View
      style={[
        styles.block,
        styles.inlineFlex,
        styles.justifyBetween,
        styles.p20,
        {
          paddingHorizontal: 40,
          backgroundColor: "#333"
        },
      ]}
    >
      <Text style={[styles.Heading3, styles.bold, {
        color: Colors.third,
      }]}>{title}</Text>
      <TouchableOpacity
        style={{
          right: 0,
          top: 0,
          transform: [{ rotate: open ? "0deg" : "180deg" }],
        }}
        onPress={() => {
          setIsOpen(!open);
        }}
      >
        <ArrowIcon />
      </TouchableOpacity>
    </View>
  );
};

export default function Accordion({ open, title, items }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(open);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <View style={[styles.block, styles.mt10]}>
      <Header title={title} open={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <>
          {items.length > 0 ? (
            <Box
              style={[
                styles.p20w,
                {
                  backgroundColor: "#000",
                },
              ]}
            >
              <ScrollView
                horizontal
                style={[styles.p20h]}
                showsHorizontalScrollIndicator={false}
              >
                {items
                  .filter((f) => f.attributes?.fullname)
                  .map((item, index) => (
                    <TouchableOpacity
                      key={"f"+index}
                      onPress={async () => {

                        await dispatch(setCurrentFigher(item));
                        router.push("pass");
                      }}
                    >
                      <VerticalCard
                        title={item?.attributes?.fullname}
                        subtitle={
                          item?.attributes?.disciplineClass +
                          " - " +
                          (item?.attributes?.disciplines?.data?.length > 0
                            ? item?.attributes?.disciplines.data[0]?.attributes
                                ?.type +
                              " " +
                              item?.attributes?.disciplines.data[0]?.attributes
                                ?.name
                            : "")
                        }
                        price={item?.attributes?.age}
                        image={
                          item?.attributes?.picture?.data?.attributes?.url
                            ? "https://rankx.bkt.studio" +
                              item?.attributes?.picture?.data?.attributes?.url
                            : ""
                        }
                        style={{
                          backgroundColor: "#111",
                        }}
                      />
                    </TouchableOpacity>
                  ))}
              </ScrollView>
            </Box>
          ) : (
            <></>
          )}
        </>
      )}
    </View>
  );
}
