import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
 <Tabs screenOptions={{ tabBarActiveTintColor: 'purple' , headerShown:false}}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home Screem',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />

       <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack Screem',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favoritos/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout