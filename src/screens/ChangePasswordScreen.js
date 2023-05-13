import { StyleSheet, Text, View, 
    ImageBackground, SafeAreaView,
     StatusBar,
     Image,
     TouchableOpacity,
     TextInput
} from 'react-native'
import React from 'react'
import TransHeader from '../components/TransHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTS, SIZES } from '../constants';
import { TextButton } from '../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ChangePasswordScreen = ({navigation}) => {
const UpdateProfileHandle = () => {
    console.log("update")
}
return (
<ImageBackground
source={require('../assets/images/home/background.png')}
resizeMode="cover"
style={styles.container}>
          <SafeAreaView style={{backgroundColor: '#F5E0DE'}} />
  <SafeAreaView style={{flex: 1}}>
    <StatusBar backgroundColor="#f7f0ef" />
    <TransHeader  title={"Change Password"} Navigation={navigation}/>
    <View style={{flex: 1}}>
        <View style={styles.profilecontainer}>
           
            <Image style={styles.profileimg} source={require("../assets/images/changepasswdheaderimg.png")}/>
          
        </View>
        <View style={{flex: 0.7, }}>

        <KeyboardAwareScrollView
          enableOnAndroid={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps={'handled'}
          extraScrollHeight={10}
          contentContainerStyle={{
            flexGrow: 1,
            //justifyContent: 'center',
          }}>
        <View>
            <Text style={styles.plchldrheadertxt}>Old Password</Text>
            <TextInput 
                placeholder='Enter Your Old Password'
                style={styles.input}
               
            />
        </View>
        <View style={styles.textinputContainer}>
            <Text style={styles.plchldrheadertxt}>New Password</Text>
            <TextInput 
                placeholder='Enter Your New Password'
                style={styles.input}
               // secureTextEntry={true}
            />
        </View>
        <View style={styles.textinputContainer}>
            <Text style={styles.plchldrheadertxt}>Confrim New Password</Text>
            <TextInput 
                placeholder='Confirm New Password'
                style={styles.input}
               // secureTextEntry={true}
            />
        </View>




        <TextButton
              label="Update"
              contentContainerStyle={{
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
                height: 50,
                marginHorizontal: SIZES.margin,
                borderRadius: SIZES.btnradius,
                marginVertical: SIZES.h1,
                
              }}
              labelStyle={{
                ...FONTS.h3,
              }}
              onPress={() => UpdateProfileHandle()}
            />

            
              </KeyboardAwareScrollView>
        </View>

    </View>
    </SafeAreaView>


</ImageBackground>
)
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
container:{
    flex:1,
},
profilecontainer: {
    flex: 0.3,
    // backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center"
    
},
profileimg: {
    width:160,
    height:164,
    //borderRadius: 50,

},

//text input style
textinputContainer:{
    marginTop:SIZES.base,
},
plchldrheadertxt:{
    ...FONTS.body4,
    color: COLORS.darkgreylight,
    marginHorizontal: SIZES.margin
    
},
input:{
    height: 50,
    borderRadius: SIZES.h3,
    borderColor: COLORS.primary,
    borderWidth: 0.5,
    marginHorizontal: SIZES.margin,
    marginTop: 3,
    marginBottom: SIZES.cmnsize,
    ...FONTS.body4,
    color: COLORS.dark,
    paddingHorizontal: SIZES.radius,
    backgroundColor:COLORS.White,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1,
    
}
})
 
