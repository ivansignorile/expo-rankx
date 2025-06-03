import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/Buttons";
import styles from "@/utils/css";
import { useTranslation } from "react-i18next";
import Box from "@/components/ui/Box";
import SubHeading from "@/components/ui/SubHeading";
import Header from "@/components/ui/Header";
import { useEffect, useState } from "react";
import { returnCardColorFromName } from "@/utils/service";
import { useRouter } from "expo-router";
import ArrowIcon from "@/components/ui/Arrow";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/utils/user.slice";
import { Colors } from "@/constants/Colors";
import Hero from "@/components/ui/Hero";
import Accordion from "../../components/ui/Accordion";
import { useLocalSearchParams } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { cleanHTML } from "@/utils/store";
export default function Pass() {
  const { t } = useTranslation();
  const [packages, setPackages] = useState([]);
  const dispatch = useDispatch();
  const place = useSelector((state) => state.user.place);
  const cart = useSelector((state) => state.user.cart) || [];
  const router = useRouter();
  const [content, setContent] = useState([]);
  const [discounted_places, setDiscountedPlaces] = useState([]);
  const params = useLocalSearchParams();

  useEffect(() => {
    if (place) {
      const _c = [];
      const _content = JSON.parse(place?.contenuto);
      _content?.forEach((item) => {
        item?.columns.forEach((col) => {
          col?.blocks?.forEach((block) => {
            _c.push(block?.content?.text);
          });
        });
      });

      setContent(_c);
    }
  }, [place]);

  useEffect(() => {
    console.log("content", content);
  }, [content]);

  //   useEffect(() => {
  //     (async () => {
  //       const response = await getPackages();
  //       setPackages(response?.listaPacchettiVendibili);
  //     })();
  //   }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <Header back={true} />
      <ScrollView>
        <Box style={[]}>
          <Heading title={t("places.intro")} />
        </Box>
        <ImageBackground
          source={{ uri: place?.immagine }}
          resizeMode="cover"
          style={[styles.p20, { height: 250 }]}
        />
        <View style={[styles.p20]}>
          <Text style={[styles.Heading2]}>{place?.title}</Text>

          {content
            ?.filter((c) => c?.length > 0)
            .map((item, index) => {
              return (
                <Text style={[styles.BodyXL, styles.p10h]} key={index}>
                  {cleanHTML(item)}
                </Text>
              );
            })}
        </View>
        <Box style={[styles.p20, { marginTop: 0, paddingHorizontal: 30 }]}>
          <Text
            style={[
              styles.BodyXL,
              styles.mt20,
              styles.bold,
              {
                textTransform: "uppercase",
              },
            ]}
          >
            {t("places.address")}
          </Text>
          <Text style={[styles.BodyXL]}>{place?.indirizzo_luogo}</Text>
          <Text
            style={[
              styles.BodyXL,
              styles.mt20,
              styles.bold,
              {
                textTransform: "uppercase",
              },
            ]}
          >
            {t("places.openingHours")}
          </Text>
          <Text style={[styles.BodyXL]}>{place?.orariapertura}</Text>
          <Text
            style={[
              styles.BodyXL,
              styles.mt20,
              styles.bold,
              {
                textTransform: "uppercase",
              },
            ]}
          >
            {t("places.contacts")}
          </Text>
          {place?.contatti_luogo?.split("\n").map((c, index) => (
            <Text style={[styles.BodyXL]}>{c}</Text>
          ))}
        </Box>
      </ScrollView>
    </View>
  );
}
