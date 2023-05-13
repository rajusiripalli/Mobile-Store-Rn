import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Platform,
  PermissionsAndroid
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import DefaultHeader from '../components/DefaultHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import ListingTitle from '../components/ListingTitle';
import HrLine from '../components/HrLine';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import Geolocation from '@react-native-community/geolocation';

const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = 0.005;

const UserLocationSelector = ({navigation}) => {
  const [locregion, setLocRegion] = useState('')
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  useEffect(() => {
    getLocation();
  }, [])

  useEffect(()=> {
    console.log("set Loc region ===> ", locregion)
  },[locregion])



  const getLocation = () => {
    console.log("getlocation function called")
    requestPermissions();
    Geolocation.getCurrentPosition(
      position => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        setLocRegion(region);
        console.log(
          "new current coords---> ",region
        );
      },
      error => {
        console.log('error', error);

      },
      {enableHighAccuracy: false, timeout: 200000, maximumAge: 5000},
    );
  };
  const requestPermissions = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  };



  return (
    <>
      <SafeAreaView style={{backgroundColor: COLORS.White}} />
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.White} />
        <View style={styles.container}>
          <DefaultHeader title={'Select a location'} Navigation={navigation} />
          {/* search container */}
          <View style={styles.searchcontainer}>
            <MaterialIcons
              style={{
                marginLeft: SIZES.base,
                marginTop: Platform.OS === 'ios' ? SIZES.cmnsize : 0,
              }}
              name="search"
              size={20}
              color={COLORS.grey}
            />
            <TextInput
              placeholder="search"
              place
              style={{
                flex: 1,
                ...FONTS.h3,
                marginTop: SIZES.cmnsize,
                height: '100%',
                marginLeft: SIZES.base,
              }}
              placeholderTextColor={COLORS.grey}
            />
          </View>
          <View style={{height: SIZES.base}} />
          {/* search container */}

          {/* current loc selector container */}
          <TouchableOpacity
            onPress={() => locregion && navigation.navigate('maplocation', {currentLoc:locregion})}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: SIZES.margin,
              marginTop: SIZES.margin,
              marginBottom: SIZES.radius,
            }}>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons
                style={{alignSelf: 'center'}}
                name="my-location"
                color={COLORS.support2}
                size={22}
              />
              <View style={{marginLeft: SIZES.base}}>
                <Text style={[styles.titletxt, {color: COLORS.support2}]}>
                  Use Your Current Location
                </Text>
                <Text
                  numberOfLines={2}
                  style={[styles.titletxt, {width: SIZES.width - 120}]}>
                  Vizag, Rushikonda,
                </Text>
              </View>
            </View>
            <MaterialIcons
              style={{alignSelf: 'center'}}
              name="arrow-forward-ios"
              color={COLORS.dark}
              size={20}
            />
          </TouchableOpacity>

          {/* hr line */}
          <HrLine />

          {/* current loc select container */}
          <View style={{height: SIZES.h1}} />
          <ListingTitle title={'Saved Address'} />

          {/* Address List container */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: SIZES.margin,
              marginTop: SIZES.margin,
              marginBottom: SIZES.radius,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Octicons
                style={{alignSelf: 'center'}}
                name="home"
                color={COLORS.dark}
                size={22}
              />
              <View style={{marginLeft: SIZES.base}}>
                <Text style={[styles.titletxt]}>Home</Text>
                <Text
                  numberOfLines={2}
                  style={[styles.addresdesc, {width: SIZES.width - 120}]}>
                  14, lorem ipsum - CANADA
                </Text>
              </View>
            </View>
            <Menu
              visible={visible}
              anchor={
                <MaterialCommunityIcons
                  onPress={() => showMenu()}
                  style={{alignSelf: 'center', marginTop: SIZES.base}}
                  name="dots-vertical"
                  color={COLORS.dark}
                  size={22}
                />
              }
              onRequestClose={hideMenu}
              textStyle={{color: 'red'}}
              style={{
                height: 80,
                alignItems: 'center',
                paddingTop: SIZES.base,
              }}>
              <MenuItem
                onPress={hideMenu}
                style={{height: 20, marginVertical: SIZES.cmnsize}}>
                <Text style={{...FONTS.h4}}>Edit</Text>
              </MenuItem>
              <MenuItem
                onPress={hideMenu}
                style={{height: SIZES.margin, marginVertical: SIZES.cmnsize}}>
                <Text style={{...FONTS.h4}}>Delete</Text>
              </MenuItem>
            </Menu>
          </View>
          <HrLine />

          {/* Address List container */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: SIZES.margin,
              marginTop: SIZES.margin,
              marginBottom: SIZES.radius,
            }}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                style={{alignSelf: 'center'}}
                name="office-building-marker-outline"
                color={COLORS.dark}
                size={22}
              />
              <View style={{marginLeft: SIZES.base}}>
                <Text style={[styles.titletxt]}>Office</Text>
                <Text
                  numberOfLines={2}
                  style={[styles.addresdesc, {width: SIZES.width - 120}]}>
                  14, lorem ipsum - CANADA
                </Text>
              </View>
            </View>
            {/* <MaterialCommunityIcons style={{alignSelf:'center'}} name="dots-vertical" color={COLORS.dark} size={22}/> */}
            <Menu
              visible={false}
              anchor={
                <MaterialCommunityIcons
                  onPress={() => showMenu()}
                  style={{alignSelf: 'center', marginTop: SIZES.base}}
                  name="dots-vertical"
                  color={COLORS.dark}
                  size={22}
                />
              }
              onRequestClose={hideMenu}
              textStyle={{color: 'red'}}
              style={{
                height: 80,
                alignItems: 'center',
                paddingTop: SIZES.base,
              }}>
              <MenuItem
                onPress={hideMenu}
                style={{height: 20, marginVertical: SIZES.cmnsize}}>
                <Text style={{...FONTS.h4}}>Edit</Text>
              </MenuItem>
              <MenuItem
                onPress={hideMenu}
                style={{height: SIZES.margin, marginVertical: SIZES.cmnsize}}>
                <Text style={{...FONTS.h4}}>Delete</Text>
              </MenuItem>
            </Menu>
          </View>
          <HrLine />
        </View>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: COLORS.White}} />
    </>
  );
};

export default UserLocationSelector;

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.White,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  searchcontainer: {
    flexDirection: 'row',
    height: 45,
    marginHorizontal: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 0.5,
    borderRadius: SIZES.body5,
    backgroundColor: '#fff',
    paddingLeft: SIZES.cmnsize,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  titletxt: {
    ...FONTS.h4,
    color: COLORS.dark,
  },
  addresdesc: {
    ...FONTS.body4,
    color: COLORS.grey,
  },
});
