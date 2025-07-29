import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import "./global.css";
const RootLayout = () => {
  //ESTO ES PARA, EL USO DE CARGAR FUENTES
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return <Stack
      screenOptions={{
        headerShown: true, // mostrar cabecera
        headerTitleAlign: "center", // centrar el título
        headerStyle: {
          backgroundColor: "#fff", // color de fondo del header
          // puedes personalizar más aquí
        },
        title:"Home",
        headerTintColor: "#000", // color del texto del header
        headerTitleStyle: {
          fontFamily: "WorkSans-Black",
          fontSize: 16,
        },
      }}
    >
      <Slot />
    </Stack>
};

export default RootLayout;
