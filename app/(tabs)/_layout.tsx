import { Tabs, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import SVG from "@/utils/svg";
import Header from "@/components/ui/Header";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/utils/css";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const operation = useSelector((state: any) => state.user.operation);

  return (
    <>
      <Tabs
        screenOptions={{
          headerTransparent: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#fff",
          tabBarActiveBackgroundColor:
            Colors[colorScheme ?? "light"].background,
          tabBarInactiveBackgroundColor: "#222221",
          headerShown: false,
          // tabBarButton: HapticTab,
          tabBarIconStyle: {
            width: "100%",
            height: "100%",
          },
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
              backgroundColor: "#222221",
              height: 140,
              bottom: -40,
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarShowLabel: false,
            headerShown: true,
            header: () => <Header />,
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  paddingTop: 20,
                }}
              >
                <AntDesign size={20} name="home" color={color} />
                <Text style={[styles.mt10, styles.BodyS, styles.bold, { color: color, textTransform: "uppercase" }]}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: "Classifiche",
            headerShown: true,
            header: () => <Header />,
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  paddingTop: 20,
                }}
              >
                <AntDesign size={20} name="menufold" color={color} />

                <Text style={[styles.mt10, styles.BodyS, styles.bold, { color: color, textTransform: "uppercase" }]}>
                  Classifiche
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Esplora",

            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  paddingTop: 20,
                }}
              >
                <AntDesign size={20} name="staro" color={color} />
                <Text style={[styles.mt10, styles.BodyS, styles.bold, { color: color, textTransform: "uppercase" }]}>
                  Eventi
                </Text>
              </View>
            ),
            headerShown: true,
            header: () => <Header />,
          }}
        />
        <Tabs.Screen
          name="other"
          options={{
            title: "Esplora",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  paddingTop: 20,
                }}
              >
                <AntDesign size={20} name="user" color={color} />
                <Text style={[styles.mt10, styles.BodyS, styles.bold, { color: color, textTransform: "uppercase" }]}>
                  Profilo
                </Text>
              </View>
            ),
            headerShown: false,
            header: () => <Header />,
          }}
        />
      </Tabs>
    </>
  );
}
