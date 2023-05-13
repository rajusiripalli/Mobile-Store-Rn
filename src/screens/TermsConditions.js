import { StyleSheet, Text, View, 
    ImageBackground, SafeAreaView,
     StatusBar,

     
} from 'react-native'
import React from 'react'
import TransHeader from '../components/TransHeader';
import { COLORS, FONTS, SIZES } from '../constants';

const TermsConditions = ({navigation}) => {

return (
<ImageBackground
source={require('../assets/images/aboutus/aboutusbg.png')}
resizeMode="cover"
style={styles.container}>
          <SafeAreaView style={{backgroundColor: '#F5E0DE'}} />
  <SafeAreaView style={{flex: 1}}>
    <StatusBar backgroundColor="#f7f0ef" />
    <TransHeader  title={"Terms & Conditions"} Navigation={navigation}/>
    <View style={{flex: 1}}>
        <View style={{height: SIZES.margin}}/>

        <View style={{margin: SIZES.margin}}>
        <Text style={{...FONTS.h3,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        <Text style={{...FONTS.body5, marginTop: SIZES.radius}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</Text>
        </View>

        <View style={{height: SIZES.margin}}/>

        <View style={{margin: SIZES.margin}}>
        <Text style={{...FONTS.h3,}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        <Text style={{...FONTS.body5, marginTop: SIZES.radius}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</Text>
        </View>

        

     

    </View>
    </SafeAreaView>


</ImageBackground>
)
}

export default TermsConditions

const styles = StyleSheet.create({
container:{
    flex:1,
},



})





