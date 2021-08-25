import React from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const OTPScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require("../images/Logo.png")} style={styles.logo} />
        </View>
      <View style={styles.boxContainer}>
            
        <Text style={[styles.colorText,styles.bold]}>Enter OTP here</Text>
        <View style={[styles.row,styles.my12]}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        </View>
        <View style={styles.row}>
        <TouchableOpacity style={[styles.btnStyle,styles.mr8,styles.blackBg]}>
            <Text style={[styles.bold,styles.whiteText]}>Resend OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate("SignUp")}
        style={[styles.btnStyle,styles.mr8,styles.redBg]}>
            <Text style={[styles.bold,styles.whiteText]}>Verify OTP</Text>
        </TouchableOpacity>
        </View>
      </View>
        </View>
    )
}

export default OTPScreen

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
      },boxContainer:{
        marginTop:20,
        paddingHorizontal:50
      },colorText: {
        color: "#f04729",
      },bold:{
          fontWeight: "bold",
      },input:{
        height:50,
        width: "12%",
        borderBottomWidth: 1,
        marginRight:16
      },my12:{
          marginVertical:28
      },btnStyle:{
          width:"45%",
          borderRadius: 8,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
      },mr8:{
        marginRight:8
      },whiteText:{
          color: "white",
      },blackBg:{
        backgroundColor: '#333736'
      },
      redBg:{
        backgroundColor: '#ee3b1b',
      }
})
