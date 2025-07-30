import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'


const Products = () => {
  return (
    <View className='flex flex-1 px-4'>
    <FlatList
    data={products}
    keyExtractor={(item)=> item.id}
    renderItem={({item})=>(
       <View className='mt-10'>
        <Text className='text-2xl font-work-black'>{item.title}</Text>
         <Text className=''>{item.description}</Text>
         <View className='flex flex-row justify-between mt-2'>
             <Text className='text-2xl font-work-black'>{item.price}</Text>
             <Link 
             href={{
    pathname: "/products/[id]",
    params: { id: item.id.toString() }, // Asegurate de que sea string
  }}
             
             className="text-primary">
              Ver Detalles
             </Link>
         </View>
      </View>
     )
    }
    />
    </View>
  )
}

export default Products