import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SimpleLineIcons,
  MaterialIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

import BidHistory from "../screens/BidHistory";
import WinHistory from "../screens/WinHistory";
import Logout from "../screens/Logout";
import DrawerNav from "./DrawerNav";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          title: 'Home' ,
          tabBarIcon: () => (
            <SimpleLineIcons name="home" size={24} color="black" />
          ),
        }}
        name="DrawerNav"
        component={DrawerNav}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="history-toggle-off" size={24} color="black" />
          ),
        }}
        name="Bid History"
        component={BidHistory}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Entypo name="line-graph" size={24} color="black" />
          ),
        }}
        name="Win History"
        component={WinHistory}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <AntDesign name="logout" size={24} color="black" />,
        }}
        name="Logout"
        component={Logout}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
