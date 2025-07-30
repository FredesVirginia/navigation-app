import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";
import React from "react";

const StackLayout = () => {
  const navigation = useNavigation();

 const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
  if (canGoBack && navigation.canGoBack()) {
    router.back()
    return;
  }
  navigation.dispatch(DrawerActions.toggleDrawer());
};


  return (
  

    <Stack
      screenOptions={{
        //aqui e, tinColor y ccabBack, es para preguntat si se puede ir atraz, asi no mosnuestra direrto el drawer o ir hacia atraz
        headerLeft : ({ tintColor , canGoBack}) => <Ionicons
      name={ canGoBack ? "arrow-back-outline" : "grid-outline"}  className="mr-5" size={20}
        onPress={()=>onHeaderLeftClick(canGoBack)}
        />,
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
      {/* <Stack.Screen
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
      /> */}
    </Stack>
  );
};

export default StackLayout;
