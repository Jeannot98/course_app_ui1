import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const BottomNavigationBar = () => {
  return (
    <View className='h-[80px] bottom-0 z-[100px] flex-row gap-2 items-center px-[20px]'>
      <View className='h-[60px] w-[70px] bg-[#FFEDEE] rounded-[30px] justify-center items-center mr-[10PX]'>
        <Icon name='local-mall' size={25} className='bg-[#FF6670]'/>
      </View>

      <View className='h-[60px] bg-[#6E8AFA] flex-1 rounded-[30px] justify-center items-center'>
        <Text className='text-[15px] text-white font-bold'>Buy Now</Text>
      </View>
    </View>
  )
}

export default BottomNavigationBar