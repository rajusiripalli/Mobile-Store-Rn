import {StyleSheet, Text, View, TouchableOpacity,FlatList, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, dummyData} from '../constants';

const CartOfferAnnounces = () => {
  return (
        <>
        <View style={{flexDirection: 'row', marginHorizontal: SIZES.margin, marginVertical: SIZES.base}}>
                <Image style={{height: 15, width: 15, alignSelf: 'center'}} source={require('../assets/images/pricetag.png')}/>
                <Text style={{...FONTS.body5, marginLeft: SIZES.cmnsize}}>Buy more, Save more: Buy worth $40 get $10 off</Text>

            </View>
        <View style={{ borderBottomColor: COLORS.darkgrey, borderBottomWidth:0.5, marginVertical: SIZES.cmnsize}} />
        </>
  )
}

export default CartOfferAnnounces

const styles = StyleSheet.create({})