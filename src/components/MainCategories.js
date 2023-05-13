import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS , FONTS, SIZES, dummyData} from '../constants';


const ITEM_WIDTH = 110;
const categoriess = dummyData.Categories;

const MainCategories = ({navigation}) => {

    const CategoryBox = ({item}) => (
        <TouchableOpacity
        style={{
            flex: 1,
            //height: 300,
            //width: ITEM_WIDTH,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: SIZES.cmnsize                          
        }}
        onPress={() => navigation.navigate("SubCategory")}
    >
        <View 
              style={styles.item} 
        >
          <View style={styles.itemImgcontnr}>
              <Image style={styles.catimg} source={item.url} resizeMode='contain'/>
          </View>
          <Text style={styles.cattitle}>{item.name}</Text>
      </View>

    </TouchableOpacity>
    )
    return (
        <View style={{flex: 1, marginTop: SIZES.radius}}>
        {/* slider 1 */}
          <FlatList 
            data={categoriess}
            renderItem={({ item }) => <CategoryBox item={item} />}
            keyExtractor={item => item.id}
            numColumns={3}
            key={item => item.id}
          />
        </View>
      )
}

export default MainCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        //flexWrap: 'wrap',
       // alignItems: 'flex-start' ,
        backgroundColor:"red"
        // if you want to fill rows left to right
      },
    item:{
        width: 100,
        height: 100,
        backgroundColor: COLORS.primary60,
        borderRadius: SIZES.h3,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: COLORS.primary80
    },
    itemImgcontnr: {
        width: 50, 
        height:50,
        borderRadius: 60/2, 
        backgroundColor: COLORS.primary80,
        justifyContent: 'center',
        alignItems: 'center',
},
catimg: {
    height: 30,
    width: 30,
    borderRadius: 30/2
},
cattitle: {
    ...FONTS.h4
}
})