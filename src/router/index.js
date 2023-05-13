import { StyleSheet, Text, View, Easing} from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    createStackNavigator,
    CardStyleInterpolators,
  } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import Bottomtabnav from './Bottomtabnav';
import UserLocationSelector from '../screens/UserLocationSelector';
import MapLocationScreen from '../screens/MapLocationScreen';
import SubCategoryScreen from '../screens/SubCategoryScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import ManageAddressScreen from '../screens/ManageAddressScreen';
import ManagePaymentsScreen from '../screens/ManagePaymentsScreen';
import AboutusScreen from '../screens/AboutusScreen';
import TermsConditions from '../screens/TermsConditions';
import PrivacyPolicy from '../screens/PrivacyPolicy';



const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const Router = ({ navigation }) => {
  return (
    <NavigationContainer>
          <Stack.Navigator
         
         screenOptions={{
           headerShown: false,
           gestureEnabled: true,
           gestureDirection: 'horizontal',
           transitionSpec: {
             open: config,
             close: closeConfig,
           },
           cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
         }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen}
           options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="otp" component={OtpScreen} /> 
                <Stack.Screen
          name="homebottomtab"
          component={Bottomtabnav}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="userlocselector"
          component={UserLocationSelector}
          options={{
            gestureDirection: 'vertical',
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
        <Stack.Screen name="maplocation"  component={MapLocationScreen} />
        <Stack.Screen name="SubCategory" component={SubCategoryScreen} /> 
        <Stack.Screen name="ProductDetails" options={{headerShown: false, gestureEnabled: true}} component={ProductDetailsScreen} />
        <Stack.Screen name="Cartscreen"  component={CartScreen} />
        <Stack.Screen name="EditProfile"  component={EditProfileScreen} />
        <Stack.Screen name="ChangePassword"  component={ChangePasswordScreen} />
        <Stack.Screen name="MyOrders"  component={MyOrdersScreen} />
        <Stack.Screen name="ManageAddress"  component={ManageAddressScreen} />
        <Stack.Screen name="ManagePayments"  component={ManagePaymentsScreen} />
        <Stack.Screen name="Aboutus"  component={AboutusScreen} />
        <Stack.Screen name="Termsconditions"  component={TermsConditions} />
        <Stack.Screen name="Privacypolicy"  component={PrivacyPolicy} />
        
        

        
      
        
        

        
        
        
     
        
      
        
        
        </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Router

const styles = StyleSheet.create({})