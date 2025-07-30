import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

const  DrawerLayout= () => {
  return (
    <Drawer 
    drawerContent={CustomDrawer}
    screenOptions={{
      overlayColor: "rgba(0,0,0,0.4)",
      drawerActiveTintColor:"indigo",
      headerShadowVisible: false,
      // headerShown: false,
      sceneStyle:{
        backgroundColor : "white"
      }
    }}>
       <Drawer.Screen
          name="tabs/home"
 // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Tabs + Stack',
            title: 'Tabs + Stack',
            drawerIcon:({ color , size})=>(
              <Ionicons name="person-circle-outline" size={size} color={color}/>
            )
          }}
        />
        <Drawer.Screen
          name="user/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'User',
            drawerIcon:({ color , size})=>(
              <Ionicons name="person-circle-outline" size={size} color={color}/>
            )
          }}
        />
        <Drawer.Screen
          name="shedule/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Shedule',
            title: 'Shedule',
             drawerIcon:({ color , size})=>(
              <Ionicons name="home-outline" size={size} color={color}/>
            )
          }}
        />
      </Drawer>
  )
}

export default DrawerLayout