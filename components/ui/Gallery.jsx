import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
  ImageBackground,
} from "react-native";
import styles from "@/utils/css";
import { Button } from "@/components/ui/Buttons";
import { Colors } from "@/constants/Colors";
export default function Gallery({ data, title, ctaLabel, ctaCallback }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 10,
        }}
      >
        {data.map((item, index) => {
          return (
            <ImageBackground
              key={"img-luoghi-" + index}
              source={{ uri: item.immagine }}
              resizeMode="cover"
              style={[
                styles.p20,
                {
                  width: Dimensions.get("window").width,
                  height: 300,
                  marginBottom: 10,
                  paddingHorizontal: 30,
                  justifyContent: "space-between",
                },
              ]}
            >
              {title && (
                <Text style={[styles.Heading2, styles.white]}>
                  {item[title]}
                </Text>
              )}

              {ctaLabel && (
                <View>
                  <Button
                    title={ctaLabel}
                    onPress={ctaCallback ? () => ctaCallback(item) : null}
                    style={{
                      backgroundColor: Colors.third,
                      borderColor: Colors.third,
                      width: "50%",
                    }}
                  />
                </View>
              )}
            </ImageBackground>
          );
        })}
      </ScrollView>
    </View>
  );
}
