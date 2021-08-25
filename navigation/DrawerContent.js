import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome,SimpleLineIcons,MaterialCommunityIcons,EvilIcons,Feather,AntDesign,Ionicons,Entypo } from '@expo/vector-icons';

import AuthContext from '../auth/authContext';



const DrawerContent = () => {
   const authContext= useContext(AuthContext);
    
   console.log(authContext.user.mobile_number);
    return (
        <View style={styles.container}>
           <View style={styles.row}>
            <FontAwesome name="user-circle-o" size={50} color="black" />
            <View style={styles.ml12}>
                <Text style={styles.bold}>USERNAME</Text>
                <Text style={[styles.bold,styles.my]}>{authContext.user.mobile_number}</Text>
            </View>
           </View>
           <View  style={[styles.border,styles.mt12]}/>
            <View style={styles.my20}>
                <View style={[styles.row,styles.my,styles.alignCenter]}>
                <SimpleLineIcons  name="home" size={24} color="black" />
                    <Text style={[styles.defaultText,styles.ml12]}>Home</Text>
                </View>
                <View style={[styles.row,styles.my,styles.alignCenter]}>
                <MaterialCommunityIcons name="bank-outline" size={24} color="black" />
                <Text style={[styles.defaultText,styles.ml12]}>Bank Account</Text>
                </View>
                <View style={[styles.row,styles.my,styles.alignCenter]}>
                <EvilIcons name="like" size={24} color="black" />
                <Text style={[styles.defaultText,styles.ml12]}>Rate Us</Text>
                </View>
                <View style={[styles.row,styles.my,styles.alignCenter]}>
                <Feather name="alert-triangle" size={24} color="black" />
                <Text style={[styles.defaultText,styles.ml12]}>Notice</Text>
                </View>
                <View style={[styles.row,styles.my,styles.alignCenter]}>
                <AntDesign name="info" size={24} color="black" />
                <Text style={[styles.defaultText,styles.ml12]}>How to Play</Text>
                </View>
               
            </View>
            <View  style={[styles.border,styles.mt12]}/>
            <View style={styles.my20}>
                <View style={[styles.row,styles.my,styles.alignCenter]}>
                <Ionicons name="share-social" size={24} color="black" />
                    <Text style={[styles.defaultText,styles.ml12]}>Share</Text>
                </View>
                <View style={[styles.row,styles.my,styles.alignCenter]}>
                <Entypo name="key" size={24} color="black" />
                <Text style={[styles.defaultText,styles.ml12]}>Change Password</Text>
                </View>
                
              
               
            </View>
          

        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        marginLeft:30,
    },row:{
        flexDirection:'row',
    },mr12:{
        marginRight:12,
    },ml12:{
        marginLeft:12,
    },bold:{
        fontWeight:'bold',
    },mt12:{
        marginTop:12,
    },border:{
        borderBottomWidth:1,
        borderColor:'gray',
        width:"90%"
    },my:{
        marginVertical:16
    },defaultText:{
        fontSize: 16
    },my20:{
        marginVertical:20
    },alignCenter:{
        alignItems:'center',
    }
})
