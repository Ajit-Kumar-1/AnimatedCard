import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/home';
import ProfileScreen from './src/screens/profile';
import MyBookingsScreen from './src/screens/my_bookings';
import BookingScreen from './src/screens/booking';
import {GOLD, LIGHT_GRAY, CEMENT} from './src/utils/Colors';
import {HOME, BOOKING, MY_BOOKINGS, PROFILE} from './src/utils/Strings';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GOLD,
        tabBarInactiveTintColor: LIGHT_GRAY,
        tabBarStyle: {
          backgroundColor: CEMENT,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 20,
          fontWeight: '400',
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
