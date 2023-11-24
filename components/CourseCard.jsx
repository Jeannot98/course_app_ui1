import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CourseCard = ({course}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('CourseScreen', {data:course})}>
        <ImageBackground source={course.image} style={{height: windowHeight/3, width:windowWith/2 -30}} className={`my-2 mx-1 
        overflow-hidden pt-6 pl-5 rounded-xl`}>
            <Text className='text-xl font-bold pb-1'>{course.name}</Text>
            <Text className='text-[#6E8AFA] font-[600px]'>{course.totalCourse + ' Courses'}</Text>
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default CourseCard