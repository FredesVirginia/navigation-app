import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className='text-center'>Home</Text>
        <Link href="/products">Productos</Link>
        <Link href="/setting">Setting</Link>
        <Link href="/profile">Profile</Link>
      </View>
    </SafeAreaView>
  )
}

export default Home