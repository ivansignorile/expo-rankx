import { ScrollView, TouchableOpacity, View } from "react-native";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/Buttons";
import styles from "@/utils/css";
import { useTranslation } from "react-i18next";
import Box from "@/components/ui/Box";
import SubHeading from "@/components/ui/SubHeading";
import Header from "@/components/ui/Header";
import { useEffect, useState } from "react";
import { returnCardColorFromName } from "@/utils/service";
import { useRouter } from "expo-router";
import ArrowIcon from "@/components/ui/Arrow";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/utils/user.slice";
import { Colors } from "@/constants/Colors";
import Hero from "@/components/ui/Hero";
import Accordion from "../../components/ui/Accordion";
export default function Pass() {
  const { t } = useTranslation();
  const [packages, setPackages] = useState([]);
  const dispatch = useDispatch();
  const pass = useSelector((state) => state.user.fighter);
  const cart = useSelector((state) => state.user.cart) || [];
  const router = useRouter();
  const [places, setPlaces] = useState([]);
  const [discounted_places, setDiscountedPlaces] = useState([]);

  useEffect(() => {
    if (pass) {
      setPlaces(
        Object.keys(pass?.luoghi?.data).map((key) => {
          return {
            id: key,
            item: pass?.luoghi?.data[key],
          };
        })
      );
      setDiscountedPlaces(
        Object.keys(pass?.luoghi_sconto?.data).map((key) => {
          return {
            id: key,
            item: pass?.luoghi_sconto?.data[key],
          };
        })
      );
    }
  }, [pass]);

  //   useEffect(() => {
  //     (async () => {
  //       const response = await getPackages();
  //       setPackages(response?.listaPacchettiVendibili);
  //     })();
  //   }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <Header back={true} />
      <ScrollView>
        <Box
          style={[
            styles.inlineFlex,
            {
              justifyContent: "space-between",
              paddingLeft: 30,
              alignItems: "center",
            },
          ]}
        >
          <TouchableOpacity
            style={{
              transform: [
                { rotate: "-90deg" },
                {
                  translateX: 2.5,
                },
              ],
            }}
            onPress={() => router.back()}
          >
            <ArrowIcon />
          </TouchableOpacity>
          <Heading title={t("home.allPasses")} />
        </Box>

        {pass && (
          <View>
            <Hero
              title={pass.title}
              subtitle={
                t("pass.transports") + " " + t(`pass.${pass.trasporti}`)
              }
              details={
                pass.ingressi +
                " " +
                t("pass.ingressi") +
                " in " +
                pass.durata +
                " " +
                t("pass.giorni")
              }
              price={parseFloat(pass.prezzo_digitale).toFixed(2) + "€"}
              number={pass.durata}
              style={{
                backgroundColor: returnCardColorFromName(pass.colore_pass),
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
              }}
            />
            <View style={[styles.p20w]}>
              <Button
                title={t("common.addToCart")}
                twothird
                style={{
                  backgroundColor: Colors.third,
                }}
                onPress={async () => {
                  await dispatch(addToCart([...cart, pass]));
                  console.log("OK");
                }}
              />

              <SubHeading
                title={t("pass.whatsIncluded")}
                subtitle={pass.descrizione}
              />
            </View>
            <Accordion
              title={t("pass.included_places")}
              open={true}
              items={places}
            ></Accordion>
            <Accordion
              title={t("pass.discounted_places")}
              open={false}
              items={discounted_places}
            ></Accordion>
          </View>
        )}

       
      </ScrollView>
    </View>
  );
}
