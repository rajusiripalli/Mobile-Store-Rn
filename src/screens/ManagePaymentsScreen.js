import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    Image,
    ImageBackground,
    TextInput

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
import { TextButton } from '../components';
import Modal from "react-native-modal";

  
  const ManagePaymentsScreen = ({navigation}) => {
    const [modalVisible, SetModalVisible] = useState(false);
    const [saveCard, setSaveCard] = useState(false);

    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    const [paymentOption, setPaymentOption] = useState('');
  


  
  
  

  
  
  
    return (
      <>
        <SafeAreaView style={{backgroundColor: COLORS.White}} />
        <SafeAreaView style={{flex: 1}}>
          <StatusBar backgroundColor={COLORS.White} />
          <View style={styles.container}>
            <DefaultHeader title={'Select  Payment Method'} Navigation={navigation} />
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
              <Image style={{alignSelf: 'center'}} source={require('../assets/images/creditcard.png')}/>

                <View style={{marginLeft: SIZES.base}}>
                  <Text style={[styles.titletxt]}>Debit Card A/C xx0012</Text>
                  <Text
                    numberOfLines={2}
                    style={[styles.addresdesc, {width: SIZES.width - 120}]}>
                    Bank
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
                <Image style={{alignSelf: 'center'}} source={require('../assets/images/creditcard.png')}/>
          
                <View style={{marginLeft: SIZES.base}}>
                  <Text style={[styles.titletxt]}>Debit Card A/C xx0012</Text>
                  <Text
                    numberOfLines={2}
                    style={[styles.addresdesc, {width: SIZES.width - 120}]}>
                    Bank
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
            <View style={{ borderBottomColor: COLORS.primary, borderBottomWidth:5,opacity: 0.4, marginVertical: SIZES.base}}/>
            <View style={{height: SIZES.h3}} />
            <ListingTitle title={'New Payment Options'} />

                 {/* text button component */}
                 <TouchableOpacity style={styles.addaddrssbtn} onPress={() => SetModalVisible(true) }>
                        <Text style={{...FONTS.h5, color: COLORS.White}}>Add Card</Text>
                        <Entypo style={{marginLeft: 2}} color={COLORS.White} name="plus" size={16} />
                </TouchableOpacity>
              
              {/* text button component */}
              <View style={{ borderBottomColor: COLORS.primary, borderBottomWidth:5,opacity: 0.4, marginVertical: SIZES.base}}/>
              
              <View style={{height: 15}}/>

            <ListingTitle title={'All other options'} />

            <View style={{flexDirection:'row', marginHorizontal: SIZES.margin, marginTop: SIZES.base}}>
                <Octicons 
                      onPress={() => setPaymentOption("UPI")}
                      style={{alignSelf: "center"}} 
                      size={16} name={paymentOption === "UPI" ? "check-circle-fill" : "circle"} 
                      color={paymentOption === "UPI" ? COLORS.success :  COLORS.grey}
                />
                <Text style={{...FONTS.body3, marginLeft: SIZES.base}}>UPI</Text>

            </View>
            <View style={{ borderBottomColor: COLORS.grey, borderBottomWidth:0.5, marginTop: SIZES.radius}} />

            <View style={{flexDirection:'row', marginHorizontal: SIZES.margin, marginTop: SIZES.base}}>
                <Octicons 
                      onPress={() => setPaymentOption("wallet")}
                      style={{alignSelf: "center"}} 
                      size={16} name={paymentOption === "wallet" ? "check-circle-fill" : "circle"} 
                      color={paymentOption === "wallet" ? COLORS.success :  COLORS.grey}
                />
                <Text style={{...FONTS.body3, marginLeft: SIZES.base}}>Wallets</Text>

            </View>
            <View style={{ borderBottomColor: COLORS.grey, borderBottomWidth:0.5, marginTop: SIZES.radius}} />

            <View style={{flexDirection:'row', marginHorizontal: SIZES.margin, marginTop: SIZES.base}}>
                <Octicons 
                      onPress={() => setPaymentOption("credit")}
                      style={{alignSelf: "center"}} 
                      size={16} name={paymentOption === "credit" ? "check-circle-fill" : "circle"} 
                      color={paymentOption === "credit" ? COLORS.success :  COLORS.grey}
                />
                <Text style={{...FONTS.body3, marginLeft: SIZES.base}}>Credit Card</Text>

            </View>
            <View style={{ borderBottomColor: COLORS.grey, borderBottomWidth:0.5, marginTop: SIZES.radius}} />

            <View style={{flexDirection:'row', marginHorizontal: SIZES.margin, marginTop: SIZES.base}}>
                <Octicons 
                      onPress={() => setPaymentOption("netbank")}
                      style={{alignSelf: "center"}} 
                      size={16} name={paymentOption === "netbank" ? "check-circle-fill" : "circle"} 
                      color={paymentOption === "netbank" ? COLORS.success :  COLORS.grey}
                />
                <Text style={{...FONTS.body3, marginLeft: SIZES.base}}>Net Banking</Text>

            </View>
            <View style={{ borderBottomColor: COLORS.grey, borderBottomWidth:0.5, marginTop: SIZES.radius}} />

            <View style={{flexDirection:'row', marginHorizontal: SIZES.margin, marginTop: SIZES.base}}>
                <Octicons 
                      onPress={() => setPaymentOption("cod")}
                      style={{alignSelf: "center"}} 
                      size={16} name={paymentOption === "cod" ? "check-circle-fill" : "circle"} 
                      color={paymentOption === "cod" ? COLORS.success :  COLORS.grey}
                />
                <Text style={{...FONTS.body3, marginLeft: SIZES.base}}>Cash On Delivery</Text>

            </View>
            <View style={{ borderBottomColor: COLORS.grey, borderBottomWidth:0.5, marginTop: SIZES.radius}} />

                      {/* text button component */}
                      <TextButton
                        label="Continue"
                        contentContainerStyle={{
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                        height: 50,
                        marginHorizontal: SIZES.margin,
                        borderRadius: SIZES.btnradius,
                        marginVertical: SIZES.margin * 2.5,
                      }}
                    labelStyle={{
                      ...FONTS.h3,
                    }}
                  onPress={() => console.log("payment option")}
              />
             
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
      <ListingTitle title={"Add Card"}/>
      <View style={styles.cardInputcontnr}>
            <TextInput
              style={styles.cardnumberinput}
              placeholder="Card Number"
              onChangeText={text => console.log(text)}
              placeholderTextColor={COLORS.grey}
             
            />
            <Image style={{alignSelf:"center"}} source={require("../assets/images/creditcard.png")}/>
          </View>
          <View style={{flexDirection:"row"}}>
            <View style={{flex: 0.5}}>
            <TextInput 
          placeholder='Expiry Date'
          style={[styles.input, {marginRight:5}]}
          
      />
            </View>
            <View style={{flex: 0.5}}>
            <TextInput 
          placeholder='CVV'
          style={[styles.input, {marginLeft:5}]}
          
      />
          </View>

          </View>

    <TextInput 
          placeholder='Name Of Card Holder'
          style={styles.input}
          
      />

      <View style={{flexDirection:'row', marginLeft: SIZES.margin, marginVertical: SIZES.margin}}>
        <MaterialCommunityIcons onPress={()=> setSaveCard(!saveCard)} name={saveCard ? "checkbox-marked" : "checkbox-blank-outline"} size={22} color={saveCard && COLORS.primary}/>
        <Text style={{
                  ...FONTS.body3,
                marginLeft: SIZES.radius,
                 marginTop: 2,
                  color: COLORS.grey}}>Save Card</Text>

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
  
  export default ManagePaymentsScreen;
  
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
      color: COLORS.darkgrey,
    },
    addresdesc: {
      ...FONTS.body4,
      color: COLORS.grey,
    },

    addaddrssbtn:{
        height: 35, 
        width: 125,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base,
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

}, 
cardInputcontnr:{
  flexDirection: 'row',
  height: 50,
  borderRadius: SIZES.h3,
  borderColor: COLORS.primary,
  borderWidth: 0.5,
  marginHorizontal: SIZES.margin,
  marginTop: 3,
  marginBottom: SIZES.cmnsize,
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
cardnumberinput:{
  flex: 0.95,
  ...FONTS.body5,
  color: COLORS.dark,
  height: '100%',
}
  });
  

