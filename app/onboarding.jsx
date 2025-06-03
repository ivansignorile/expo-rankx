import { Text, View } from "react-native";
import Heading from "@/components/ui/Heading";
import SubHeading from "@/components/ui/SubHeading";
import styles from "@/utils/css";
import { useTranslation } from "react-i18next";
import Header from "@/components/ui/Header";
import Box from "@/components/ui/Box";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/Buttons";
import CountryFlag from "react-native-country-flag";
import i18next from "i18next";
import { save, load } from "@/utils/store";
import { useRouter } from "expo-router";

export default function Index() {
  const { t } = useTranslation();
  const locale = useSelector((state) => state.user.locale);
  const [selectedLanguage, setSelectedLanguage] = useState(locale);
  const router = useRouter();
  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const initLocale = async () => {
    const storedLocale = await load("locale");
    setSelectedLanguage(storedLocale || locale);
  };

  useEffect(() => {
    initLocale();
  }, []);

  const languages = [
    {
      label: "Italiano",
      value: "it",
      isoCode: "IT",
    },
    {
      label: "English",
      value: "en",
      isoCode: "GB",
    },
    {
      label: "Français",
      value: "fr",
      isoCode: "FR",
    },
    {
      label: "Español",
      value: "es",
      isoCode: "ES",
    },
    {
      label: "Deutsch",
      value: "de",
      isoCode: "DE",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        display: "flex",
      }}
    >
      <View style={{ flex: 0.27, marginBottom: 20 }}>
        <Header overHeadShown={false} />
        <SubHeading
          title={t("onboarding.welcome")}
          subtitle={t("onboarding.subtitle")}
        />
      </View>

      <Box style={[styles.p20w, styles.p10h, { flex: 0.66 }]}>
        {languages.map((language) => (
          <Button
            key={language.value}
            title={language.label}
            selected={selectedLanguage === language.value}
            alignItems="flex-start"
            justifyContent="space-between"
            onPress={() => {
              setSelectedLanguage(language.value);
            }}
            endIcon={
              <CountryFlag
                isoCode={language.isoCode}
                size={25}
                style={{
                  borderRadius: 100,
                  width: 25,
                  height: 25,
                }}
              />
            }
          />
        ))}

        <Button
          title={t("common.confirm")}
          selected
          half
          style={[styles.mt20]}
          onPress={async () => {
            await save("locale", selectedLanguage);
            router.dismiss();
            router.push("/auth");
          }}
        ></Button>
      </Box>
    </View>
  );
}
