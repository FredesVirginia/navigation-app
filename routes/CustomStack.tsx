// CustomStack.tsx (puedes crear este archivo en algún lugar de tu estructura)
import Products from "@/app/(stack)/products";
import { createStackNavigator } from "@react-navigation/stack";
import { withLayoutContext } from "expo-router";
import React from "react";

const { Navigator, Screen } = createStackNavigator();

// Con withLayoutContext haces que el stack funcione bien dentro de expo-router
export const CustomStack = withLayoutContext(Navigator);

// Luego defines tus pantallas aquí o en archivos por separado
// Ejemplo básico:
export function CustomStackScreens() {
  return (
    <>
     
      <Screen name="products" component={Products} />
    </>
  );
}

// Componentes de ejemplo (puedes importarlos de otros archivos)

