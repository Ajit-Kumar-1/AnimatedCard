import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';
import MyBookingsScreen from './src/MyBookingsScreen';
import BookingScreen from './src/BookingScreen';
import {GOLD, LIGHT_GRAY, CEMENT} from './src/utils/Colors';
import {HOME, BOOKING, MY_BOOKINGS, PROFILE} from './src/utils/Strings';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: GOLD,
        tabBarInactiveTintColor: LIGHT_GRAY,
        tabBarStyle: {
          backgroundColor: CEMENT,
        },
      }}>
      <Tab.Screen name={HOME} component={HomeScreen} />
      <Tab.Screen name={BOOKING} component={BookingScreen} />
      <Tab.Screen name={MY_BOOKINGS} component={MyBookingsScreen} />
      <Tab.Screen name={PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
