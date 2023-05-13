import { StyleSheet, Text, View,
         SafeAreaView, StatusBar,
          ScrollView, TextInput,
          Image, TouchableOpacity
        } from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES} from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import DefaultHeader from '../components/DefaultHeader';
import CartItems from '../components/CartItems';
import ListingTitle from '../components/ListingTitle';
import HrLine from '../components/HrLine';
import Coupons from '../components/Coupons';
import CartOfferAnnounces from '../components/CartOfferAnnounces';
import { TextButton } from '../components';
const CartScreen = ({navigation}) => {
  return (
    <>
    <SafeAreaView style={{backgroundColor: COLORS.White}} />
      <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.White}  barStyle="dark-content"  />
        <View style={styles.container}>
          <DefaultHeader title={'Cart'} Navigation={navigation} />
        <ScrollView>
          <Text style={{
            alignSelf:'flex-end', ...FONTS.h5,
           color: COLORS.support2, 
           marginRight: SIZES.margin}}>Clear</Text>

           {/* cart items */}
           <CartItems />
            <View  style={{height: SIZES.base}}/>
           <ListingTitle title={"Payment Summary"}/>

           <View style={styles.pricerow}>
            <Text style={styles.pricetxt}>Item Total</Text>
            <Text style={styles.pricetxt}>$ 100</Text>
           </View>
           <View style={[styles.pricerow, {marginBottom: SIZES.base}]}>
            <Text style={styles.pricetxt}>Discount</Text>
            <Text style={styles.pricetxt}>$ 10</Text>
           </View>
           <HrLine />

           <View style={[styles.pricerow, {marginVertical: SIZES.radius}]}>
            <Text style={{...FONTS.h4,color: COLORS.dark}}> Total</Text>
            <Text style={{...FONTS.h4, color: COLORS.dark}}>$ 100</Text>
           </View>

           <View style={{ borderBottomColor: COLORS.primary, borderBottomWidth:5,opacity: 0.4, marginTop: SIZES.radius, marginBottom: SIZES.margin}}/>

            <ListingTitle title={"Apply Coupon"}/>
            <TextInput 
                placeholder='eg. XDF123456'
                style={styles.input}
                placeholderTextColor="#9AA6B8"
            />
            <Coupons />

            
           <View style={{ borderBottomColor: COLORS.primary, borderBottomWidth:5,opacity: 0.4, marginBottom: SIZES.cmnsize}}/>

           {/* offers announce */}
                <CartOfferAnnounces/>
                <CartOfferAnnounces/>
                <CartOfferAnnounces/>
           <View style={{ borderBottomColor: COLORS.primary, borderBottomWidth:5,opacity: 0.4, marginVertical: SIZES.base}}/>

         {/* offers announce */}

            <View style={{flexDirection: 'row', justifyContent: "space-between", marginHorizontal: SIZES.margin, marginVertical: SIZES.base,}}>
                <Text style={{...FONTS.body4, color: COLORS.darkgrey}}>Deliver To:</Text>
                <TouchableOpacity style={styles.addaddrssbtn}>
                        <Text style={{...FONTS.h5, color: COLORS.White}}>Add Address</Text>
                        <Entypo style={{marginLeft: 2}} color={COLORS.White} name="plus" size={16} />
                </TouchableOpacity>
            </View>

            <TextButton
                  label="Checkout"
                  contentContainerStyle={{
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                    height: 50,
                    marginHorizontal: SIZES.margin,
                    borderRadius: SIZES.btnradius,
                    marginVertical: SIZES.margin,
                  }}
                  labelStyle={{
                    ...FONTS.h3,
                  }}
                 // onPress={() => EmailHandle()}
                />
            


                
           </ScrollView>
        
    </View>
    </SafeAreaView>
    <SafeAreaView style={{backgroundColor: COLORS.White}} />

    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
      },
      pricerow:{
        flexDirection: 'row',
         justifyContent: "space-between", 
         marginHorizontal: SIZES.margin,
         marginVertical: SIZES.cmnsize
    },
    pricetxt: {
        ...FONTS.body4,
        color: COLORS.dark
    },
    input: {
        height: 50,
        borderRadius: SIZES.h3,
        marginHorizontal: SIZES.margin,
        borderWidth:0.5,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.White,
        padding: SIZES.radius,
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginVertical: SIZES.base
    },
    addaddrssbtn:{
        height: 28, 
        width: 123,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        flexDirection: 'row',
        
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})