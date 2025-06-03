import { TouchableOpacity, Text } from "react-native";
import styles from "@/utils/css";
export default function Simple({
  title,
  style = {},
  onPress,
  selected,
  alignItems = "flex-start",
  justifyContent = "center",
  endIcon,
  half = false,
  twothird = false,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.roundedButton,
        styles.m10h,
        styles.p20,
        {
          display: "flex",
          flexDirection: "row",
          alignItems,
          justifyContent,
        },
        selected ? styles.primary : styles.bgWhite,
        half && styles.half,
        twothird && styles.twothird,
        style,
      ]}
      onPress={onPress || (() => {})}
    >
      <Text
        style={[
          styles.buttonText,
          styles.Heading3,
          styles.bold,
          selected ? styles.white : "#333",
        ]}
      >
        {title}
      </Text>
      {endIcon && endIcon}
    </TouchableOpacity>
  );
}
