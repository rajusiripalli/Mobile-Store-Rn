import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput , FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import DefaultHeader from '../components/DefaultHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




const MyOrdersScreen = ({navigation}) => {

    return (
        <>
        <SafeAreaView style={{backgroundColor: COLORS.White}} />
        <SafeAreaView style={{flex: 1}}>
          <StatusBar backgroundColor={COLORS.White} />
          <View style={styles.container}>
          <DefaultHeader title={'My Orders'} Navigation={navigation} />
              {/* search container */}
              <View style={styles.searchcontainer}>
                <MaterialIcons
                  style={{
                    marginLeft: SIZES.base,
                    marginTop: Platform.OS === 'ios' ? SIZES.cmnsize : 0,
                  }}
                  name="search"
                  size={20}
                  color={COLORS.grey}
                />
                <TextInput
                  placeholder="search"
                  style={{
                    flex: 1,
                    ...FONTS.h3,
                    marginTop: SIZES.cmnsize,
                    height: '100%',
                    marginLeft: SIZES.base,
                  }}
                  placeholderTextColor={COLORS.grey}
                />
              </View>
              <View style={{height: SIZES.h3}} />
              {/* search container */}

              {/* orders list */}
                  <TouchableOpacity style={styles.orderitemcontnr}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require("../assets/images/orangespic.jpg")}  style={styles.orderitemimg}/>
                            <View style={{marginLeft: SIZES.radius}}> 
                                <Text style={{...FONTS.h3, color: COLORS.dark}}>Orange</Text>
                                <Text style={{...FONTS.h3, color: COLORS.dark}}>$30 <Text style={{...FONTS.body5, color: COLORS.grey}}>/1kg</Text></Text>
                                <View style={{flexDirection: "row", marginTop: SIZES.base}}>
                                    <FontAwesome name={"star"} size={20} color={COLORS.support1}/>
                                    <FontAwesome name={"star"} size={20} color={COLORS.support1}/>
                                    <FontAwesome name={"star"} size={20} color={COLORS.support1}/>
                                    <FontAwesome name={"star"} size={20} color={COLORS.grey}/>
                                    <FontAwesome name={"star"} size={20} color={COLORS.grey}/>
                                </View>
                                <Text style={{...FONTS.body4, color: COLORS.darkgrey, marginTop: SIZES.cmnsize}}>Rate the product now</Text>
                            </View>
                        </View>
                        <MaterialIcons style={{alignSelf: 'center'}} color={COLORS.dark} name="keyboard-arrow-right" size={28} />

                  </TouchableOpacity>
              {/* orders list */}
            {/* orders list */}
                         <TouchableOpacity style={styles.orderitemcontnr}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require("../assets/images/bananas.png")}  style={styles.orderitemimg}/>
                            <View style={{marginLeft: SIZES.radius}}> 
                                <Text style={{...FONTS.h3, color: COLORS.dark}}>Banana</Text>
                                <Text style={{...FONTS.h3, color: COLORS.dark}}>$30 <Text style={{...FONTS.body5, color: COLORS.grey}}>/1kg</Text></Text>

                            </View>
                        </View>
                        <MaterialIcons style={{alignSelf: 'center'}} color={COLORS.dark} name="keyboard-arrow-right" size={28} />

                  </TouchableOpacity>
              {/* orders list */}
              {/* orders list */}
                        <TouchableOpacity style={styles.orderitemcontnr}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require("../assets/images/orangespic.jpg")}  style={styles.orderitemimg}/>
                            <View style={{marginLeft: SIZES.radius}}> 
                                <Text style={{...FONTS.h3, color: COLORS.dark}}>Orange</Text>
                                <Text style={{...FONTS.h3, color: COLORS.dark}}>$30 <Text style={{...FONTS.body5, color: COLORS.grey}}>/1kg</Text></Text>
                                <View style={{flexDirection: "row", marginTop: SIZES.base}}>
                       
                                    <FontAwesome name={"star"} size={20} color={COLORS.grey}/>
                                    <FontAwesome name={"star"} size={20} color={COLORS.grey}/>
                                    <FontAwesome name={"star"} size={20} color={COLORS.grey}/>
                                    <FontAwesome name={"star"} size={20} color={COLORS.grey}/>
                                    <FontAwesome name={"star"} size={20} color={COLORS.grey}/>
                                </View>
                                <Text style={{...FONTS.body4, color: COLORS.darkgrey, marginTop: SIZES.cmnsize}}>Rate the product now</Text>
                            </View>
                        </View>
                        <MaterialIcons style={{alignSelf: 'center'}} color={COLORS.dark} name="keyboard-arrow-right" size={28} />

                  </TouchableOpacity>
              {/* orders list */}
                {/* orders list */}
                        <TouchableOpacity style={styles.orderitemcontnr}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require("../assets/images/bananas.png")}  style={styles.orderitemimg}/>
                            <View style={{marginLeft: SIZES.radius}}> 
                                <Text style={{...FONTS.h3, color: COLORS.dark}}>Banana</Text>
                                <Text style={{...FONTS.h3, color: COLORS.dark}}>$30 <Text style={{...FONTS.body5, color: COLORS.grey}}>/1kg</Text></Text>

                            </View>
                        </View>
                        <MaterialIcons style={{alignSelf: 'center'}} color={COLORS.dark} name="keyboard-arrow-right" size={28} />

                  </TouchableOpacity>
              {/* orders list */}
        </View>
    </SafeAreaView>
    <SafeAreaView />
    </>
  )
}

export default MyOrdersScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.White,
      },
      searchcontainer: {
        flexDirection: 'row',
        height: 45,
        marginHorizontal: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.primary,
        borderWidth: 0.5,
        borderRadius: SIZES.body5,
        backgroundColor: '#fff',
        paddingLeft: SIZES.cmnsize,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    
        elevation: 8,
      },
      orderitemcontnr:{
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: SIZES.margin,
        paddingVertical: SIZES.base,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: SIZES.cmnsize
      },
      orderitemimg:{
        height: 54,
        width: 54,
        borderRadius: 54/2,
  
      }
})