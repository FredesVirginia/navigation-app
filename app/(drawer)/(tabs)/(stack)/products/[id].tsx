import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';


// 🧭 ¿Qué es navigation.setOptions()?
// Es una función que permite actualizar dinámicamente las opciones de configuración del header (barra superior) de una pantalla una vez que la pantalla ya está montada.
// Hacer que cada pantalla tenga su propia configuración en base a la data que carga (como el nombre de un producto, usuario, etc).


const ProductsScreen = () => {
    const { id} = useLocalSearchParams();
    const product = products.find((p)=>p.id == id)
    const navigation = useNavigation()
    useEffect(() => {
      navigation.setOptions({
        title : product?.title ?? "Productos"
      })
    
    }, [product])
    
    if(!product){
        return <Redirect  href="/" />

    }
  return (
    <View className='px-5 mt-10'>
      <Text className='font-work-black text-2xl'>{product.title}</Text>
        <Text>{ product.description}</Text>
          <Text className='font-work-black'>{product.price}</Text>
    </View>
  )
}

export default ProductsScreen