import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS } from '../constants'

const ListingTitle = ({title}) => {
  return <Text style={styles.txtstyle}>{title}</Text>
}

export default ListingTitle

const styles = StyleSheet.create({
    txtstyle: {
        ...FONTS.h3,
        color: COLORS.dark,
        marginHorizontal: SIZES.margin
    }
})