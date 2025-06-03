import { Colors } from "@/constants/Colors";
import styles from "@/utils/css";
import { useEffect } from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import PhoneIcon from "./PhoneIcon";
import MapIcon from "./Map";
import Chat from "../Post/Chat";
export default function Card({ data }) {
  useEffect(() => {
    console.log(data?.picture);
  }, [data]);
  return (
    <TouchableOpacity
      onPress={data?.onPress && data.onPress}
      style={[
        styles.hcard,
        {
          borderWidth: 1,
          borderColor: Colors.primary,
          backgroundColor: "#fff",
          marginHorizontal: "auto",
          width: "100%",
          borderRadius: 20,
          overflow: "hidden",
        },
      ]}
    >
      {data?.picture && (
        <Image
          source={{
            uri: data.picture?.includes("undefined")
              ? "https://lovingpet.it/wp-content/uploads/2024/05/Raggruppa-345-1.png"
              : data.picture,
          }}
          style={[
            styles.hcardImage,
            {
              borderRadius: 20,
            },
          ]}
        />
      )}
      <View style={[styles.p20]}>
        <Text allowFontScaling={false} style={[styles.Heading2, styles.mb5]}>
          {data.title}
        </Text>
        <Text allowFontScaling={false} style={[styles.BodyM]}>
          {data.subtitle}
        </Text>

        {data?.address && (
          <View style={[styles.mt20]}>
            <Text
              allowFontScaling={false}
              style={[
                styles.BodyM,
                {
                  opacity: 0.5,
                },
              ]}
            >
              Indirizzo
            </Text>
            <Text allowFontScaling={false} style={[styles.BodyM]}>
              {data.address}
            </Text>
          </View>
        )}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginVertical: 10,
              gap: 15,
            }}
          >
            {data?.phone && (
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:${data.phone}`)}
              >
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.BodyM,
                    {
                      color: Colors.primary,
                      textDecorationLine: "underline",
                    },
                  ]}
                >
                  <PhoneIcon />
                </Text>
              </TouchableOpacity>
            )}

            {data?.address && (
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `https://www.google.com/maps/search/?api=1&query=${data.address}`
                  )
                }
              >
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.BodyM,
                    {
                      color: Colors.primary,
                      textDecorationLine: "underline",
                    },
                  ]}
                >
                  <MapIcon />
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {data?.chat && (
            <TouchableOpacity
              onPress={() => Linking.openURL(`whatsapp://send?phone=${data.chat}`)}
            >
              <Text
                allowFontScaling={false}
                style={[
                  styles.BodyM,
                  {
                    color: Colors.primary,
                    textDecorationLine: "underline",
                  },
                ]}
              >
                <Chat dark={true} />
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
