import { StyleSheet, Text, View,FlatList, Image } from 'react-native';
import React, { useState } from 'react'
import { COLORS, SIZES, dummyData, FONTS } from '../constants';
import Octicons from  'react-native-vector-icons/Octicons';

const BestSellers = () => {
  let data = dummyData.BestSellersData
  const [likes, setLikes] = useState('');

  return (
    <View style={{flex: 1, marginHorizontal: 10,}}>
      
   
    <FlatList 
             columnWrapperStyle={{ justifyContent: 'space-between' }}
             keyExtractor={(_, index)=> index.toString()}
             data={data}
             numColumns={2}
          renderItem={({item, index})=>{
              return (
              
              <View style={styles.item} >
                <View style={{margin: 10}}>
                   {/* top likes row */}
                  <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between'
                  }}>
                    <View style={styles.catgrybtn}>
                      <Text style={styles.catgrybtntxt}>{"Phone"}</Text>
                    </View>

                    <Octicons onPress={() => setLikes(index)} name={likes === index ? 'heart-fill' : 'heart'} size={20} color={COLORS.primary} />
                  </View>
                  {/* top likes row */}
                  {/* image row */}
                  <View
                  style={{alignSelf: 'center'}}
                  >
                    <Image style={styles.itemimg} source={item.url} resizeMode='contain' />
                  </View>
                  {/* image row */}

                  <Text style={styles.itemtitle}>{item.name}</Text>
                  <Text style={styles.qtytxt}>1 Qty</Text>

                  {/* price row */}
                  <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between'
                  }}>


            <Text style={styles.price}>{'$320.00'}</Text>
                    <View style={styles.addbtn}>
                      <Text style={{...FONTS.body5, color: COLORS.White}}>ADD</Text>
                    </View>
                  </View>
                  {/* price row */}



                </View>
              </View>

              )
            }}
          
        />
       
       </View>
  )
}

export default BestSellers

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'

  },
  item:{
    flex: 0.5,
    height:206,
    backgroundColor: COLORS.primary60,
    borderRadius: SIZES.h3,
    margin: 10,
    
  },

  itemimg:{
    height: 90,
    width: 90
  },
  itemtitle:{
    ...FONTS.h3,
    color: COLORS.darkgrey,
    width: "100%",
  },
  qtytxt:{
    ...FONTS.h4,
    color: COLORS.support1
  },
  catgrybtn:{
    backgroundColor: COLORS.support1, 
    justifyContent:'center', 
    alignItems: 'center',
    paddingHorizontal: SIZES.body5,
    borderRadius: SIZES.btnradius,
  },
  catgrybtntxt: {
    ...FONTS.body5, 
    color: COLORS.White
  },
  addbtn:{
    backgroundColor: COLORS.primary, 
    justifyContent:'center', 
    alignItems: 'center', 
    padding: 3, 
    height: 24, 
    width: 50,
    borderRadius: SIZES.cmnsize
  },
  price:{
    ...FONTS.h3,
    color: COLORS.dark,
    width: 70,
    
  }
})