import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import {COLORS, FONTS} from '../constants';
import CategoriesScreen from '../screens/CategoriesScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const Bottomtabnav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.dark,
        tabBarInactiveTintColor: COLORS.dark60,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 60,
          paddingHorizontal: 20,
          backgroundColor: COLORS.White,
        },
        tabBarItemStyle: {
          marginTop: 5,
          marginBottom: 10,
          width: 100,
        },
        tabBarLabelStyle: {
          ...FONTS.body5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      
      
    
    </Tab.Navigator>
  
  );
};

export default Bottomtabnav;

const styles = StyleSheet.create({});
