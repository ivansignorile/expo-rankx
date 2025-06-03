import styles from "@/utils/css";
import { ImageBackground, Text, View } from "react-native";

export default function VerticalCard({
  title,
  subtitle,
  price,
  style = {},
  image,
}) {
  return (
    <View style={[styles.vcard, style]}>
      <ImageBackground
        source={{
          uri: image,
        }}
        resizeMode="cover"
        style={[styles.vcardImage]}
        imageStyle={{
          maxHeight: "100%",
          bottom: 0,
          borderRadius: 10
        }}
      >
        <View style={[styles.p20]}>
          {title && (
            <Text style={[styles.Heading2, styles.bold, styles.third, {
              padding: 5
            }]}>
              {title}
            </Text>
          )}

          {subtitle && (
            <Text
              style={[
                styles.white,
                styles.BodyL,
                {
                  marginVertical: 5,
                },
              ]}
            >
              {subtitle}
            </Text>
          )}

          {price && (
            <Text
              style={[
                styles.white,
                styles.BodyL,
                {
                  marginBottom: 5,
                },
              ]}
            >
              {price}
            </Text>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}
