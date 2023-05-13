import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TextButton} from '../components';
import {COLORS, SIZES, FONTS} from '../constants';

const LoginScreen = ({navigation}) => {
  const [isPhone, setIsPhone] = useState(true);
  const [phonenumber, setPhonenumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  // Country
  const [countries, setCountries] = useState([]);
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    callingCode: '+91',
    code: 'IN',
    flag: 'https://countryflagsapi.com/png/IN',
    name: 'India',
  });

  useEffect(() => {
    // Fetch countires
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        let countryData = data.map(item => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.alpha2Code}`,
          };
        });

        setCountries(countryData);
        console.log('Countries data ==> ', countryData);
      });
  }, []);

  // Render
  function renderCountryModal() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCountryModal}>
        <TouchableWithoutFeedback onPress={() => setShowCountryModal(false)}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.dark80,
            }}>
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.light,
                borderRadius: SIZES.radius,
              }}>
              <FlatList
                data={countries}
                keyExtractor={item => item.code}
                contentContainerStyle={{
                  paddingHorizontal: SIZES.padding,
                  paddingBottom: SIZES.padding,
                }}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                      }}
                      onPress={() => {
                        console.log('selected item country =-> ', item);
                        setSelectedCountry(item);
                        setShowCountryModal(false);
                      }}>
                      <Image
                        source={{uri: item.flag}}
                        resizeMode="contain"
                        style={{
                          width: 40,
                          height: 30,
                        }}
                      />
                      <Text
                        style={{
                          flex: 1,
                          marginLeft: SIZES.radius,
                          ...FONTS.body3,
                        }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  const PhoneHandle = () => {
    if (!phonenumber) {
      alert('Enter Phone number');
      return;
    }

    navigation.navigate('otp');
  };
  const EmailHandle = () => {
    if (!Email) {
      alert('Enter Email');
      return;
    }
    if (!Password) {
      alert('enter password');
      return;
    }

    navigation.navigate('homebottomtab');
  };
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#F5E0DE'}} />
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#f7f0ef" />
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/images/screenbg.png')}
            resizeMode="cover"
            style={styles.image}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
              }}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                  Login Account
                </Text>
                <Text style={{fontSize: 12, fontWeight: '500'}}>
                  Hello Welcome back to our account
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setShowCountryModal(true)}
                style={{
                  width: 40,
                  height: 30,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  flexDirection: 'row',
                  marginTop: 4,
                }}>
                <Image
                  style={{
                    width: SIZES.margin,
                    height: SIZES.margin,
                    borderRadius: SIZES.margin / 2,
                  }}
                  source={{uri: `${selectedCountry.flag}`}}
                />
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={18}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
            <View style={{height: 50}} />
            <View
              style={{
                height: 50,
                backgroundColor: '#f3f1f1',
                flexDirection: 'row',
                marginHorizontal: 20,
                borderRadius: 10,
              }}>
              <TouchableOpacity
                onPress={() => setIsPhone(false)}
                style={{
                  flex: 0.5,
                  backgroundColor: isPhone ? '#f3f1f1' : 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: isPhone ? '500' : 'bold',
                    color: isPhone ? 'grey' : '#000',
                  }}>
                  Email
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsPhone(true)}
                style={{
                  flex: 0.5,
                  backgroundColor: isPhone ? 'white' : '#f3f1f1',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: isPhone ? 'bold' : '500',
                    color: isPhone ? '#000' : 'grey',
                  }}>
                  Phone Number
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: 80}} />
            {/* phone number container */}
            {isPhone && (
              <>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 20,
                    color: '#000',
                  }}>
                  Phone Number
                </Text>
                <View
                  style={{
                    height: 50,
                    backgroundColor: '#fff',
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    marginHorizontal: 20,
                    borderRadius: 10,
                    flexDirection: 'row',
                    marginVertical: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() => setShowCountryModal(true)}
                    style={{
                      width: 60,
                      height: 30,
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      flexDirection: 'row',
                      margin: 5,
                      marginTop: 10,
                      marginLeft: 8,
                    }}>
                    <Image
                      style={{
                        width: SIZES.margin,
                        height: SIZES.margin,
                        borderRadius: SIZES.margin,
                      }}
                      source={{uri: `${selectedCountry.flag}`}}
                    />
                    <Text style={{color: COLORS.Black, ...FONTS.body5}}>
                      {selectedCountry.callingCode}
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-down"
                      size={18}
                      color="#000"
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      height: '100%',
                      borderWidth: 1,
                      borderColor: 'grey',
                    }}
                  />
                  <TextInput
                    onChangeText={text => setPhonenumber(text)}
                    style={{flex: 1, marginLeft: 5}}
                    keyboardType="number-pad"
                    placeholder={`Phone Number`}
                  />
                </View>
                {/* text button component */}
                <TextButton
                  label="Request OTP"
                  contentContainerStyle={{
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                    height: 50,
                    marginHorizontal: SIZES.margin,
                    borderRadius: SIZES.btnradius,
                    marginVertical: SIZES.margin,
                  }}
                  labelStyle={{
                    ...FONTS.h3,
                  }}
                  onPress={() => PhoneHandle()}
                />
                {/* text button component */}
              </>
            )}

            {/* phone number container */}
            {isPhone === false && (
              <>
                <TextInput
                  onChangeText={text => setEmail(text)}
                  placeholder="UserName"
                  style={{
                    height: 50,
                    backgroundColor: '#fff',
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    marginHorizontal: 20,
                    borderRadius: 10,
                    padding: 10,
                    marginVertical: 20,
                    marginBottom: 15,
                  }}
                />

                <TextInput
                  secureTextEntry={true}
                  onChangeText={text => setPassword(text)}
                  placeholder="Password"
                  style={{
                    height: 50,
                    backgroundColor: '#fff',
                    borderWidth: 0.5,
                    borderColor: 'grey',
                    marginHorizontal: 20,
                    borderRadius: 10,
                    padding: 10,
                  }}
                />

                <TextButton
                  label="Login"
                  contentContainerStyle={{
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                    height: 50,
                    marginHorizontal: SIZES.margin,
                    borderRadius: SIZES.btnradius,
                    marginVertical: SIZES.margin,
                  }}
                  labelStyle={{
                    ...FONTS.h3,
                  }}
                  onPress={() => EmailHandle()}
                />
              </>
            )}
            {/* email container */}

            {/* email container */}

            <View style={{height: 50}} />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  flex: 0.3,
                  borderBottomWidth: 0.3,
                  borderColor: 'grey',
                  marginTop: 2,
                }}
              />
              <Text style={{fontSize: 12}}>Or Sign in with social media</Text>
              <View
                style={{
                  flex: 0.3,
                  borderBottomWidth: 0.3,
                  borderColor: 'grey',
                  marginTop: 2,
                }}
              />
            </View>
            <View style={{height: 30}} />
            <View style={{alignSelf: 'center', flexDirection: 'row'}}>
              <Image
                style={{width: 30, height: 30, borderRadius: 30 / 2}}
                source={require('../assets/images/fb.png')}
              />
              <Image
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  marginLeft: 20,
                }}
                source={require('../assets/images/google.png')}
              />
            </View>
            <View style={{height: 40}} />
            <Text
              style={{alignSelf: 'center', fontSize: 14, fontWeight: '500'}}>
              If you don't have an Account?{' '}
              <Text style={{color: '#8aa5a7'}}>sign up</Text>
            </Text>
          </ImageBackground>

          {renderCountryModal()}
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,

    // justifyContent: "center"
  },
});
