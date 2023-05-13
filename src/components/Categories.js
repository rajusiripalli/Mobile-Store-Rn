import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { COLORS , FONTS, SIZES, dummyData} from '../constants'


const ITEM_WIDTH = 110;
const categoriess = dummyData.Categories;


const Categories = () => {
  return (
    <View>
    {/* slider 1 */}
      <FlatList 
          //ref={row1FlatListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          listKey="Categories"
          //snapToInterval={ITEM_WIDTH}
          keyExtractor={(item) => item.id}
         /// scrollEnabled={false}f
          data={categoriess}
          renderItem={
              ({item, index})=> {
                  return (
                      <View
                          style={{
                             
                              width: ITEM_WIDTH,
                              alignItems: 'center',
                              justifyContent: 'center',
                               
                          }}
                      >
                          <View 
                                style={styles.item} 
                          >
                            <View style={styles.itemImgcontnr}>
                                <Image style={styles.catimg} source={item.url} resizeMode='contain'/>
                            </View>
                            <Text style={styles.cattitle}>{item.name}</Text>
                        </View>

                      </View>
                  )
              }
          }
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
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