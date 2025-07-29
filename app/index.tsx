import CustomButton from '@/components/shared/CustomButton';
import { Link, router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const App = () => {


  return (
  <SafeAreaView>
      <View className='px-10 mt-5'>

        <Link href="/products" asChild>
         <CustomButton color="primary"  
      
        >Productos</CustomButton>
        </Link>
        <CustomButton color="primary"  
        onPress={()=> router.push("/products")}
        >Productos</CustomButton>

        <CustomButton variant='text-only' color="primary"  
        onPress={()=> router.push("/products")}
        >Productos</CustomButton>
      </View>
  </SafeAreaView>
  )
}

export default App