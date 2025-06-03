import { Text, View } from "react-native";
import {AllEvents}  from "@/components/fightersWidget/Events";
import Box from "@/components/ui/Box";
import Heading from "@/components/ui/Heading";
export default function Index() {
  return (
     <View style={{
          backgroundColor: "#000",
        }}>
           <Box style={[]}>
                    <Heading title={"Eventi"} />
                  </Box>
          <AllEvents />
        </View>
  );
}
