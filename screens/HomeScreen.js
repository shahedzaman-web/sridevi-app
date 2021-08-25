import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.spaceAround]}>
   
      <TouchableOpacity onPress={()=> navigation.openDrawer()}>
        <MaterialIcons name="menu" size={24} color="black" />
      </TouchableOpacity>
        <View style={[styles.row]}>
          <Text style={[styles.colorText, styles.font]}>Kalyan </Text>
          <Text style={[styles.font]}> Milan </Text>
          <Text style={[styles.colorText, styles.font]}>Panel</Text>
        </View>
        <View style={[styles.row]}>
          <TouchableOpacity onPress={()=>navigation.navigate("Wallet")}>
          <AntDesign name="inbox" size={24} color="black" />
          </TouchableOpacity>
          <Text>0</Text>
        </View>
        <MaterialIcons name="notifications-on" size={24} color="black" />
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.row}>
          <View style={styles.jutifyCenter}>
            <Text style={[styles.bold, styles.textCenter]}>
              Welcome to Kalyan Mian Panel
            </Text>
            <Text style={[styles.bold, styles.textCenter]}>Lets Play Now</Text>
          </View>
          <View style={styles.pl8}>
            <Image
              style={styles.logo}
              source={require("./../images/Logo.png")}
            />
          </View>
        </View>

        <View style={[styles.row, styles.jutifyCenter]}>
          <Text style={[styles.colorText, styles.bold]}>
            For More details Contact Now
          </Text>
          <FontAwesome
            style={styles.px4}
            name="mobile-phone"
            size={28}
            color="#f04729"
          />
          <Text style={[styles.colorText, styles.bold]}>+91 9876543210</Text>
        </View>
      </View>
      <View>
        <View style={[styles.cardBox,styles.my8]}>
          <View style={[styles.spaceAround, styles.row,styles.alignCenter,styles.pb8]}>
            <View style={styles}>
              <AntDesign name="play" size={24} color="black" />
              <Text style={[styles.bold, styles.py8]}>Play</Text>
            </View>
            <View style={styles}>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>OPEN TIME</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>10:00 AM</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>CLOSE TIME</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>11:30 AM</Text>
            </View>
            <View style={styles.textCenter}>
              <Text style={[styles.bold, styles.blueText,styles.textCenter]}>MADHUR</Text>
              <Text style={[styles.bold, styles.blueText,styles.textCenter]}>MORNING</Text>
              <Text style={[styles.bold, styles.py8,styles.textCenter]}>123-45-789</Text>
            </View>
          </View>
          <View style={styles.botttomBox}>
            <Text style={[styles.smallText, styles.textCenter,styles.colorText]}>
              Betting is closed for today
            </Text>
          </View>
        </View>
        <View style={[styles.cardBox,styles.my8]}>
          <View style={[styles.spaceAround, styles.row,styles.alignCenter,styles.pb8]}>
            <View style={styles}>
              <AntDesign name="play" size={24} color="black" />
              <Text style={[styles.bold, styles.py8]}>Play</Text>
            </View>
            <View style={styles}>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>OPEN TIME</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>10:00 AM</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>CLOSE TIME</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>11:30 AM</Text>
            </View>
            <View style={styles.textCenter}>
              <Text style={[styles.bold, styles.blueText,styles.textCenter]}>TIME</Text>
              <Text style={[styles.bold, styles.blueText,styles.textCenter]}>BAZAAR</Text>
              <Text style={[styles.bold, styles.py8,styles.textCenter]}>123-45-789</Text>
            </View>
          </View>
          <View style={styles.botttomBox}>
            <Text style={[styles.smallText, styles.textCenter,styles.colorText]}>
              Betting is closed for today
            </Text>
          </View>
        </View>
        <View style={[styles.cardBox,styles.my8]}>
          <View style={[styles.spaceAround, styles.row,styles.alignCenter,styles.pb8]}>
            <View style={styles}>
              <AntDesign name="play" size={24} color="black" />
              <Text style={[styles.bold, styles.py8]}>Play</Text>
            </View>
            <View style={styles}>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>OPEN TIME</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>3:25 AM</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>CLOSE TIME</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>5:25 AM</Text>
            </View>
            <View style={styles.textCenter}>
              <Text style={[styles.bold, styles.blueText,styles.textCenter]}>KALYAN</Text>
              <Text style={[styles.bold, styles.blueText,styles.textCenter]}>DAY</Text>
              <Text style={[styles.bold, styles.py8,styles.textCenter]}>123-45-789</Text>
            </View>
          </View>
          <View style={styles.botttomBox}>
            <Text style={[styles.smallText, styles.textCenter,styles.greenText]}>
              Betting is running for today
            </Text>
          </View>
        </View>
        <View style={[styles.cardBox,styles.my8]}>
          <View style={[styles.spaceAround, styles.row,styles.alignCenter,styles.pb8]}>
            <View style={styles}>
              <AntDesign name="play" size={24} color="black" />
              <Text style={[styles.bold, styles.py8]}>Play</Text>
            </View>
            <View style={styles}>
            <Text style={[styles.colorText,styles.bold,styles.textCenter]}>OPEN TIME</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>3:25 AM</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>CLOSE TIME</Text>
              <Text style={[styles.colorText,styles.bold,styles.textCenter]}>5:25 AM</Text>
            </View>
            <View style={styles.textCenter}>
              <Text style={[styles.bold, styles.blueText,styles.textCenter]}>MILAN</Text>
              <Text style={[styles.bold, styles.blueText,styles.textCenter]}>DAY</Text>
              <Text style={[styles.bold, styles.py8,styles.textCenter]}>123-45-789</Text>
            </View>
          </View>
          <View style={styles.botttomBox}>
          <Text style={[styles.smallText, styles.textCenter,styles.greenText]}>
              Betting is running for today
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  spaceAround: {
    justifyContent: "space-around",
  },
  alignCenter: {
       alignItems: "center" 
    },row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    marginTop: 30,
    padding: 16,
  },
  colorText: {
    color: "#f04729",
  },
  font: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
  boxContainer: {
    marginVertical: 16,
    backgroundColor: "#feecea",
    padding: 16,
    borderRadius: 16,
  },
  px4: {
    paddingHorizontal: 4,
  },
  py8: {
    paddingVertical: 8,
  },
  pb8: {
    paddingBottom: 8,
  },my8:{
marginVertical:8
  },
  pl8: {
    paddingLeft: 8,
  },
  jutifyCenter: {
    justifyContent: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  logo: {
    width: 120,
    height: 80,
    backgroundColor: "transparent",
  },
  cardBox: {
    backgroundColor: "#f6f6f6",
    width: "100%",
    height: 120,
    borderRadius: 12,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 8,
    shadowOffset: { width: 0, height: 0 },
    padding: 10,
  },
  botttomBox: {
    backgroundColor: "#e5e5e5",
    borderRadius: 8,
    height: 16,
  },
  smallText: {
    fontSize: 10,
  },
  blueText: {
    color: "#040fff",
  },
  greenText: {
    color: "#25ca22",
  },
});

// <FontAwesome name="mobile-phone" size={24} color="black" />
// <AntDesign name="play" size={24} color="black" />
// <AntDesign name="inbox" size={24} color="black" />
// <MaterialIcons name="notifications-on" size={24} color="black" />
// <MaterialIcons name="menu" size={24} color="black" />
// text #f3725c
// gray #e5e5e5
// blue #040fff
//green #2ccb29
// red #feecea
