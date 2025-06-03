import { Colors } from "@/constants/Colors";
import styles from "@/utils/css";
import { router } from "expo-router";
import { useState } from "react";
import { Switch, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
export default function ActionForm({ title, subtitle, actionLabel, onAction }) {
  const [value, setValue] = useState(false);
  return (
    <View style={[styles.actionBox, styles.mt20, styles.center, styles.mb20]}>
      <View style={[
        styles.inlineFlex,
        styles.alignCenter,
      ]}>
        <Switch
          trackColor={{
            false: Colors.primaryLight,
            true: Colors.primary,
          }}
          thumbColor={value ? "#fff" : "#f4f3f4"}
          ios_backgroundColor={"#eee"}
          onValueChange={() => setValue(!value)}
        />
        <Text  allowFontScaling={false} style={[styles.Heading2, styles.bold]}>{title}</Text>
      </View>
      <Text  allowFontScaling={false} style={[styles.BodyM, styles.mb20]}>{subtitle}</Text>
      {onAction && (
        <TouchableOpacity
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
        </TouchableOpacity>
      )}
    </View>
  );
}
