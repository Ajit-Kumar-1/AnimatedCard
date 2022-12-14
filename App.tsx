import * as React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/home';
import ProfileScreen from './src/screens/profile';
import MyBookingsScreen from './src/screens/my_bookings';
import BookingScreen from './src/screens/booking';
import {GOLD, LIGHT_GRAY, CEMENT} from './src/utils/Colors';
import {
  HOME,
  BOOKING,
  MY_BOOKINGS,
  PROFILE,
} from './src/utils/LocalizableStrings';
import HomeIcon from './assets/icons/home.svg';
import MyBookingsIcon from './assets/icons/my_bookings.svg';
import BookingIcon from './assets/icons/booking.svg';
import ProfileIconTopHalf from './assets/icons/profile_1.svg';
import ProfileIconBottomHalf from './assets/icons/profile_2.svg';
import {
  BOOKING_NAVIGATION_KEY,
  HOME_NAVIGATION_KEY,
  MY_BOOKINGS_NAVIGATION_KEY,
  PROFILE_NAVIGATION_KEY,
} from './src/utils/Strings';

const Tab = createBottomTabNavigator();

const App: () => JSX.Element = () => (
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
          fontFamily: Platform.OS === 'ios' ? 'Roboto' : 'Roboto-Regular',
          fontWeight: Platform.OS === 'ios' ? '400' : undefined,
        },
      }}>
      <Tab.Screen
        name={HOME_NAVIGATION_KEY}
        component={HomeScreen}
        options={{
          headerTitle: HOME,
          tabBarIcon: ({focused}) => (
            <HomeIcon color={focused ? GOLD : LIGHT_GRAY} />
          ),
        }}
      />
      <Tab.Screen
        name={BOOKING_NAVIGATION_KEY}
        component={BookingScreen}
        options={{
          headerTitle: BOOKING,
          tabBarIcon: ({focused}) => (
            <BookingIcon color={focused ? GOLD : LIGHT_GRAY} />
          ),
        }}
      />
      <Tab.Screen
        name={MY_BOOKINGS_NAVIGATION_KEY}
        component={MyBookingsScreen}
        options={{
          headerTitle: MY_BOOKINGS,
          tabBarIcon: ({focused}) => (
            <MyBookingsIcon color={focused ? GOLD : LIGHT_GRAY} />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_NAVIGATION_KEY}
        component={ProfileScreen}
        options={{
          headerTitle: PROFILE,
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

const styles: any = StyleSheet.create({
  profileIcon: {
    alignItems: 'center',
  },
});

export default App;
