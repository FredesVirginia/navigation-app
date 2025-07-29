import { Drawer } from 'expo-router/drawer';
import React from 'react';

const  DrawerLayout= () => {
  return (
    <Drawer>
        <Drawer.Screen
          name="user/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'User',
          }}
        />
        <Drawer.Screen
          name="shedule/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Shedule',
            title: 'Shedule',
          }}
        />
      </Drawer>
  )
}

export default DrawerLayout