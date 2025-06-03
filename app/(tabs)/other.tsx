import { Text, View } from "react-native";
import WebView from "react-native-webview";

export default function Index() {
  return (
    <View style={{ flex: 1, paddingBottom: 160, paddingTop: 80, backgroundColor: "#111" }}>
      <WebView
        source={{ uri: "https://rankx-app.netlify.app/auth?v=123" }}
        style={{ flex: 1, backgroundColor: "#111" }}
      />
    </View>
  );
}
