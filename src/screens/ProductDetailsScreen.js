import { StyleSheet, Text, View, TouchableOpacity,FlatList, ScrollView} from 'react-native'
import React from 'react'
import ProductDetailsImageSlider from '../components/ProductDetailsImageSlider'
import { COLORS, SIZES, dummyData, FONTS } from '../constants';
import ListingTitle from '../components/ListingTitle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import HrLine from '../components/HrLine';
import MainSubCategories from '../components/MainSubCategories';
import RelatedItems from '../components/RelatedItems';


const ProductDetailsScreen = ({navigation}) => {
      const data = dummyData.productdetailscarouseldata
  return (
    <View style={styles.container}>
 
      <ProductDetailsImageSlider Navigation={navigation}/>

         
            <View style={styles.maincontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{alignItems: 'baseline'}}>
              <TouchableOpacity style={styles.catgrybtn}>
                      <Text style={styles.catgrybtntxt}>{"Phones"}</Text>
            </TouchableOpacity>
              </View>
  
       
              <ListingTitle title={"IPhone"}/>
              <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and</Text>
  
                <View style={{flexDirection: 'row', marginHorizontal: SIZES.margin, marginVertical: SIZES.radius}}>
                  <FontAwesome name="star" size={22} color={COLORS.support1} />
                  <Text style={styles.reviewtxt}>4.7 <Text>(82 reviews)</Text></Text>
                </View>
                {/* price container */}
                <View style={{width: "100%",marginLeft: SIZES.margin, paddingRight: 20,}}>
                <View style={styles.pricontnr}>
                  <View>
                    <Text style={{...FONTS.h3, color: COLORS.grey}}>Price</Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{...FONTS.h2, color: COLORS.dark}}>$35.00 </Text>
                    <Text style={{...FONTS.h5,color: COLORS.support1, marginTop: SIZES.cmnsize}}>per (1kg)</Text>
                    </View>
                    
                  </View>
                  <View style={styles.crtbtncntnr}>
                      <TouchableOpacity style={styles.crtincrdecrbtn}>
                       <Entypo name="minus" size={14} color={COLORS.White}/>
                      </TouchableOpacity>
                      <View style={styles.crtincrdecrbtn}>
                       <Text style={{...FONTS.body4, color: COLORS.White}}>1</Text>
                      </View>
                      <TouchableOpacity style={styles.crtincrdecrbtn}>
                       <Entypo name="plus" size={14} color={COLORS.White}/>
                      </TouchableOpacity>
                  </View>

                </View>
                </View>
                <View style={{ borderBottomColor: COLORS.grey, borderBottomWidth:0.5, marginHorizontal: SIZES.margin, marginTop: SIZES.h3}}/>
                {/* price container */}
              {/* apply coupons */}
                <View style={{width: "100%",height: 60, marginLeft:20, marginVertical:SIZES.margin}}>
                  <FlatList 
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index)=> index.toString()}
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
                {/* apply coupons */}

                {/* Related items */}
                <ListingTitle title="Related Items"/>
               
              <RelatedItems Navigation={navigation}/>
          
              

                {/* Related items */}



           
                </ScrollView>
            </View>
                            {/* cart float button */}
                            <TouchableOpacity
    style={{
      borderWidth: 1,
      borderColor: COLORS.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: SIZES.radius,
      position: 'absolute',
      width: '94%',
      bottom: 10,
      right: 0,
   
      height: 50,
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.h1,
    }}
    onPress={() => navigation.goBack()}
  >
              <Text style={{ color: COLORS.White, ...FONTS.h3, }}>
                Add To Cart
            </Text>
  </TouchableOpacity>

                {/* cart float button */}
          
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({

    container:{
        flex: 1,
    }, 
    maincontainer: {
        flex: 1,
        
        backgroundColor: COLORS.White,
        marginTop: -100,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        //alignItems: 'baseline'

    },
    catgrybtn:{
        //flex:1,
        height: 20,
        backgroundColor: COLORS.support1, 
        justifyContent:'center', 
        alignItems: 'center',
        paddingHorizontal: SIZES.body5,
        borderRadius: SIZES.btnradius,
        marginHorizontal: SIZES.margin,
        marginTop: SIZES.margin,
        marginBottom: SIZES.base
     
        
      },
      catgrybtntxt: {
        alignSelf:"flex-start",
        ...FONTS.body5, 
        color: COLORS.White
      },
      desc:{
        ...FONTS.body5,
        color: COLORS.dark,
        marginHorizontal: SIZES.margin,
        marginTop: SIZES.cmnsize,
        lineHeight: SIZES.padding,
      },
      reviewtxt:{
        ...FONTS.h4,
        color: COLORS.dark, 
        marginLeft: SIZES.cmnsize
      },
      pricontnr:{
        
        flexDirection: 'row',
        //width: "100%", 
        justifyContent:"space-between",
        marginRight: SIZES.margin
      }, 
      crtbtncntnr: {
        marginTop: SIZES.base,
        //marginRight: SIZES.margin,
        width: 60, 
        height: 30,
         backgroundColor:COLORS.primary,
         flexDirection: "row", 
         borderRadius: SIZES.cmnsize,
         shadowColor: "#000",
         shadowOffset: {
           width: 0,
           height: 2,
         },
         shadowOpacity: 0.23,
         shadowRadius: 2.62,
         
         elevation: 4,
         
      },
      crtincrdecrbtn:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      aplcupnbtn: {
        height: 50,
         width: 200, 
         backgroundColor: COLORS.secondary, 
         borderRadius: SIZES.base, 
         marginLeft: SIZES.cmnsize,
         marginRight: SIZES.base ,
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