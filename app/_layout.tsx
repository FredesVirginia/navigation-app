import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
  return( 

      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot/>
      </GestureHandlerRootView>
  )
 
  

};

export default RootLayout;
