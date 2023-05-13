import { StyleSheet, Text, View, Platform, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS, FONTS, SIZES } from '../constants';

const TransHeader = ({title, Navigation}) => {
    return (
        <View style={[styles.header, {}]}>
            <TouchableWithoutFeedback onPress={() => Navigation.goBack()}>
                <MaterialIcons color={COLORS.dark} name="keyboard-arrow-left" size={28} />
            </TouchableWithoutFeedback>
            <Text style={styles.headertxt}>{title}</Text>
        </View>
    )
}

export default TransHeader

const styles = StyleSheet.create({
    header: {
        //backgroundColor: COLORS.White,
        height: Platform.OS === "ios" ? 64 : 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.cmnsize,
        
        //marginTop: Platform.OS === 'ios' ? 0 : 20
    },
    headertxt: {
        ...FONTS.h3,
        marginLeft: SIZES.base,
        color: COLORS.dark,
        marginTop: 3

    },
})