import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Keyboard,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import StatusbarPlaceholder from '../components/StatusbarPlaceholder';
import {SIZES, FONTS, COLORS} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TextButton} from '../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState('2255');

  const otpRef = React.useRef();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  console.log('Keyboard status ===> ', isKeyboardVisible);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    const cleartimeout = setTimeout(() => {
      !otp && otpRef.current.focusField(0);
    }, 500);

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
      clearTimeout(cleartimeout);
    };
  }, []);

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#F5E0DE'}} />
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'never'}}>
        <StatusBar backgroundColor="#F5E0DE" />
        {/* <KeyboardAwareScrollView style={{flex: 1}}> */}

        <ImageBackground
          source={require('../assets/images/screenbg.png')}
          resizeMode="cover"
          style={{flex: 1}}>
          <View style={{flex: 0.8}}>
            {/* <Image
              style={{
                top: SIZES.height - SIZES.height / 0.96,
                left: SIZES.width - SIZES.width / 0.92,
                transform: [{rotate: '-18.36deg'}],
                opacity: 0.5,
              }}
              source={require('../assets/images/otpscreen/grapes.png')}
            /> */}
            {/* <Image
              style={{
                position: 'absolute',
                width: 130,
                height: 177,
                top: SIZES.height - SIZES.height / 1.1,
                left: SIZES.width - 70,
                opacity: 0.3,
                transform: [{rotate: '-18.36deg'}],
              }}
              source={require('../assets/images/otpscreen/strawberry.png')}
            /> */}
            <Image
              style={{
                position: 'absolute',
                width: 200,
                height: 200,
                top: isKeyboardVisible
                  ? SIZES.height - SIZES.height / 1.17
                  : SIZES.height - SIZES.height / 1.25,
                left: SIZES.width - SIZES.width / 1.3,
              }}
              source={{uri: 'https://img.freepik.com/free-vector/mobile-concept-illustration_114360-4526.jpg?w=1060&t=st=1683963481~exp=1683964081~hmac=92290a98003bedaef3b7a1d1b0d998d4a0366ba2529193b7674c321defba039e'}}
            />
          </View>
          <View style={{flex: 1}}>
            <KeyboardAwareScrollView
              enableOnAndroid={false}
              keyboardDismissMode="on-drag"
              keyboardShouldPersistTaps={'handled'}
              extraScrollHeight={10}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
              }}>
              <Text style={styles.htxt}>Verification Code</Text>
              <Text style={styles.ptxt}>
                We have sent to the Verification Code to your mobile number
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: SIZES.margin,
                }}>
                <Text style={styles.h2txt}>+91 5565446545</Text>
                <MaterialIcons
                  name="edit"
                  color={'#EA4335'}
                  size={22}
                  style={{marginLeft: 8}}
                />
              </View>
              <View style={styles.inputContainer}>
                <OTPInputView
                  ref={otpRef}
                  pinCount={4}
                  style={{
                    width: '82%',
                    height: 55,
                    fontSize: 25,
                    fontWeight: 'bold',
                  }}
                  // autoFocusOnLoad={false}
                  autoFocusOnLoad={'YES'}
                  onCodeChanged={otp => setOtp(otp)}
                  onCodeFilled={otp => console.log(otp)}
                  code={otp}
                  codeInputFieldStyle={styles.underlineStyleBase}
                  codeInputHighlightStyle={styles.input}
                />
              </View>
              {/* text button component */}
              <TextButton
                label="Done"
                contentContainerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.primary,
                  height: 50,
                  marginHorizontal: SIZES.margin,
                  borderRadius: SIZES.btnradius,
                  marginVertical: SIZES.margin * 2.5,
                }}
                labelStyle={{
                  ...FONTS.h3,
                }}
                onPress={() => navigation.navigate('homebottomtab')}
              />
              {/* text button component */}
            </KeyboardAwareScrollView>
          </View>
        </ImageBackground>
        {/* </KeyboardAwareScrollView> */}
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: '#ebdbe8', opacity: 0.4}} />
    </>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  htxt: {
    color: COLORS.Black,
    ...FONTS.h1,
    textAlign: 'center',
    marginTop: SIZES.margin * 2,
  },
  ptxt: {
    ...FONTS.h3,
    marginHorizontal: SIZES.margin,
    textAlign: 'center',
    marginTop: SIZES.margin,
  },
  h2txt: {
    ...FONTS.h2,
    color: COLORS.primary,
  },

  ///otp

  input: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: COLORS.primary80,
    ...FONTS.h2,
    //fontFamily: 'Rajdhani Bold',
    //fontWeight: 'bold',
    //marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    //paddingHorizontal: 20,
  },
  underlineStyleBase: {
    width: 60,
    height: 60,
    ...FONTS.h2,
    backgroundColor: COLORS.primary80,
    color: '#414141',
    borderRadius: 60 / 2,
    borderColor: COLORS.primary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: SIZES.margin,
  },
});
