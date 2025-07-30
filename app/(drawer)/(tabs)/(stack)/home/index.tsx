import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'
import { router, useNavigation } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  const navigation = useNavigation();
  const onToggleDrawer = ()=>{
    navigation.dispatch(DrawerActions.toggleDrawer);
  }
  return (
    <SafeAreaView>
       <View className='px-10 mt-5'>

        <CustomButton color="primary"  className='mb-5'
        onPress={()=> router.push("/products")}
        >Productos</CustomButton>

        <CustomButton  color="secondary"  className='mb-5'
        onPress={()=> router.push("/profile")}
        >Perfil</CustomButton>

          <CustomButton  color="tertiary"  className='mb-5'
        onPress={()=> router.push("/setting")}
        >Ajustes</CustomButton>
        <CustomButton  onPress={onToggleDrawer} color='primary'>
          Abrir Menu
        </CustomButton>
      </View>
  </SafeAreaView>
  )
}

export default Home