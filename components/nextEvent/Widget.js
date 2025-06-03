import { WebView } from "react-native-webview";
import { readAsStringAsync } from "expo-file-system";
import { useAssets } from "expo-asset";
import { useState } from "react";
import { ActivityIndicator, Linking, View } from "react-native";
import { TouchableOpacity } from "react-native";

export const Widget = () => {
  const [index, indexLoadingError] = useAssets(
    require("../../assets/widgets/nextEvent/index.html")
  );

  const [height, setHeight] = useState(200);

  const [didLoad, setDidLoad] = useState(false);

  const toggleHeight = () => {
    setHeight(height === 200 ? 400 : 200);
  };

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
    <TouchableOpacity
      style={{
        height: parseInt(height),
        display: "flex",
      }}
      onPress={toggleHeight}
    >
      {!didLoad && <ActivityIndicator size="large" color="#fff" />}
      <WebView
        scrollEnabled={false}
        style={{
          height: parseInt(height),
          display: "flex",
          backgroundColor: "#19191E",
          opacity: didLoad ? 1 : 0,
        }}
        onLoad={() => {
          setTimeout(() => {
            setDidLoad(true);
          }, 3000);
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
    </TouchableOpacity>
  );
};
