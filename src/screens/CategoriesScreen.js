import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput , FlatList } from 'react-native'
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import DefaultHeader from '../components/DefaultHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Categories from '../components/Categories';
import MainCategories from '../components/MainCategories';


const CategoriesScreen = ({navigation}) => {


  return (
    <>
    <SafeAreaView style={{backgroundColor: COLORS.White}} />
    <SafeAreaView style={{flex: 1}}>
    <StatusBar backgroundColor={COLORS.White}  barStyle="dark-content"  />
      <View style={styles.container}>
      <DefaultHeader title={'Category'} Navigation={navigation} />
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
                //marginTop: SIZES.cmnsize,
                height: '100%',
                marginLeft: SIZES.base,
              }}
              placeholderTextColor={COLORS.grey}
            />
          </View>
          <View style={{height: SIZES.base}} />
          {/* search container */}
              
           <MainCategories  navigation={navigation}/>
         

    </View>
    </SafeAreaView>
    <SafeAreaView />
    </>
  )
}

export default CategoriesScreen

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
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
      },

      //flatlist test style
      
  gridbox: {
    flex: 1,
    height: 75,
    margin: 2,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  gridText: {
    fontSize: 24,
    color: 'white'
  }
 
})