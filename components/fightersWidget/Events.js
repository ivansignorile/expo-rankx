import { WebView } from "react-native-webview";
import { readAsStringAsync } from "expo-file-system";
import { useAssets } from "expo-asset";
import { useState } from "react";
import { Dimensions, Linking, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native";

export const AllEvents = () => {
  const [index, indexLoadingError] = useAssets(
    require("../../assets/widgets/nextEvent/all.html")
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
        height: Dimensions.get("window").height - 200,
        display: "flex",
        paddingHorizontal: 0,
        backgroundColor: "#000",
      }}
    >
      <WebView
        style={{
          height: Dimensions.get("window").height,
          display: "flex",
          backgroundColor: "#000",
        }}
        scrollEnabled={false}
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
