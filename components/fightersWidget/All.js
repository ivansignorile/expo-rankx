import { WebView } from "react-native-webview";
import { readAsStringAsync } from "expo-file-system";
import { useAssets } from "expo-asset";
import { useState, useEffect } from "react";
import { ActivityIndicator, Linking, View } from "react-native";

export const FightersWidgetAllByTeam = ({ team }) => {
  const [index, indexLoadingError] = useAssets(
    require("../../assets/widgets/fighters/byTeam.html")
  );

  const [didLoad, setDidLoad] = useState(false);
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (index) {
      readAsStringAsync(index[0].localUri).then((data) => {
        const _replaced = data?.replace(
          'data-team=""',
          'data-team="' + team?.trim() + '"'
        );
        setHtml(_replaced);
      });
    }
  }, [index, team]);

  if (!html) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"#fff"}
        style={{
          marginTop: 100,
        }}
      />
    );
  }

  return (
    <View
      style={{
        height:400,
        display: "flex",
        paddingHorizontal: 10,
      }}
    >
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
          height:400,
          backgroundColor: "#000",
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
    </View>
  );
};
