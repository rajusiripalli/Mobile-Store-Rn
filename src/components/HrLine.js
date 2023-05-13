import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES,COLORS } from '../constants'

const HrLine = () => {
  return <View style={{ borderBottomColor: COLORS.grey, borderBottomWidth:0.5, marginHorizontal: SIZES.margin}}/>
}

export default HrLine

const styles = StyleSheet.create({})