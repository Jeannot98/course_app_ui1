import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CourseContentList = ({content, index}) => {
  return (
    <View className='flex-row items-center px-[20px] py-[20px]'>
      <Text className='text-[40px] font-bold text-[#E4E7F4]'>{'0' + (index + 1)}</Text>
      
      <View className='px-[20px] flex-1'>
        <Text className='text-[15px] text-[#A0A5BD] font-[500px] mt-[5px]'>{content.time}</Text>
        <Text className='text-[18px] font-bold'>{content.title}</Text>
      </View>

      <View className='w-[40px] h-[40px] bg-[#49CC96] rounded-[20px] justify-center items-center'>
        <Icon name='play-arrow' size={25} color={'white'}/>
      </View>
    </View>
  )
}

export default CourseContentList