import { Text, View } from "react-native";
import { FightersRanking } from "@/components/fightersWidget/Ranking";
import Box from "@/components/ui/Box";
import Heading from "@/components/ui/Heading";
export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#000",
      }}
    >
      <Box style={[]}>
        <Heading title={"Classifica"} />
      </Box>
      <FightersRanking />
    </View>
  );
}
