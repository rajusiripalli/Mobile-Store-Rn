import {StyleSheet, Text, View, TouchableOpacity,FlatList, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, dummyData} from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';

const CartItems = () => {
    const DATA = dummyData.CartItemsData;


  const renderItem = ({item}) => (
    <View style={styles.crtitmcontnr}>
      <View style={styles.imgtitlecontnr}>
        <Image
          style={styles.crtitmimg}
          source={item.url}
          resizeMode='contain'
        />
        <View style={{marginLeft: SIZES.radius, marginTop: SIZES.cmnsize}}>
          <Text numberOfLines={1} style={styles.crttitle}>
           {item?.name}
          </Text>
          <Text style={[styles.crttitle, {marginTop: 2}]}>
            $35{' '}
            <Text style={{...FONTS.body5, color: COLORS.darkgrey}}>1Qty</Text>
          </Text>
        </View>
      </View>
      <View style={styles.crtbtncntnr}>
        <TouchableOpacity style={styles.crtincrdecrbtn}>
          <Entypo name="minus" size={14} color={COLORS.White} />
        </TouchableOpacity>
        <View style={styles.crtincrdecrbtn}>
          <Text style={{...FONTS.body4, color: COLORS.White}}>1</Text>
        </View>
        <TouchableOpacity style={styles.crtincrdecrbtn}>
          <Entypo name="plus" size={14} color={COLORS.White} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default CartItems;

const styles = StyleSheet.create({
  crtitmcontnr: {
    height: 80,
    backgroundColor: COLORS.primaryLight,
    marginHorizontal: SIZES.margin,
    borderRadius: SIZES.h3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.h3,
    marginVertical: SIZES.cmnsize,
    borderWidth: 0.5,
    borderColor: COLORS.primary,
    
    
  },
  imgtitlecontnr: {
    flexDirection: 'row',
  },
  crtitmimg: {
    width: 54,
    height: 54,
    //borderRadius: 54 / 2,
  },
  crttitle: {
    ...FONTS.h3,
    color: COLORS.dark,
  },

  //cart item button styles
  crtbtncntnr: {
    marginTop: SIZES.base,
    //marginRight: SIZES.margin,
    width: 60,
    height: 30,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    borderRadius: SIZES.cmnsize,
    borderWidth: 5,
    borderColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  crtincrdecrbtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
