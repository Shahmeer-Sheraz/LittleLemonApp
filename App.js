import React, {useState} from 'react';
import { View, Text, ScrollView,StyleSheet, TextInput, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeMessage from "./components/WelcomeMessage";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";
import Welcome from "./components/Welcome";
import { auth } from './FireBase/firebase.config';    
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>

{/* 
********************************************************************************* */}
    {/* Stack Navigation */}

       <NavigationContainer>
        <LittleLemonHeader />
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="welcome"
            component={WelcomeMessage}
            options={{ title: 'Welcome', headerTitleAlign:'center', headerStyle: {backgroundColor: 'white', padding: 0, paddingTop: 0}, headerTintColor: 'black', headerTitleStyle: {fontWeight: 'bold', fontSize: 10}}}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ title: 'Login', headerTitleAlign:'center', headerStyle: {backgroundColor: 'white', padding: 0, paddingTop: 0}, headerTintColor: 'black', headerTitleStyle: {fontWeight: 'bold', fontSize: 10}}}
          />
        </Stack.Navigator>
        <LittleLemonFooter />
      </NavigationContainer> 
    </>
  );
};


     
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    
    


  },
});