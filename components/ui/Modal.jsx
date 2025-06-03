import styles from "@/utils/css";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Modal({
  title,
  subtitle,
  onClose,
  children,
  primaryAction,
}) {
  return (
    <View style={[styles.backdrop]}>
      <View
        style={[
          styles.modalContent,
          {
            marginTop: 150,
          },
        ]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View>
              <Text
                allowFontScaling={false}
                style={[styles.Heading2, styles.semiBold, styles.black]}
              >
                {title}
              </Text>
              <Text
                allowFontScaling={false}
                style={[styles.Body, styles.mt5, styles.subtitle]}
              >
                {subtitle}
              </Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {children}

          {primaryAction && (
            <TouchableOpacity
              onPress={primaryAction.action}
              style={[
                styles.roundedButton,
                styles.mt10,
                styles.primary,
                styles.textCenter,
                {
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text  allowFontScaling={false}  style={[styles.bold]}>
                {primaryAction.label}
              </Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
