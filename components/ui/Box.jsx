import { View } from "react-native";
import styles from "@/utils/css";
export default function Box({ children, style = {} }) {
  return <View style={[styles.third, style]}>{children}</View>;
}
