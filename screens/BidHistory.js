import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useState } from 'react';
import { Feather } from '@expo/vector-icons';


const BidHistory = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isStartDateVisible, setIsStartDateVisible] = useState(false);
    const [isEndDateVisible, setIsEndDateVisible] = useState(false);

    const handleStartDateConfirm = (date) => {
        setStartDate(date)
        setIsStartDateVisible(false)
      };
      const handleEndDateConfirm = (date) => {
        setEndDate(date)
        setIsEndDateVisible(false)
      };
    return (
        <View style={styles.container}> 
 
        <View style={styles.imgContainer}>
        <Image source={require('../images/Logo.png')} style={styles.logo} />
        </View>
        <Text style={[styles.titleText,styles.textCenter,styles.mb]}>
                BID HISTORY
            </Text>
            <View style={[styles.row,styles.spaceBetween,styles.mt]}>

                <View>
                    <Text style={[styles.textCenter, styles.bold,styles.textmd]}>Start Date</Text>
                    <View style={[styles.row,styles.spaceBetween,styles.dateContainer]}>
                        <TouchableOpacity onPress={()=>{setIsStartDateVisible(true)}}>
                        <Feather name="calendar" style={styles.pr} size={24} color="black" />
                        </TouchableOpacity>
                        <Text>{startDate.toDateString()}</Text>
         
                    <DateTimePickerModal
        isVisible={isStartDateVisible}
        mode="date"
        onConfirm={handleStartDateConfirm}
        onCancel={()=>{setIsStartDateVisible(false)}}
      />
                    </View>
                </View>
                <View>
                    <Text style={[styles.textCenter, styles.bold,styles.textmd]}>End Date</Text>
                    <View style={[styles.row,styles.spaceBetween,styles.dateContainer]}>
                        <TouchableOpacity onPress={()=>{setIsEndDateVisible(true)}}>
                        <Feather name="calendar" style={styles.pr} size={24} color="black" />
                        </TouchableOpacity>
                        <Text>{endDate.toDateString()}</Text>
         
                    <DateTimePickerModal
        isVisible={isEndDateVisible}
        mode="date"
        onConfirm={handleEndDateConfirm}
        onCancel={()=>{setIsEndDateVisible(false)}}
      />
                    </View>
                </View>
            </View>

            <TouchableOpacity 
             style={[styles.btn]}>
            <Text style={styles.btnText}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BidHistory

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
    },textCenter:{
        textAlign:'center',
    },btn:{
        width: '100%',
        height: 50,
        marginVertical:28,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#ee3b1b',
    },btnText:{
        fontWeight: "bold",
        color: "white",
        fontSize:20,
    },spaceBetween:{
        justifyContent: "space-around"
    },bold:{
        fontWeight: "bold"
    },textmd:{
        fontSize:16,
    },mt:{
        marginTop:20,
    },dateContainer:{
        display:'flex',
        alignItems:'center',
       borderWidth: 1,
       padding: 6,
       marginTop:6,
       borderRadius:10,
       backgroundColor: '#feecea',
    },pr:{
        paddingRight:10
    }
})
