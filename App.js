import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/HomeScreen';
import { Image } from 'react-native';
import CourseScreen from './screens/CourseScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title: null, headerStyle: { elevation: 0 } }}>
        <Stack.Screen name="Home" options={{
          headerLeft: () => (<Icon name='sort' size={25} style={{ marginLeft: 10 }} />),
          headerRight: () => <Image style={{ height: 40, width: 40, borderRadius: 100, marginRight: 10 }} source={require('./assets/person1.jpg')} />
        }} component={HomeScreen} />

        <Stack.Screen name='CourseScreen' component={CourseScreen}
        options={{headerTransparent:true, headerRight:()=> <Icon name='more-vert' size={25} style={{marginRight:5}}/>}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}