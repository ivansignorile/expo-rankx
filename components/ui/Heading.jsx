import styles from "@/utils/css";
import { View } from "react-native";
import { Text } from "react-native";

export default function Heading({ title }) {
  return (
    <View style={[styles.HeadingContainer]}>
      <Text style={[styles.Heading2]}>{title}</Text>
    </View>
  );
}
