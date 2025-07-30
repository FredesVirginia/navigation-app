import CustomButton from '@/components/shared/CustomButton'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
       <View className='px-10 mt-5'>

        <CustomButton color="primary"  className='mb-5'
        onPress={()=> router.push("/drawer/tabs/products")}
        >Productos</CustomButton>

        <CustomButton  color="secondary"  className='mb-5'
        onPress={()=> router.push("/drawer/tabs/profile")}
        >Perfil</CustomButton>

          <CustomButton  color="tertiary"  className='mb-5'
        onPress={()=> router.push("/drawer/tabs/setting")}
        >Ajustes</CustomButton>
      </View>
  </SafeAreaView>
  )
}

export default Home