import { WebView } from "react-native-webview";
import { readAsStringAsync } from "expo-file-system";
import { useAssets } from "expo-asset";
import { useState } from "react";
import { Linking, View } from "react-native";
import { TouchableOpacity } from "react-native";

export const FightersWidgetSearch = () => {
  const [index, indexLoadingError] = useAssets(
    require("../../assets/widgets/fighters/search.html")
  );

  const [height, setHeight] = useState(200);

  const [html, setHtml] = useState("");

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
        width: "100%",
        paddingRight: 10,
        backgroundColor: "#000",
      }}
    >
      <WebView
        style={{
          height: 1200,
          width: "100%",
          backgroundColor: "#000",
          display: "flex",
        }}
        onLoad={() => {}}
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
