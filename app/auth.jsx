import { Text, View } from "react-native";
import SubHeading from "@/components/ui/SubHeading";
import styles from "@/utils/css";
import { login } from "@/utils/service";
import { useTranslation } from "react-i18next";
import Header from "@/components/ui/Header";
import Form from "@/components/ui/Form";
import Box from "@/components/ui/Box";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { dispatchError } from "@/utils/user.slice";
import { save } from "@/utils/store";
export default function Auth() {
  const { t } = useTranslation();
  const router = useRouter();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const auth = async (data) => {
    const response = await login(data);
    if (response?.data) {
      console.log(response?.data, data);
      await save("authPayload", data);
      await save("account", response?.data?.view?.account);
      await save("authToken", response?.data?.view?.token);
      router.dismissAll();
    }
  };

  const formData = {
    onSubmit: async (data) => {
      const response = await auth(data).catch((e) =>
        dispatch(dispatchError(t("common.authError")))
      );
    },

    actionLabel: t("auth.login"),
    secondaryAction: {
      label: t("auth.register"),
      onPress: () => router.push("register"),
    },
    helperLink: {
      label: t("auth.goOnWithoutLogin"),
      onPress: () => router.dismissAll(),
    },
    fields: [
      {
        type: "text",
        name: "usr",
        placeholder: "Email",
        defaultValue: "",
        required: true,
        label: t("auth.emailAddress"),
      },
      {
        type: "password",
        name: "psw",
        placeholder: "Password",
        defaultValue: "",
        required: true,
        label: t("auth.password"),
        helperLink: {
          label: t("auth.forgotPassword"),
          onPress: () => router.push("forgot"),
        },
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

      <View style={{ marginBottom: 20 }}>
        <SubHeading title={t("auth.title")} />
      </View>

      <Box style={[styles.p20w, styles.p20h]}>
        <Form formData={formData} error={error} />
      </Box>
    </View>
  );
}
