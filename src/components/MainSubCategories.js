import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { COLORS , FONTS, SIZES, dummyData} from '../constants';
import Octicons from  'react-native-vector-icons/Octicons';


const MainSubCategories = ({Navigation}) => {
    let data = dummyData.BestSellersData;
    const [likes, setLikes] = useState('');

    const MainSubCategoryBox = ({item, index}) => (
        <TouchableOpacity style={styles.item} onPress={() => Navigation.navigate("ProductDetails")} >
        <View style={{margin: 10}}>
           {/* top likes row */}
          <View style={{
            flexDirection: 'row',
            justifyContent:'space-between'
          }}>
            <View style={styles.catgrybtn}>
              <Text style={styles.catgrybtntxt}>{"Phones"}</Text>
            </View>

            <Octicons onPress={() => setLikes(index)} name={likes === index ? 'heart-fill' : 'heart'} size={20} color={COLORS.primary} />
          </View>
          {/* top likes row */}
          {/* image row */}
          <View
          style={{alignSelf: 'center'}}
          >
            <Image style={styles.itemimg} source={item.url} />
          </View>
          {/* image row */}

          <Text style={styles.itemtitle}>{item.name}</Text>
          <Text style={styles.qtytxt}>1Qty</Text>

          {/* price row */}
          <View style={{
            flexDirection: 'row',
            justifyContent:'space-between'
          }}>


    <Text style={styles.price}>{'$32.00'}</Text>
            <View style={styles.addbtn}>
              <Text style={{...FONTS.body5, color: COLORS.White}}>ADD</Text>
            </View>
          </View>
          {/* price row */}



        </View>
      </TouchableOpacity>
    )
  return (
    <View style={{flex: 1, marginTop: SIZES.radius, marginHorizontal: SIZES.cmnsize}}>
    {/* slider 1 */}
      <FlatList 
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item,index }) => <MainSubCategoryBox item={item} index={index} />}
        keyExtractor={item => item.id}
        numColumns={2}
        key={item => item.id}
      />
    </View>
  )
}

export default MainSubCategories

const styles = StyleSheet.create({
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