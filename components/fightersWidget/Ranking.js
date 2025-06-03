import { WebView } from "react-native-webview";
import { readAsStringAsync } from "expo-file-system";
import { useAssets } from "expo-asset";
import { useState } from "react";
import { ActivityIndicator, Linking, View } from "react-native";
import { TouchableOpacity } from "react-native";

export const FightersRanking = () => {
  const [index, indexLoadingError] = useAssets(
    require("../../assets/widgets/fighters/ranking.html")
  );

  const [height, setHeight] = useState(200);

  const [html, setHtml] = useState("");

  const [didLoad, setDidLoad] = useState(false);

  if (index) {
    readAsStringAsync(index[0].localUri).then((data) => {
      setHtml(data);
    });
  }

  if (!height) {
    return null;
  }

  return (
    <View
      style={{
        height: 1200,
        display: "flex",
        paddingHorizontal: 0,
      }}
    >
      {!didLoad && <ActivityIndicator size="large" color="#fff" />}
      <WebView
        scrollEnabled={false}
        style={{
          height: 1200,
          backgroundColor: "#000",
          display: "flex",
          opacity: didLoad ? 1 : 0,
        }}
        onLoad={() => {
          setDidLoad(true);
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
