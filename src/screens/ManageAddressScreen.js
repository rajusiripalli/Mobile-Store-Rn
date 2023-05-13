import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    ImageBackground, 
    TextInput,
    Image

  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import {COLORS, FONTS, SIZES} from '../constants';
  import DefaultHeader from '../components/DefaultHeader';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import Octicons from 'react-native-vector-icons/Octicons';
  import ListingTitle from '../components/ListingTitle';
  import HrLine from '../components/HrLine';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
  import Entypo from 'react-native-vector-icons/Entypo';
  import Modal from "react-native-modal";
import { TextButton } from '../components';

  
  const ManageAddressScreen = ({navigation}) => {
    const [modalVisible, SetModalVisible] = useState(false);
    const [visible, setVisible] = useState(false);
  
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    const [addresstype, setAddresstype] = useState("home");
  


  
  
  

  
  
  
    return (
      <>
        <SafeAreaView style={{backgroundColor: COLORS.White}} />
        <SafeAreaView style={{flex: 1}}>
          <StatusBar backgroundColor={COLORS.White} />
          <View style={styles.container}>
            <DefaultHeader title={'Manage Addresses'} Navigation={navigation} />
            {/* search container */}
           
            <View style={{height: SIZES.base}} />
    
  
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: SIZES.margin,
                marginTop: SIZES.margin,
                marginBottom: SIZES.radius,
              }}>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons
                   name="map-marker-radius"
                   style={{alignSelf: 'center'}}
         
                   color={COLORS.dark}
                   size={26}
              />
                <View style={{marginLeft: SIZES.base}}>
                  <Text style={[styles.titletxt]}>Canada</Text>
                  <Text
                    numberOfLines={2}
                    style={[styles.addresdesc, {width: SIZES.width - 120}]}>
                    14, lorem ipsum - CANADA
                  </Text>
                </View>
              </View>
              <Menu
                visible={visible}
                anchor={
                  <MaterialCommunityIcons
                    onPress={() => showMenu()}
                    style={{alignSelf: 'center', marginTop: SIZES.base}}
                    name="dots-vertical"
                    color={COLORS.dark}
                    size={22}
                  />
                }
                onRequestClose={hideMenu}
                textStyle={{color: 'red'}}
                style={{
                  height: 80,
                  alignItems: 'center',
                  paddingTop: SIZES.base,
                }}>
                <MenuItem
                  onPress={hideMenu}
                  style={{height: 20, marginVertical: SIZES.cmnsize}}>
                  <Text style={{...FONTS.h4}}>Edit</Text>
                </MenuItem>
                <MenuItem
                  onPress={hideMenu}
                  style={{height: SIZES.margin, marginVertical: SIZES.cmnsize}}>
                  <Text style={{...FONTS.h4}}>Delete</Text>
                </MenuItem>
              </Menu>
            </View>
            <HrLine />
  
            {/* Address List container */}
  
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: SIZES.margin,
                marginTop: SIZES.margin,
                marginBottom: SIZES.radius,
              }}>
              <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                   name="map-marker-radius"
                   style={{alignSelf: 'center'}}
         
                   color={COLORS.dark}
                   size={26}
              />
                <View style={{marginLeft: SIZES.base}}>
                  <Text style={[styles.titletxt]}>Canada</Text>
                  <Text
                    numberOfLines={2}
                    style={[styles.addresdesc, {width: SIZES.width - 120}]}>
                    14, lorem ipsum - CANADA
                  </Text>
                </View>
              </View>
              {/* <MaterialCommunityIcons style={{alignSelf:'center'}} name="dots-vertical" color={COLORS.dark} size={22}/> */}
              <Menu
                visible={false}
                anchor={
                  <MaterialCommunityIcons
                    onPress={() => showMenu()}
                    style={{alignSelf: 'center', marginTop: SIZES.base}}
                    name="dots-vertical"
                    color={COLORS.dark}
                    size={22}
                  />
                }
                onRequestClose={hideMenu}
                textStyle={{color: 'red'}}
                style={{
                  height: 80,
                  alignItems: 'center',
                  paddingTop: SIZES.base,
                }}>
                <MenuItem
                  onPress={hideMenu}
                  style={{height: 20, marginVertical: SIZES.cmnsize}}>
                  <Text style={{...FONTS.h4}}>Edit</Text>
                </MenuItem>
                <MenuItem
                  onPress={hideMenu}
                  style={{height: SIZES.margin, marginVertical: SIZES.cmnsize}}>
                  <Text style={{...FONTS.h4}}>Delete</Text>
                </MenuItem>
              </Menu>
            </View>
            <HrLine />
            <View style={{height: SIZES.h1}} />
            <ListingTitle title={'Add New Address'} />

                 {/* text button component */}
                 <TouchableOpacity style={styles.addaddrssbtn} onPress={() => SetModalVisible(true)}>
                        <Text style={{...FONTS.h4, color: COLORS.White}}>Add Address</Text>
                        <Entypo style={{marginLeft: 2}} color={COLORS.White} name="plus" size={16} />
                </TouchableOpacity>
              
              {/* text button component */}

          </View>

          <Modal isVisible={modalVisible}
            
                  coverScreen={true}
                  onBackdropPress={() => SetModalVisible(false)}
                  style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                  }}
          >
            <ImageBackground  style={{ flex: 0.5, paddingVertical: SIZES.margin,}} source={require('../assets/images/modalbg.png')}>
            <ListingTitle title={"Address"}/>
            <TextInput 
                placeholder='Enter Your address here'
                style={styles.input}
                
            />

          <TextInput 
                placeholder='Enter Pincode'
                style={styles.input}
                
            />

            <View style={{flexDirection:'row', marginLeft: SIZES.margin, marginVertical: SIZES.margin}}>
              <Image source={require("../assets/images/usercurrentlocIcon.png")}/>
              <Text style={{
                        ...FONTS.h4,
                      marginLeft: SIZES.radius,
                       marginTop: 2,
                        color: COLORS.support3}}>Use Current Location</Text>

            </View>

            <Text style={{...FONTS.body3, marginLeft: SIZES.margin, color: COLORS.dark}}>Save as</Text>


              <View style={{flexDirection:"row", marginLeft: SIZES.margin, marginVertical: SIZES.radius}}>
                <TouchableOpacity onPress={() => setAddresstype("home")} style={[styles.addrsstypebtn, {backgroundColor: addresstype === "home" ? COLORS.primary : "transparent"}]}>
                  <Text style={{...FONTS.h5, color: addresstype === "home" ? COLORS.White: COLORS.darkgrey}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAddresstype("other")} style={[styles.addrsstypebtn, {backgroundColor: addresstype === "other" ? COLORS.primary : "transparent",marginLeft: SIZES.base}]}>
                  <Text style={{...FONTS.h5,color: addresstype === "other" ? COLORS.White: COLORS.darkgrey}}>Other</Text>
                </TouchableOpacity>
              </View>

              {/* text button */}
              <TextButton
              label="Save"
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
              onPress={() => console.log("Save Address")}
            />
            

              {/* text button */}
            
            </ImageBackground>
         </Modal>

        </SafeAreaView>
        <SafeAreaView style={{backgroundColor: COLORS.White}} />
      </>
    );
  };
  
  export default ManageAddressScreen;
  
  export const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      backgroundColor: COLORS.White,
    },
    text: {
      fontSize: 24,
      color: 'white',
    },
    titletxt: {
      ...FONTS.h4,
      color: COLORS.dark,
    },
    addresdesc: {
      ...FONTS.body4,
      color: COLORS.grey,
    },

    addaddrssbtn:{
        height: 44, 
        width: 205,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        flexDirection: 'row',
        marginLeft: SIZES.margin,
        marginVertical: SIZES.base,
        
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
   // modal styles

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
addrsstypebtn:{
  width: 107,
  height: 29,
  justifyContent: "center",
  alignItems:"center",
  borderRadius: SIZES.base,
  borderWidth: 0.5,
  borderColor: COLORS.primary

}

  });
  
