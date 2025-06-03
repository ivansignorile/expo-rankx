import { TouchableOpacity, Text } from "react-native";
import styles from "@/utils/css";
export default function Plain({
  title,
  style = {},
  onPress,
  selected,
  alignItems = "flex-start",
  justifyContent = "center",
  endIcon,
  half = false,
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
        half && styles.half,
        style,
      ]}
      onPress={onPress || (() => {})}
    >
      <Text
        style={[
          styles.buttonText,
          styles.BodyL,
          styles.underline,
          selected && styles.white,
        ]}
      >
        {title}
      </Text>
      {endIcon && endIcon}
    </TouchableOpacity>
  );
}
