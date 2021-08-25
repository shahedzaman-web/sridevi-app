import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'

const WalletScreen = () => {
    return (
        <View style={styles.container}> 
            <View style={styles.imgContainer}>
            <Image source={require('../images/Logo.png')} style={styles.logo} />
            </View>
            <Text style={[styles.titleText,styles.textCenter,styles.mb]}>
                    WALLET 
                </Text>
            <View style={[styles.textBox,styles.row]}>
                <Text style={styles.titleText}>
                    WALLET BALANCE
                </Text>
                <Text style={styles.titleText}>
                    0
                </Text>
            </View>
            <View style={[styles.mt,styles.row]}>
            <TouchableOpacity style={[styles.boxContainer,styles.mr]}>
            <Text style={[styles.titleText,styles.textCenter]}>
                WITHDRAW FUNDS
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
            <Text style={[styles.titleText,styles.textCenter]}>
                ADD FUNDS
            </Text>
            </TouchableOpacity>
            </View>
            <View style={[styles.mt,styles.row]}>
            <TouchableOpacity style={[styles.boxContainer,styles.mr]}>
            <Text style={[styles.titleText,styles.textCenter]}>
                 FUND REQUEST HISTORY
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxContainer}>
            <Text style={[styles.titleText,styles.textCenter]}>
               TRANSFER POINTS
            </Text>
            </TouchableOpacity>
            </View>
            </View>
    )
}

export default WalletScreen

const styles = StyleSheet.create({
    row:{
        display: 'flex',
        flexDirection: 'row',
    },marginBottom:{
        marginBottom:12
    },
    container:{
        flex:1,
        marginTop: 60,
        paddingHorizontal:40
    },
    imgContainer:{
        display:'flex',
        alignItems:'center',
    },
    logo:{
        width:200,
        height:200,
    },titleText:{
        color : "#ee3b1b",
        fontSize:20,
     
        fontWeight: 'bold',
    },textBox:{
        backgroundColor: "#feece8",
        width: "100%",
        height: 42,
        paddingHorizontal:10,
        display:'flex',
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 12,
    },textCenter:{
        textAlign:'center',
    },boxContainer:{
        backgroundColor: "#feece8",
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.3,
        shadowRadius:3,
        width:"48%",
        height: 150,
        borderRadius:12,
        justifyContent: "center",
        alignItems: "center",
    },mt:{
        marginTop:24
    },mr:{
        marginRight:28
    },mb:{
        marginBottom:24
    }
})
