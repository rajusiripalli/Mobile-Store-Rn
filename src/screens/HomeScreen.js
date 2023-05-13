import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Platform,
  Button,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Shadow} from 'react-native-shadow-2';
import {TextInput} from 'react-native-gesture-handler';
import BannerCarousel from '../components/BannerCarousel';
import Categories from '../components/Categories';
import ExclusiveOfferBanner from '../components/ExclusiveOfferBanner';
import BestSellers from '../components/BestSellers';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    requestPermissions();
  }, []);
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

  const onOpenMapModal = useCallback(() => {
    setSelectLodModal(false);
    setTimeout(() => {
      setMapModal(false);
    }, 200);
  }, []);

  return (
    <>
      <SafeAreaView style={{backgroundColor: COLORS.White}} />
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.White} barStyle="dark-content" />
        <View style={styles.container}>
          {/* header profile container */}
          <View style={styles.prflcontainer}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                style={{marginTop: SIZES.base - 3}}
                name="map-marker-radius"
                size={24}
                color={COLORS.dark}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('userlocselector')}
                style={{marginLeft: SIZES.base}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{...FONTS.h3, color: COLORS.dark}}>Vizag</Text>
                  <MaterialIcons
                    name={'keyboard-arrow-down'}
                    size={22}
                    color={COLORS.dark}
                  />
                </View>

                <Text
                  style={{
                    ...FONTS.h5,
                    color: COLORS.darkgrey,
                    marginTop: -SIZES.base,
                  }}>
                  Rushikonda
                </Text>
              </TouchableOpacity>
            </View>
            {/* //demo user profile photo */}
            <View style={styles.ppicplaceholder}>
              <FontAwesome
                size={18}
                color={COLORS.Black}
                name="user"
                style={{opacity: 0.5}}
              />
            </View>
          </View>

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
                //marginTop: SIZES.cmnsize,
                height: '100%',
                marginLeft: SIZES.base,
              }}
              placeholderTextColor={COLORS.grey}
              placeholderStyle={{marginTop: 260}}
            />
          </View>
          <View style={{height: SIZES.base}} />
          {/* search container */}
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            {/* Banner carousel */}
            <BannerCarousel />

            {/* categories */}
            <Text style={styles.titletxt}>Category</Text>
            <View style={{marginLeft: SIZES.base}}>
              <Categories />
            </View>

            {/* exclusive offer */}
            <ExclusiveOfferBanner />

            {/* Best Sellers */}
            <View style={styles.bstsllrstxtcontr}>
              <Text style={[styles.titletxt, {marginLeft: 10}]}>
                Best Seller
              </Text>
              <Text style={{...FONTS.h5, marginTop: 3}}>View All</Text>
            </View>
            {/* best seller items row */}
            <BestSellers />

            <View style={{height: SIZES.margin}} />
          </ScrollView>
        </View>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: COLORS.White}} />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  prflcontainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    margin: SIZES.margin,
  },
  ppicplaceholder: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchcontainer: {
    flexDirection: 'row',
    height: 45,
    marginHorizontal: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 0.5,
    borderRadius: SIZES.h3,
    backgroundColor: '#fff',
    paddingLeft: SIZES.cmnsize,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  titletxt: {
    ...FONTS.h3,
    color: COLORS.dark,
    marginLeft: 20,
    marginVertical: SIZES.cmnsize,
  },
  bstsllrstxtcontr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
