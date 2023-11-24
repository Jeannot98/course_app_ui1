import { View, Text, ImageBackground, Image, FlatList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CourseContentList from '../components/CourseContentList'
import BottomNavigationBar from '../components/BottomNavigationBar'

const CourseScreen = ({ route }) => {
  const { data } = route.params
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      flex: 1,

      // Paddings to handle safe area
      //paddingTop: insets.top,
      //paddingBottom: insets.bottom,
      //paddingLeft: insets.left,
      //paddingRight: insets.right,
      backgroundColor: '#fff',
    }}>
      <ImageBackground source={data.image} className='h-[400px]  px-5'>
        <Image resizeMode='contain' source={require('../assets/bestseller.png')} style={{ width: 100, marginTop: 50 }} />
        <Text className='text-[25px] font-bold top-[-20]'>Design Thinking</Text>

        <View className='flex-row items-center top-[-20] gap-2'>
          <View className='flex-row items-center'>
            <Icon name='people' size={25} color={'#61688B'} />
            <Text className='text-[#61688B] font-bold ml-2'>{data.students + 'k'}</Text>
          </View>

          <View className='flex-row items-center'>
            <Icon name='star' size={25} color={'#61688B'} />
            <Text className='text-[#61688B] font-bold ml-2'>{data.star + 'k'}</Text>
          </View>
        </View>
        <Text className='text-[25px] font-bold top-[-20] '>{'$' + data.price}</Text>
      </ImageBackground>

      <View className='flex-1 -mt-4 bg-white rounded-t-xl'>
        <Text className='mt-[20px] mb-[40px] mx-[20px] text-[21px] font-bold'>Course Content</Text>

        <FlatList showsVerticalScrollIndicator={false}
          data={data.courseContent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (<CourseContentList index={index} content={item} />)}
        />
      </View>

      <BottomNavigationBar/>
    </View>
  )
}

export default CourseScreen