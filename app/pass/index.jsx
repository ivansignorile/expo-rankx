import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
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
import { readAsStringAsync } from "expo-file-system";

import { addToCart } from "@/utils/user.slice";
import { Colors } from "@/constants/Colors";
import Hero from "@/components/ui/Hero";
import Accordion from "../../components/ui/Accordion";
import { useAssets } from "expo-asset";
import WebView from "react-native-webview";
export default function Pass() {
  const { t } = useTranslation();
  const [packages, setPackages] = useState([]);
  const dispatch = useDispatch();
  const fighter = useSelector((state) => state.user.fighter);
  const cart = useSelector((state) => state.user.cart) || [];
  const router = useRouter();
  const [places, setPlaces] = useState([]);
  const [discounted_places, setDiscountedPlaces] = useState([]);

  const [index, indexLoadingError] = useAssets(
    require("../../assets/widgets/fighters/fighter.html")
  );
  const [mindex, mindexLoadingError] = useAssets(
    require("../../assets/widgets/fighters/matches.html")
  );

  const [didLoad, setDidLoad] = useState(false);
  const [html, setHtml] = useState("");
  const [matchesHtml, setMatchesHtml] = useState("");

  useEffect(() => {
    if (fighter) {
      if (index && mindex) {
        readAsStringAsync(index[0].localUri).then((data) => {
          let _replaced = data?.replace(
            'data-id=""',
            'data-id="' + fighter?.id + '"'
          );
          setHtml(_replaced);
        });

        readAsStringAsync(mindex[0].localUri).then((data) => {
          let _replaced = data?.replace(
            'data-id=""',
            'data-id="' + fighter?.id + '"'
          );
          setMatchesHtml(_replaced);
        });
      }
    }
  }, [fighter, index, mindex]);

  //   useEffect(() => {
  //     (async () => {
  //       const response = await getPackages();
  //       setPackages(response?.listaPacchettiVendibili);
  //     })();
  //   }, []);
  return (
    <ImageBackground
      source={{
        uri: fighter?.attributes?.picture?.data?.attributes?.url
          ? "https://rankx.bkt.studio" +
            fighter?.attributes?.picture?.data?.attributes?.url
          : "",
      }}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
      imageStyle={{ resizeMode: "cover", alignSelf: "flex-end", opacity: 0.3 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          width: "100%",
        }}
      >
        <ScrollView>
          <Box
            style={[
              styles.inlineFlex,
              {
                justifyContent: "space-between",
                paddingLeft: 30,
                alignItems: "center",
                backgroundColor: "transparent",
                width: "100%",
                paddingVertical: 30,
                paddingTop: 70,
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
            <SubHeading invert={true} subtitle={"Torna alla home"} />
          </Box>

          {!didLoad && (
            <ActivityIndicator
              size={"large"}
              color={"#fff"}
              style={{
                marginTop: 100,
              }}
            />
          )}

          <WebView
            scrollEnabled={false}
            style={{
              height: 550,
              backgroundColor: "transparent",
              display: "flex",
              opacity: didLoad ? 1 : 0,
            }}
            onLoad={() => {
              setTimeout(() => {
                setDidLoad(true);
              }, 2000);
            }}
            source={{ html }}
            onMessage={(event) => {
              // Gestisci i messaggi provenienti dalla WebView
              const message = event.nativeEvent.data;
              console.log("Message from WebView:", message);
              Linking.openURL(message);
              // Puoi aggiungere logica per gestire gli URL o altre informazioni
            }}
          />
          <Box style={[]}>
            <Heading title={"Match"} />
          </Box>
          <WebView
            scrollEnabled={false}
            style={{
              height: 550,
              backgroundColor: "transparent",
              display: "flex",
              opacity: didLoad ? 1 : 0,
            }}
            onLoad={() => {
              setTimeout(() => {
                setDidLoad(true);
              }, 2000);
            }}
            source={{ html: matchesHtml }}
            onMessage={(event) => {
              // Gestisci i messaggi provenienti dalla WebView
              const message = event.nativeEvent.data;
              console.log("Message from WebView:", message);
              Linking.openURL(message);
              // Puoi aggiungere logica per gestire gli URL o altre informazioni
            }}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
