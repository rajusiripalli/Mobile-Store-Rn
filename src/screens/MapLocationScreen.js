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
import React, {useEffect, useState, useRef, useCallback} from 'react';
import {COLORS, FONTS, SIZES} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DefaultHeader from '../components/DefaultHeader';
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT, Circle, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextButton } from '../components';



const MY_KEY = 'AIzaSyAIOpj7O6Cx3LAfsmH3nbr5MfB-_UlmZTI';

const MapLocationScreen = ({navigation, route}) => {
    const {currentLoc} = route.params;
    const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;
    const ASPECT_RATIO = SIZES.width / SIZES.height;
    const LATITUDE_DELTA = 0.005;
    const LONGITUDE_DELTA = 0.005;
    const gplaceRef = useRef();

    const [locregion, setLocRegion] = useState(currentLoc);
    const [currentAddress, setCurrentAddress] = useState('');
    const [isMapReady, setMapReady] = useState(false);


  console.log("navigation pass current location ==> ", currentLoc)
    useEffect(() => {
      getLocation();
    }, [])



    const getLocation = () => {
      requestPermissions();
      Geolocation.getCurrentPosition(
        position => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          };
          gplaceRef.current.animateToRegion(region, 2000);
          setLocRegion(region);
          getAddress(region.latitude, region.longitude);
          
          console.log(
      
            "new current coords---> ",region
          );
        },
        error => {
          console.log('error', error);
          setErrorMessage(error.message);
          setLoading(false);
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
  
    const getAddress = async (lat, lng) => {
      console.log(MY_KEY, lat, lng);
      Geocoder.fallbackToGoogle(MY_KEY);
      let res = await Geocoder.geocodePosition({lat, lng});
      let addr = res[0].formattedAddress;
      setCurrentAddress(addr);
      console.log('current Addresss ===>  ', addr);
    };

    const onMapReady = useCallback(() => {
      setMapReady(true);
      }, [gplaceRef, setMapReady]);


    const dragSelectLocation = geocords => {
      console.log('dragcords ', geocords);
      
      const region = {
        latitude: geocords.latitude,
        longitude: geocords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      gplaceRef.current.animateToRegion(region, 1000);
      setLocRegion(region);
      getAddress(region.latitude, region.longitude);
      
    };

  // Update state on region change

  return (
    <>
    <SafeAreaView style={{backgroundColor: COLORS.White}} />
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.White} />
    <View style={styles.container}>
      <DefaultHeader title={"Confirm your location"} Navigation={navigation} />
      {/* map view */}
      <View style={{flex: 1,backgroundColor: COLORS.lightGrey}}>
            {/* current loc button */}
                {locregion && <MapView
                ref={gplaceRef}
                provider={defaultProvider}
                //style={isMapReady ? styles.map : {}}
                style={{...StyleSheet.absoluteFillObject}}
                showsMyLocationButton={true}
                zoomEnabled={true}
                zoomControlEnabled={true}
                showsUserLocation={true}
                onMapReady={onMapReady}
                initialRegion={locregion}
                onPress={event => {
                  console.log(
                    'onpress location ',
                    event.nativeEvent.coordinate,
                  );
                  dragSelectLocation(event.nativeEvent.coordinate);
                }}
                //onRegionChangeComplete={onRegionChange}

          > 

              <Marker
                      coordinate={{
                        latitude: locregion.latitude,
                        longitude: locregion.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                      }}
                      title={'Your Location'}
                      draggable
                      onDragEnd={e => {
                        // console.log('dragEnd', e.nativeEvent.coordinate);
                        dragSelectLocation(e.nativeEvent.coordinate);
                      }}
                    />
                    <Circle
                      center={{
                        latitude: locregion.latitude,
                        longitude: locregion.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                      }}
                      radius={100}
                      strokeWidth={2}
                      strokeColor={'#0582D5'}
                      fillColor={'rgba(39, 221, 245, 0.13)'}
                    />
          
          </MapView>}
      </View>
       {/* map view */}
      <View style={{
        flex: 0.3, 
        borderRadius: SIZES.btnradius, 
    
       backgroundColor: SIZES.White
        
        }}>
      <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: SIZES.margin,
              marginTop: SIZES.margin,
              marginBottom: SIZES.radius,
              
            }}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome5
                style={{marginTop: SIZES.cmnsize}}
                name="map-marker-alt"
                color={COLORS.support2}
                size={26}
              />
              <View style={{marginLeft: SIZES.base, }}>
                <Text style={[styles.titletxt, {color: COLORS.dark}]}>
                  {currentAddress && currentAddress.split(",")[0]}
                </Text>
                <Text
                  numberOfLines={2}
                  style={{width: SIZES.width - 180, ...FONTS.h5,}}>
                  {currentAddress && currentAddress}
                </Text>
              </View>
            </View>
            <Text style={styles.chngetxt}>Change Location</Text>
          </View>    

          <TextButton
                label="Confirm Location"
                contentContainerStyle={{
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.primary,
                  height: 50,
                  marginHorizontal: SIZES.margin,
                  borderRadius: SIZES.btnradius,
                 
                }}
                labelStyle={{
                  ...FONTS.h3,
                }}
                onPress={() => navigation.navigate('homebottomtab')}
              />
             

      </View>

</View>
</SafeAreaView>
      <SafeAreaView style={{backgroundColor: COLORS.White}} />
    </>
  )
}

export default MapLocationScreen

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White
    },
    map: {
      ...StyleSheet.absoluteFillObject,
  
    },
    titletxt: {
      ...FONTS.h4,
      color: COLORS.dark,
    },
    chngetxt: {
      ...FONTS.h5,
      color: COLORS.support3,
      textDecorationLine: "underline",
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: COLORS.support3
      
    },
    currentLocbtn:{
      zIndex: 1,
      backgroundColor: 'red',
      width: 40,
      height: 50,
      alignSelf: 'flex-reverse', 
      
      
    }
 
})