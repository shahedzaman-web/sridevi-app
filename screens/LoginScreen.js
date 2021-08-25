import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import jwt_decode from "jwt-decode";

import baseUrl from "./../util/baseURL";
import AuthContext from "../auth/authContext";
import authStorage from "./../auth/storage";

const LoginScreen = () => {
  const authContext = useContext(AuthContext);

  const navigation = useNavigation();
  const [error, setError] = useState("");

  const handleSignIn = async (values) => {
    console.log(values);
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    try {
      const response = await fetch(`${baseUrl}/user/login`, settings);
      const result = await response.json();
      const user = jwt_decode(result.token);
      console.log(`result:`, result);
      console.log(user);
      if (result.token) {

        authContext.setUser(user);
        authStorage.storeAuthToken(result.token);
        console.log(result.token);
      }
    } catch (err) {
      console.log("error",err);
      setError(err.message);
    }
  };
  console.log(error);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require("../images/Logo.png")} style={styles.logo} />
      </View>
      <Formik
        initialValues={{ mobile_number: "", password: "" }}
        onSubmit={(values) => handleSignIn(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.loginContainer}>
            <Text style={styles.titleText}>Mobile Number</Text>
            <View style={[styles.row, styles.marginBottom]}>
              <FontAwesome name="mobile-phone" size={28} color="black" />
              <TextInput
                onChangeText={handleChange("mobile_number")}
                onBlur={handleBlur("mobile_number")}
                value={values.mobile_number}
                style={styles.input}
                placeholder="Enter Your 10 Digit Mobile Number"
              />
            </View>
            <Text style={styles.titleText}>Password</Text>
            <View style={[styles.row, styles.marginBottom]}>
              <Ionicons name="ios-lock-open-outline" size={24} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Enter Your Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={styles.input}
                secureTextEntry={true}
              />
             
            </View>
            <View style={styles.bottomContainer}>
           
              <TouchableOpacity
                onPress={handleSubmit}
                style={[styles.btn, styles.loginBtnColor]}
              >
                <Text style={styles.btnText}>LOG IN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("otp")}
                style={[styles.btn, styles.signupBtnColor]}
              >
                <Text style={styles.btnText}>Sign UP</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.forgetText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
  marginBottom: {
    marginBottom: 12,
  },
  container: {
    flex: 1,
    marginTop: 120,
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  loginContainer: {
    paddingHorizontal: 50,
  },
  titleText: {
    color: "#ee3b1b",
    fontSize: 20,
    paddingBottom: 10,
  },
  input: {
    marginLeft: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#cfcfcf",
  },
  bottomContainer: {
    marginVertical: 28,
  },
  btn: {
    width: "100%",
    height: 50,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtnColor: {
    backgroundColor: "#ee3b1b",
  },
  signupBtnColor: {
    backgroundColor: "#333736",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  forgetText: {
    textAlign: "center",
    marginTop: 16,
    color: "red",
    fontWeight: "bold",
  },
});

// #ee3b1b
// #333736

{
  /* <FontAwesome name="mobile-phone" size={24} color="black" />
<Ionicons name="ios-lock-open-outline" size={24} color="black" /> */
}
