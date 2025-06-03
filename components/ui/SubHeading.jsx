import styles from "@/utils/css";
import { View } from "react-native";
import { Text } from "react-native";

export default function SubHeading({ title, subtitle, invert = false }) {
  return (
    <View
      style={[
        styles.p20w,
        {
          paddingRight: 30,
        },
      ]}
    >
      {title && (
        <Text
          style={[
            styles.Heading2,
            styles.block,
            styles.p10h,
            styles.mt5,
            invert && { color: "white" },
            {
              textOverflow: "ellipsis",
            },
          ]}
        >
          {title}
        </Text>
      )}
      {subtitle && (
        <Text
          style={[styles.Heading3, styles.block, invert && { color: "white" }]}
        >
          {subtitle}
        </Text>
      )}
    </View>
  );
}
