import { Text, View } from "react-native";
import SubHeading from "@/components/ui/SubHeading";
import styles from "@/utils/css";
import { useTranslation } from "react-i18next";
import Header from "@/components/ui/Header";
import Form from "@/components/ui/Form";
import Box from "@/components/ui/Box";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Forgot() {
  const { t } = useTranslation();
  const router = useRouter();
  const [error, setError] = useState(null);
  const auth = async (data) => {
    console.log("data", data);
  };

  const formData = {
    onSubmit: (data) => auth(data),
    actionLabel: t("auth.recover"),

    helperLink: {
      label: t("auth.backToLogin"),
      onPress: () => router.push("auth"),
    },
    fields: [
      {
        type: "text",
        name: "username",
        placeholder: "Email",
        defaultValue: "",
        required: true,
        label: t("auth.emailAddress"),
      },
    ],
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        display: "flex",
      }}
    >
      <Header overHeadShown={false} />
      <View style={{ flex: 0.27, paddingTop: 30 }}>
        <SubHeading subtitle={t("recover.title")} />
      </View>

      <Box style={[styles.p20w, styles.p20h, { flex: 0.66 }]}>
        <Form formData={formData} error={error} />
      </Box>
    </View>
  );
}
