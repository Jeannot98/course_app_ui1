import { View, Text, TextInput, FlatList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons';
import courses from '../data/Data';
import CourseCard from '../components/CourseCard';

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{
            flex: 1,

            // Paddings to handle safe area
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            backgroundColor: '#fff',
        }}>
            <View className='px-3'>
                <Text className='text-3xl font-bold '>Hey Jane,</Text>
                <Text className='text-2xl text-[#61688B] mt-2'>Find a course you want to learn</Text>

                <View className='h-14 bg-[#F5F5F7] mt-8 py-3 pl-4 rounded-[30px] flex-row items-center'>
                    <Icon name='search' size={30} />
                    <TextInput className='text-xl ml-3' placeholder='Search For Anything' />
                </View>

                <View className='py-6 flex-row justify-between'>
                    <Text className='text-xl font-bold'>Categories</Text>
                    <Text className='text-xl font-bold text-[#6E8AFA]'>See All</Text>
                </View>
            </View>

            <View className='flex-col items-center'>
                <FlatList showsVerticalScrollIndicator={false} numColumns={2} data={courses}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <CourseCard course={item} />}
                />
            </View>
        </View>
    )
}

export default HomeScreen