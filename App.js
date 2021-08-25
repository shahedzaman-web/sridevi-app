import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import jwt_decode from "jwt-decode";

import LoginScreen from "./screens/LoginScreen";
import navigationTheme from "./navigation/navigationTheme";
import SignUpScreen from "./screens/SignUpScreen";
import BottomTabNav from "./navigation/BottomTabNav";
import OTPScreen from "./screens/OTPScreen";
import WalletScreen from "./screens/WalletScreen";
import AuthContext from "./auth/authContext";
import authStorage from "./auth/storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  
  const restoreToken= async()=>{
    const token= await authStorage.getAuthToken()
    if(!token) return
    setUser(jwt_decode(token))
  }

  useEffect(() => {
    
    restoreToken() 

  }, []);


  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Group>
            <Stack.Screen
            name="HomeNav"
            component={BottomTabNav}
            options={{ headerShown: false }} />
          <Stack.Screen name="Wallet" component={WalletScreen} />
            </Stack.Group>
          ) : (
            <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="otp" component={OTPScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
             
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
