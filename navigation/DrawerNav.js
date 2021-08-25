import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DrawerContent from './DrawerContent';


const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} 
        screenOptions={{ headerShown: false }}
         initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    )
}

export default DrawerNav

const styles = StyleSheet.create({})
