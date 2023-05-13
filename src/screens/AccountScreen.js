import { StyleSheet, Text, View,
             SafeAreaView, StatusBar, TouchableOpacity,
              Image, ScrollView, ImageBackground,
        TextInput
    } from 'react-native'
import React, { useState } from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import DefaultHeader from '../components/DefaultHeader';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
import { TextButton } from '../components';
import ListingTitle from '../components/ListingTitle';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const AccountScreen = ({navigation}) => {
    const [RateModal, setRateModal] = useState(false);
    const [helpModal, setHelpModal] = useState(false);
    const [rating, setRating] = useState(0);


  return (
    <>
      <SafeAreaView style={{backgroundColor: COLORS.White}} />
      <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.White}  barStyle="dark-content"  />
        <View style={styles.container}>
          <DefaultHeader title={'Profile'} Navigation={navigation} />
            <ScrollView>
            {/* profile container */}
                    <View style={styles.profilecontainer}>
                        <Image style={styles.profileimg} source={require("../assets/images/profilepic.png")} />
            <View style={{marginLeft: SIZES.radius, marginTop: 3}}> 
               <Text style={{...FONTS.h3, color: COLORS.dark}}>John David</Text>

            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                style={{marginTop: 3}}
                name="map-marker-radius"
                size={16}
                color={COLORS.dark}
              />
               <Text style={{...FONTS.body4, color: COLORS.dark, marginLeft: 3}}>Vizag</Text>
            </View>
            </View>
           

        
              
            </View>
            {/* profile container */}

          <View style={styles.subcontainer}>
            <TouchableOpacity style={styles.listitem} onPress={()=> navigation.navigate("EditProfile")}>
                <Text style={styles.listitmtxt}>Edit Profile</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
            <View style={{borderBottomWidth: 0.5, color: COLORS.darkgrey, marginVertical: SIZES.base}} />
            <TouchableOpacity style={styles.listitem} onPress={()=> navigation.navigate("ManageAddress")}>
                <Text style={styles.listitmtxt}>Manage Addresses</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
            <View style={{borderBottomWidth: 0.5, color: COLORS.darkgrey, marginVertical: SIZES.radius}} />
            {/* <TouchableOpacity style={styles.listitem} onPress={()=> navigation.navigate('ManagePayments')}> */}
            <TouchableOpacity style={styles.listitem}>
                <Text style={styles.listitmtxt}>Manage Payment Options</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
            <View style={{borderBottomWidth: 0.5, color: COLORS.darkgrey, marginVertical: SIZES.radius}} />
            {/* <TouchableOpacity style={styles.listitem} onPress={() => navigation.navigate("MyOrders")}> */}
            <TouchableOpacity style={styles.listitem}>

                <Text style={styles.listitmtxt}>My Orders</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
            <View style={{borderBottomWidth: 0.5, color: COLORS.darkgrey, marginVertical: SIZES.radius}} />
            {/* <TouchableOpacity style={styles.listitem} onPress={() => navigation.navigate("ChangePassword")}> */}
            <TouchableOpacity style={styles.listitem}>

                <Text style={styles.listitmtxt}>Change Password</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
            <View style={{borderBottomWidth: 0.5, color: COLORS.darkgrey, marginVertical: SIZES.radius}} />

            {/* <TouchableOpacity style={styles.listitem} onPress={()=> navigation.navigate("Aboutus")}> */}
            <TouchableOpacity style={styles.listitem}>
                <Text style={styles.listitmtxt}>About Us</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
            <View style={{borderBottomWidth: 0.5, color: COLORS.darkgrey, marginVertical: SIZES.radius}} />
            {/* <TouchableOpacity style={[styles.listitem,]} onPress={()=> setRateModal(true)}> */}
            <TouchableOpacity style={styles.listitem}>

                <Text style={styles.listitmtxt}>Rate Us</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.listitem, {marginVertical: SIZES.radius}]}>
                <Text style={styles.listitmtxt}>Logout</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
          </View>

          <View style={[styles.subcontainer, {marginTop: SIZES.margin}]}>
            {/* <TouchableOpacity style={styles.listitem} onPress={()=> navigation.navigate('Termsconditions')}> */}
            <TouchableOpacity style={styles.listitem}>

                <Text style={styles.listitmtxt}>Terms & Conditions</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
            <View style={{borderBottomWidth: 0.5, color: COLORS.darkgrey, marginVertical: SIZES.base}} />
            {/* <TouchableOpacity style={styles.listitem} onPress={()=> navigation.navigate('Privacypolicy')}> */}
            <TouchableOpacity style={styles.listitem}>

                <Text style={styles.listitmtxt}>Privacy Policy</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
            <View style={{borderBottomWidth: 0.5, color: COLORS.darkgrey, marginVertical: SIZES.base}} />
            {/* <TouchableOpacity style={styles.listitem} onPress={()=> setHelpModal(true)}> */}
            <TouchableOpacity style={styles.listitem}>

                <Text style={styles.listitmtxt}>Help</Text>
                <SimpleLineIcons style={{marginTop:SIZES.cmnsize}} name="arrow-right" size={12} color={COLORS.darkgrey} />
            </TouchableOpacity>
        </View>

        </ScrollView>

    </View>

    <Modal isVisible={RateModal}
            
            coverScreen={true}
            onBackdropPress={() => setRateModal(false)}
            style={{
              justifyContent: 'flex-end',
              margin: 0,
            }}
    >
      <ImageBackground  style={{ flex: 0.5, paddingVertical: SIZES.margin,}} source={require('../assets/images/modalbg.png')}>
                <Image style={{alignSelf: "center", marginTop: SIZES.base}} source={require('../assets/images/rateusmodal.png')}/>
    
                    <Text style={{...FONTS.h3, color: COLORS.dark, alignSelf: "center", marginVertical: SIZES.base}}>Your Opinion matters  to us!</Text>

                    <Text style={{...FONTS.body4, color: COLORS.grey, alignSelf: 'center', marginBottom: SIZES.base}}>Give us a quick review and help us improve?</Text>

                    <View style={{flexDirection: "row", alignSelf: "center"}}>
                        <FontAwesome onPress={() => setRating(1)} style={{marginLeft: SIZES.cmnsize}} name="star" color={rating < 1 ? COLORS.grey : COLORS.support1} size={28}/>
                        <FontAwesome onPress={() => setRating(2)} style={{marginLeft: SIZES.cmnsize}} name="star" color={rating < 2 ? COLORS.grey : COLORS.support1} size={28}/>
                        <FontAwesome onPress={() => setRating(3)} style={{marginLeft: SIZES.cmnsize}} name="star" color={rating < 3 ? COLORS.grey : COLORS.support1} size={28}/>
                        <FontAwesome onPress={() => setRating(4)} style={{marginLeft: SIZES.cmnsize}} name="star" color={rating < 4 ? COLORS.grey : COLORS.support1} size={28}/>
                        <FontAwesome onPress={() => setRating(5)} style={{marginLeft: SIZES.cmnsize}} name="star" color={rating < 5 ? COLORS.grey : COLORS.support1}size={28}/>

                    </View>


  

        {/* text button */}
        <TextButton
        label="Rate Now"
        contentContainerStyle={{
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
          height: 50,
          marginHorizontal: SIZES.margin,
          borderRadius: SIZES.btnradius,
          marginTop: SIZES.h1,
          
        }}
        labelStyle={{
          ...FONTS.h3,
        }}
        onPress={() => setRateModal(false)}
      />

<Text style={{...FONTS.body4, color: COLORS.grey, alignSelf: 'center', marginVertical: SIZES.base}}>Not now</Text>


      
      

        {/* text button */}
      
      </ImageBackground>
   </Modal>

   <Modal isVisible={helpModal}
            
            coverScreen={true}
            onBackdropPress={() => setHelpModal(false)}
            style={{
              justifyContent: 'flex-end',
              margin: 0,
            }}
    >
      <ImageBackground  style={{ flex: 0.6, paddingVertical: SIZES.margin,}} source={require('../assets/images/modalbg.png')}>
      <ListingTitle title={"How can we help you?"}/>
      <TextInput 
          placeholder='Mobile Number'
          style={styles.input}
          
      />

    <TextInput 
          placeholder='Email Address'
          style={styles.input}
          
      />

      
    <TextInput 
          placeholder='Mention your issue'
          style={[styles.input, {height: 150}]}
          textAlignVertical="top"
          numberOfLines={5}
          multiline={true}
          
      />

      <Text style={{...FONTS.body4, color: COLORS.grey, marginVertical: SIZES.base, marginLeft: SIZES.margin}}>We will reply you soon....</Text>




  

        {/* text button */}
        <TextButton
        label="Rate Now"
        contentContainerStyle={{
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
          height: 50,
          marginHorizontal: SIZES.margin,
          borderRadius: SIZES.btnradius,
          marginVertical: SIZES.h1,
          
        }}
        labelStyle={{
          ...FONTS.h3,
        }}
        onPress={() => setHelpModal(false)}
      />
      

        {/* text button */}
      
      </ImageBackground>
   </Modal>
    </SafeAreaView>
    <SafeAreaView style={{backgroundColor: COLORS.White}} />

</>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.White,

    },
    profilecontainer:{
        flexDirection: 'row',
        margin: SIZES.margin

    },
    profileimg:{
        width: 50,
        height: 50, 
        borderRadius: 50/2,

    },
    subcontainer: {
        backgroundColor: COLORS.White,
        margin: SIZES.margin,
        padding: SIZES.body3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        borderRadius: SIZES.h3
    },
    listitem:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    listitmtxt: {
        ...FONTS.body4,
        color: COLORS.darkgrey
    },
    input:{
        height: 50,
        borderRadius: SIZES.h3,
        borderColor: COLORS.primary,
        borderWidth: 0.5,
        marginHorizontal: SIZES.margin,
        marginTop: 3,
        marginBottom: SIZES.cmnsize,
        ...FONTS.body5,
        color: COLORS.dark,
        paddingHorizontal: SIZES.radius,
        backgroundColor:COLORS.White,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        
        elevation: 1,
       
        
    },
})