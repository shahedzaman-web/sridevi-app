import React,{ useState }  from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { FontAwesome, Ionicons,AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';


import baseUrl from "./../util/baseURL"




const SignUpScreen = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({})

  const navigation = useNavigation();

  const handleSignUp = async(values) => {
    console.log(values);
    const settings = {
      method: "POST",
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type':'application/json'
    },
      body: JSON.stringify(values),
    };
    try {
      const response = await fetch(`${baseUrl}/user/register`, settings);
       console.log(JSON.stringify(response));
      const result = await response.json();
      setData(result)
       console.log(`result:` , result.token);
      console.log(`result._id:`, result._id);
      console.log(result.token);
      // console.log("data",`JSON.stringify((result.message))`);
      
      if(result.token){
        Alert.alert(
          "Alert",
          "You Signup successfully. please Login",
          [
            
            { text: "OK", onPress: () => navigation.navigate("Login") }
          ],
          { cancelable: false }
        )
      } 
     
    } catch (err) {
      console.log(JSON.stringify(err));
      setError(err.message);
    }
  
    
  }
  console.log(data)
  console.log(error)
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require("../images/Logo.png")} style={styles.logo} />
      </View>
     
      <Formik
      initialValues={{ mobile_number: '',full_name:'' ,password: '',user_name:''}}
      onSubmit={values => handleSignUp(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (

      <View style={styles.loginContainer}>
        <Text style={styles.titleText}>Mobile Number</Text>
        <View style={[styles.row, styles.marginBottom]}>
          <FontAwesome name="mobile-phone" size={28} color="black" />
          <TextInput
            style={styles.input}
            maxLength={10}
            onChangeText={handleChange('mobile_number')}
           onBlur={handleBlur('mobile_number')}
           keyboardType="numeric"
           value={values.mobile_number}
            placeholder="Enter Your 10 Digit Mobile Number"
          />
        </View>
        <Text style={styles.titleText}>Full Name</Text>
        <View style={[styles.row, styles.marginBottom]}>
        <AntDesign name="user" size={24} color="black" />
          <TextInput
          onChangeText={handleChange('full_name')}
           onBlur={handleBlur('full_name')}
           value={values.full_name}
            style={styles.input}
            placeholder="Enter Full name"
          />
        </View>
        <Text style={styles.titleText}>User Name</Text>
        <View style={[styles.row, styles.marginBottom]}>
        <AntDesign name="user" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={handleChange('user_name')}
            onBlur={handleBlur('user_name')}
            value={values.user_name}
            placeholder="Enter Your username"
          />
        </View>
        <Text style={styles.titleText}>Password</Text>
        <View style={[styles.row, styles.marginBottom]}>
          <Ionicons name="ios-lock-open-outline" size={24} color="black" />
          <TextInput style={styles.input} 
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry={true}
          placeholder="Enter Your Password" />
        </View>
        <View style={styles.bottomContainer}>
        
          <TouchableOpacity 
           style={[styles.btn, styles.signupBtnColor]}
           onPress={handleSubmit}
           >
            <Text style={styles.btnText}>Sign UP</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.regText}>Already registered? Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      )}
      </Formik>
  
    </View>
  );
};

export default SignUpScreen;

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
    marginTop: 40,
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
  signupBtnColor: {
    backgroundColor: "#333736",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  regText: {
    textAlign: "center",
    marginTop: 16,
    color: "#ee3b1b",
    fontWeight: "bold",
  },errorText:{
    color: "#ee3b1b",
    fontSize:12
  }
});

// #ee3b1b
// #333736
