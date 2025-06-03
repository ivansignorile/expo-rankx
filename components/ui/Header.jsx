import { TouchableOpacity, Image, View } from "react-native";
import Logo from "@/assets/icons/Logo";
import Wa from "@/assets/icons/Wa";
import UserIcon from "./UserIcon";
import { useRouter } from "expo-router";
import { logout } from "@/utils/service";
import Entypo from '@expo/vector-icons/Entypo';

export default function Header({ overHeadShown = true, back = false }) {
  const router = useRouter();
  return (
    <View>
     
      <View
        style={{
          backgroundColor: "#111",
          height: 120,
          display: "flex",
          paddingHorizontal: 30,
          paddingTop: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
       
        <View style={{ flex: 1 }}>
          <Logo width={140} />
        </View>

        <View>
          <TouchableOpacity
            onPress={async () => {
              router.push("onboarding");
              await logout();
              
            }}
          >
            <Entypo name="instagram" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
