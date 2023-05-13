import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import { COLORS, SIZES, dummyData, FONTS } from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Coupons = () => {
    const data = dummyData.productdetailscarouseldata
  return (
    <View style={{width: "100%",height: 60, marginLeft:20, marginBottom:SIZES.margin}}>
    <FlatList 
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(__, index)=> index.toString()}
      //snapToInterval={200}
      decelerationRate="fast"
      renderItem={(item)=>{
        return(
          <View style={styles.aplcupnbtn}>
            <View style={{height: 30, width:30, borderRadius: 30/2, justifyContent: "center", alignItems: 'center', backgroundColor: COLORS.primary }}>
              <FontAwesome name="th-large" size={10} color={COLORS.dark} />
            </View>
            <View style={{marginLeft: SIZES.base}}>
              <Text style={{...FONTS.h5}}>20% Discount</Text>
              <Text style={{...FONTS.body5}}>Save $10</Text>
            </View>

          </View>
        )
      }}
    />

  </View>
  )
}

export default Coupons

const styles = StyleSheet.create({
    aplcupnbtn: {
        height: 50,
         width: 200, 
         backgroundColor: COLORS.secondary, 
         borderRadius: SIZES.base, 
         marginLeft: SIZES.base ,
         shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexDirection: 'row',
       
        alignItems:'center',
        paddingHorizontal: SIZES.cmnsize
      }
})