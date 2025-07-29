import { Slot, Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
   <Stack>
      <Stack.Screen name="index" options={{ title: "Home Screen" }} />
      <Stack.Screen name="home" options={{ title: "Home Screen" }} />
      <Stack.Screen name="products" options={{ title: "Products Screen" }} />
      <Stack.Screen name="setting" options={{ title: "Setting Screen" }} />
      {/* Este Slot es para renderizar la pantalla correspondiente */}
      <Slot />
    </Stack>
  );
};

export default StackLayout;
