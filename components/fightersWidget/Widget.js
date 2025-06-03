import { WebView } from "react-native-webview";
import { readAsStringAsync } from "expo-file-system";
import { useAssets } from "expo-asset";
import { useState } from "react";
import { ActivityIndicator, Linking, View } from "react-native";
import { TouchableOpacity } from "react-native";

export const FightersWidget = ({
  team
}) => {
  const [index, indexLoadingError] = useAssets(
    require("../../assets/widgets/fighters/index.html")
  );

  const [height, setHeight] = useState(200);
  const [didLoad, setDidLoad] = useState(false);

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
        paddingHorizontal: 10,
      }}
    >
      {!didLoad && <ActivityIndicator size={"large"} color={"#fff"} style={{
        marginTop: 100,
      }} />}
      <WebView
        scrollEnabled={false}
        style={{
          height: 1200,
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
