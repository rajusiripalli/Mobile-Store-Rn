import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'

const ExclusiveOfferBanner = () => {
  return (
    <View
    style={{
      // flex: 0.5,
      height: 168,
      // alignItems: 'center',
      //paddingHorizontal: 24,
      marginHorizontal: 10,
      backgroundColor: COLORS.dark08,
      borderRadius: 15,
      marginVertical: SIZES.margin
    }}>
    <ImageBackground
      source={{uri: "https://img.freepik.com/free-vector/realism-hand-drawn-horizontal-banner_23-2150203461.jpg"}}
      imageStyle={{  borderRadius: 15,}}
      resizeMode="cover"
      style={{
        height: '100%',
        overflow: "hidden"

      }}
    />
  </View>
  )
}

export default ExclusiveOfferBanner

const styles = StyleSheet.create({})