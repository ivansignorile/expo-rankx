import { Text, View } from "react-native";
import Box from "@/components/ui/Box";
import styles from "@/utils/css";
export default function Hero({
  title,
  subtitle,
  details,
  price,
  number,
  style = {},
}) {
  return (
    <Box style={[styles.p20w, style]}>
      <View>
        <Text style={[styles.white, styles.BodyL, styles.bold]}>{title}</Text>
        <Text style={[styles.white, styles.BodyL, styles.p5h]}>{subtitle}</Text>
        <Text style={[styles.white, styles.BodyL, styles.mb20]}>{details}</Text>
        <Text style={[styles.white, styles.BodyL]}>{price}</Text>
      </View>
      <View>
        <Text
          style={[
            styles.white,
            styles.BodyL,
            {
              fontSize: 150,
              marginTop: 20,
            },
            styles.bold,
          ]}
        >
          {number}
        </Text>
      </View>
    </Box>
  );
}
