import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/home';
import ProfileScreen from './src/screens/profile';
import MyBookingsScreen from './src/screens/my_bookings';
import BookingScreen from './src/screens/booking';
import {GOLD, LIGHT_GRAY, CEMENT} from './src/utils/Colors';
import {HOME, BOOKING, MY_BOOKINGS, PROFILE} from './src/utils/Strings';
import HomeIcon from './assets/icons/home.svg';
import MyBookingsIcon from './assets/icons/my_bookings.svg';
import BookingIcon from './assets/icons/booking.svg';
import ProfileIconTopHalf from './assets/icons/profile_1.svg';
import ProfileIconBottomHalf from './assets/icons/profile_2.svg';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GOLD,
        tabBarInactiveTintColor: LIGHT_GRAY,
        tabBarStyle: {
          paddingTop: 6,
          backgroundColor: CEMENT,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          lineHeight: 20,
          fontWeight: '400',
        },
      }}>
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon color={focused ? GOLD : LIGHT_GRAY} />
          ),
        }}
      />
      <Tab.Screen
        name={BOOKING}
        component={BookingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BookingIcon color={focused ? GOLD : LIGHT_GRAY} />
          ),
        }}
      />
      <Tab.Screen
        name={MY_BOOKINGS}
        component={MyBookingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MyBookingsIcon color={focused ? GOLD : LIGHT_GRAY} />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.profileIcon}>
              <ProfileIconTopHalf color={focused ? GOLD : LIGHT_GRAY} />
              <ProfileIconBottomHalf color={focused ? GOLD : LIGHT_GRAY} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  profileIcon: {
    alignItems: 'center',
  },
});

export default App;
