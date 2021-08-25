import React, { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import AuthContext from "../auth/authContext";
import authStorage from "./../auth/storage";

const Logout = () => {

    const authContext = useContext(AuthContext);
   
        const logOut= async()=> {
    
          authContext.setUser(null);
          await authStorage.removeAuthToken();
        }
        useEffect(() => {
          logOut();
        }, []);
  
  return (<React.Fragment/>)
};
export default Logout;
