import { StyleSheet, Text, View, 
    ImageBackground, SafeAreaView,
     StatusBar,
     Image,
     TouchableOpacity,
     
} from 'react-native'
import React from 'react'
import TransHeader from '../components/TransHeader';
import { COLORS, FONTS, SIZES } from '../constants';
import ListingTitle from '../components/ListingTitle';

const AboutusScreen = ({navigation}) => {

return (
<ImageBackground
source={require('../assets/images/aboutus/aboutusbg.png')}
resizeMode="cover"
style={styles.container}>
          <SafeAreaView style={{backgroundColor: '#F5E0DE'}} />
  <SafeAreaView style={{flex: 1}}>
    <StatusBar backgroundColor="#f7f0ef" />
    <TransHeader  title={"About Us"} Navigation={navigation}/>
    <View style={{flex: 1}}>
        <View style={{height: SIZES.margin}}/>
        <View style={{flexDirection:"row",  alignItems: "center", marginLeft: SIZES.h1 * 2}}>
        <ImageBackground
            style={{height: 70, width: 70, justifyContent: 'center', alignItems:"center"}}   
            source={require('../assets/images/aboutus/Ellipse5.png')}
         >
            <Image source={require('../assets/images/aboutus/grocerylogo.png')} />
         </ImageBackground>
            <View style={{marginLeft: SIZES.radius}}>
                <Text style={{...FONTS.h1, color: COLORS.support4}}>Groc<Text style={{color: COLORS.support5}}>ery</Text></Text>
                <Text style={{...FONTS.h5, marginTop: -5}}>Online food & Grocery</Text>
            </View>
        </View>
        <View style={{height: SIZES.h1}}/>
        <ListingTitle title={"About Us"}/>
        <Text style={{marginHorizontal: SIZES.margin, ...FONTS.body5}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages



        </Text>
        <Text style={{marginHorizontal: SIZES.margin, ...FONTS.body5, marginVertical: SIZES.margin}}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

        <Text style={{marginVertical: SIZES.margin, ...FONTS.h4, color: COLORS.support3, alignSelf: 'center', textDecorationLine: "underline", textDecorationColor: COLORS.support3 }}>Terms & Conditions</Text>
     

    </View>
    </SafeAreaView>


</ImageBackground>
)
}

export default AboutusScreen

const styles = StyleSheet.create({
container:{
    flex:1,
},



})



