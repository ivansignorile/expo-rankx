import { Colors } from "@/constants/Colors";
import styles from "@/utils/css";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
export default function ActionBox({ title, subtitle, actionLabel, onAction }) {
  return (
    <View style={[styles.actionBox, styles.mt20, styles.center, styles.mb20]}>
      <Text
        style={[styles.Heading2, styles.bold, styles.mb10, styles.textCenter]}
      >
        {title}
      </Text>
      <Text  allowFontScaling={false} style={[styles.BodyM, styles.textCenter, styles.mb20]}>
        {subtitle}
      </Text>
      {onAction && <TouchableOpacity
        onPress={onAction}
        style={[
          styles.secondary,
          styles.roundedButton,
          styles.center,
          styles.mb20,
        ]}
      >
        <Text  allowFontScaling={false} style={[styles.BodyM, styles.bold, styles.textCenter]}>
          {actionLabel}
        </Text>
      </TouchableOpacity>}
    </View>
  );
}
