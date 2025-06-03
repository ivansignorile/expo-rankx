import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import store, { load } from "@/utils/store";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Provider, useDispatch, useSelector } from "react-redux";
import { getLocales } from "expo-localization";
import { addToCart, setLocale } from "@/utils/user.slice";
import "@/constants/i18n.config";
import i18n from "i18next";
import styles from "@/utils/css";
import { Text, TouchableOpacity, View } from "react-native";
import CartIcon from "@/components/ui/CartIcon";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Container = () => {
  const locales = getLocales();
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = useSelector((state: any) => state.user.locale);
  const error = useSelector((state: any) => state.user.error);
  const feedback = useSelector((state: any) => state.user.feedback);
  const cart = useSelector((state: any) => state.user.cart);

  useEffect(() => {
    dispatch(setLocale(locales[0].languageCode));
  }, [locales]);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  useEffect(() => {
    if (error) {
      router.push("error");
    }
  }, [error]);
  useEffect(() => {
    if (feedback) {
      router.push("feedback");
    }
  }, [feedback]);

  const checkIfShouldPreventOnboarding = async () => {
    let shouldPreventOnboarding = await load("shouldPreventOnboarding");
    shouldPreventOnboarding = await load("authToken");
    if (shouldPreventOnboarding) {
      return;
    }
    router.push("/onboarding");
  };

  useEffect(() => {
    checkIfShouldPreventOnboarding();
  }, []);

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="onboarding"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="auth"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="forgot"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="pass/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="error"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="feedback"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
      </Stack>

      {cart && (
        <TouchableOpacity style={[styles.fab]}
          onPress={() => dispatch(addToCart(null))}
        >
          <Text style={[styles.fabText, styles.BodyL, styles.bold]}>
            {cart.length}
          </Text>
          <CartIcon />
        </TouchableOpacity>
      )}
    </>
  );
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    "SempioneGrotesk-Bold": require("../assets/fonts/SempioneGrotesk-Bold.ttf"),
    "SempioneGrotesk-Regular": require("../assets/fonts/SempioneGrotesk-Regular.ttf"),
    "SempioneGrotesk-Medium": require("../assets/fonts/SempioneGrotesk-Medium.ttf"),
    "Archivo-Regular": require("../assets/fonts/Archivo-Regular.ttf"),
    "Archivo-Bold": require("../assets/fonts/Archivo-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={DefaultTheme}>
        <Container />
        <StatusBar style="light" />
      </ThemeProvider>
    </Provider>
  );
}
