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
import { dispatchError, dispatchFeedback } from "@/utils/user.slice";
import { Button } from "@/components/ui/Buttons";
export default function Error() {
  const { t } = useTranslation();
  const router = useRouter();
  const feedback = useSelector((state) => state.user.feedback);
  const action = useSelector((state) => state.user.action);
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
          <SubHeading subtitle={feedback} />
          <Button
            title={t("common.back")}
            selected
            style={[styles.mt20]}
            onPress={() => {
              dispatch(dispatchError(false));
              dispatch(dispatchFeedback(false));
              router.dismiss();
              action && router.push(action);
            }}
          />
        </View>
      </View>
    </View>
  );
}
