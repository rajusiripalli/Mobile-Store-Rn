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

const EditProfileScreen = ({navigation}) => {
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
        <TransHeader  title={"Edit Profile Details"} Navigation={navigation}/>
        <View style={{flex: 1}}>
            <View style={styles.profilecontainer}>
                <View>
                <Image style={styles.profileimg} source={require("../assets/images/editprofilepic.png")}/>
                <TouchableOpacity style={styles.camIcon}>
                    <FontAwesome name="camera" size={16} color={COLORS.dark} />
                </TouchableOpacity>
                </View>
                <TouchableOpacity>
                <Text style={{...FONTS.body5, color: COLORS.support3, marginTop: SIZES.radius}}>View Profile Picture</Text>

                </TouchableOpacity>
            </View>
            <View style={{flex: 0.7}}>

            <KeyboardAwareScrollView
              enableOnAndroid={false}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps={'handled'}
              extraScrollHeight={10}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
              }}>
            <View style={styles.textinputContainer}>
                <Text style={styles.plchldrheadertxt}>First Name</Text>
                <TextInput 
                    placeholder='First Name'
                    style={styles.input}
                />
            </View>
            <View style={styles.textinputContainer}>
                <Text style={styles.plchldrheadertxt}>Last Name</Text>
                <TextInput 
                    placeholder='Last Name'
                    style={styles.input}
                />
            </View>
            <View style={styles.textinputContainer}>
                <Text style={styles.plchldrheadertxt}>Phone Number</Text>
                <TextInput 
                    placeholder='Phone'
                    style={styles.input}
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.textinputContainer}>
                <Text style={styles.plchldrheadertxt}>Email</Text>
                <TextInput 
                    placeholder='Email'
                    style={styles.input}
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

export default EditProfileScreen

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
        width:96,
        height:96,
        borderRadius: 50,

    },
    camIcon: {
        height: 30,
        width: 30,
        borderRadius: 30/2,
        backgroundColor:COLORS.primary,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: "flex-end",
        marginTop: -SIZES.h1
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