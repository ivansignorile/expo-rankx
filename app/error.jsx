import { Text, View } from "react-native";
import SubHeading from "@/components/ui/SubHeading";
import styles from "@/utils/css";
import { useTranslation } from "react-i18next";
import Header from "@/components/ui/Header";
import Form from "@/components/ui/Form";
import Box from "@/components/ui/Box";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { dispatchError } from "@/utils/user.slice";
import { Button } from "@/components/ui/Buttons";
export default function Error() {
  const { t } = useTranslation();
  const router = useRouter();
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const auth = async (data) => {
    console.log("data", data);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        display: "flex",
      }}
    >
      <View style={{ flex: 1 }}>
        <Header overHeadShown={false} />
        <View style={{
          padding: 20
        }}>
          <SubHeading title={t("common.error")} subtitle={error} />
          <Button
            title={t("common.back")}
            selected
            style={[styles.mt20]}
            onPress={() => {
              dispatch(dispatchError(false));
              router.dismiss();
            }}
          />
        </View>
      </View>
    </View>
  );
}
