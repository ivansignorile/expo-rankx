import { Text, View } from "react-native";
import SubHeading from "@/components/ui/SubHeading";
import styles from "@/utils/css";
import { useTranslation } from "react-i18next";
import Header from "@/components/ui/Header";
import Form from "@/components/ui/Form";
import Box from "@/components/ui/Box";
import { useState } from "react";
import { useRouter } from "expo-router";
import { register } from "@/utils/service";
import { useDispatch } from "react-redux";
import { dispatchFeedback, dispatchError,dispatchAction } from "@/utils/user.slice";
export default function Register() {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const callback = async (data) => {
    const { psw, usr } = data;
    const response = await register({
      psw,
      usr,
    }).catch((err) => {
      dispatch(
        dispatchError(err?.response?.data?.message || err.response.status)
      );
    });
    if (response) {
      dispatch(dispatchFeedback(t("register.success")));
      dispatch(dispatchAction('auth'));
    }
  };

  const formData = {
    onSubmit: (data) => callback(data),
    actionLabel: t("register.register"),
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
        label: t("register.emailAddress"),
      },
      {
        type: "password",
        name: "psw",
        placeholder: "Password",
        defaultValue: "",
        required: true,
        label: t("register.password"),
        regex: {
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          message: t("register.passwordError"),
        },
        helperLink: {
          label: t("register.passwordDisclaimer"),
          onPress: () => console.log("forgot password"),
        },
      },
      {
        type: "password",
        name: "passwordConfirmation",
        placeholder: "Password",
        defaultValue: "",
        required: true,
        label: t("register.passwordConfirmation"),
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
      <View style={{ flex: 0.27 }}>
        <Header overHeadShown={false} />
        <SubHeading title={t("register.title")} />
      </View>

      <Box style={[styles.p20w, styles.p20h, { flex: 0.66 }]}>
        <Form formData={formData} error={error} />
      </Box>
    </View>
  );
}
