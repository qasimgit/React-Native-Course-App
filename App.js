import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import CourseScreen from './src/screens/CourseScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{title: null, headerStyle: {elevation: 0}}}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <Icon name="sort" size={25} style={{marginLeft: 20}} />
            ),
            headerRight: () => (
              <Image
                source={require('./src/assets/person.png')}
                style={{width: 40, height: 40, marginRight: 17}}
              />
            ),
          }}></Stack.Screen>
        <Stack.Screen
          name="CourseScreen"
          component={CourseScreen}
          options={({navigation}) => ({
            headerTransparent: true,
            headerRight: () => (
              <Icon name="more-vert" size={20} style={{marginRight: 17}} />
            ),
          })}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
