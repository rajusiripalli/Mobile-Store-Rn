import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput , FlatList } from 'react-native'
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import DefaultHeader from '../components/DefaultHeader';
import MainSubCategories from '../components/MainSubCategories';

const SubCategoryScreen = ({navigation}) => {
    
  return (
    <>
    <SafeAreaView style={{backgroundColor: COLORS.White}} />
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.White} />
      <View style={styles.container}>
      <DefaultHeader title={'Phones'} Navigation={navigation} />
      <MainSubCategories Navigation={navigation}/>
      <View style={{height: SIZES.margin}}/>
    </View>
    </SafeAreaView>
    <SafeAreaView style={{backgroundColor: COLORS.White}} />
    </>
  )
}

export default SubCategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White,
      },
})