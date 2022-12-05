//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Add from '../Screens/Add/Add';
import Home from '../Screens/Home/Home';



const Stack = createNativeStackNavigator();
// create a component
const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:true}}>
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
  
    );
};


//make this component available to the app
export default Routes;
