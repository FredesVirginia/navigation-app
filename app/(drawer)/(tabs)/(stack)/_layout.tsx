import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    // <Stack>
    //   <Stack.Screen
    //   name="home/index.tsx"
    //   options={{
    //     title: "Home Sreen"
    //   }}

    //   />
    // </Stack>

    <Stack
      screenOptions={{
        headerShown: true, // mostrar cabecera
        headerShadowVisible: false,
        headerTitleAlign: "center", // centrar el título
        headerStyle: {
          backgroundColor: "#fff", // color de fondo del header
          // puedes personalizar más aquí
        },
        title: "Home Screen",
        headerTintColor: "#000", // color del texto del header
        headerTitleStyle: {
          fontFamily: "WorkSans-Black",
          fontSize: 16,
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home Screem",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Products Screem",
        }}
      />{" "}
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile Screem",
        }}
      />
      <Stack.Screen
        name="setting/index"
        options={{
          title: "Setting Screem",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
