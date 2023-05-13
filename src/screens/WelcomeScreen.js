import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  BackHandler, 
  Alert
} from 'react-native';
import React , {useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
const WelcomeScreen = ({navigation}) => {


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const backAction = () => {
    if (navigation.isFocused()) {
      Alert.alert('Hold on!', 'Are you sure you want to exit app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f7f0ef" />

      <ImageBackground
        source={require('../assets/images/screenbg.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={{flex: 0.6}}>
          <ImageBackground
            style={{flex: 1}}
            source={require('../assets/images/Vector-1.png')}
            resizeMode="cover">
            <Image
              resizeMode="contain"
              style={{
                width: 230,
                height: 350,
                position: 'absolute',
                top: 88,
                left: 58,
                transform: [{rotate: '2deg'}],
              }}
              source={require('../assets/images/grocerycustomer.png')}
            />
          </ImageBackground>
        </View>

      </ImageBackground>
      <Image
        source={require('../assets/images/strawberryicon.png')}
        style={{position: 'absolute', top: 40, left: 45}}
      />
      <Image
        source={require('../assets/images/grapes.png')}
        style={{position: 'absolute', top: 350, left: 25}}
      />
      <Image
        source={require('../assets/images/banana.png')}
        style={{position: 'absolute', top: 450, left: 235}}
      />
      <View
        style={{
          // height: 100,
          width: 150,
          backgroundColor: '#eef0f1',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
          borderRadius: 10,
          position: 'absolute',
          top: 300,
          left: 200,
        }}>
        <Image
          source={require('../assets/images/edumodal.png')}
          style={{
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
            alignSelf: 'center',
          }}
        />
        <View>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            Delivery Complete
          </Text>
          <Text style={{fontSize: 9, fontWeight: 'normal'}}>
            Fastest Delivery at home
          </Text>
          <Image
            source={require('../assets/images/5stars.png')}
            style={{height: 20, width: 90}}
          />
        </View>
      </View>
      <View
        style={{
          // height: 100,
          width: 125,
          backgroundColor: '#eef0f1',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          borderRadius: 10,
          position: 'absolute',
          top: 60,
          left: 200,
        }}>
        <Image
          source={require('../assets/images/greenclock.png')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            alignSelf: 'center',
          }}
        />
        <View>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
            Delivery Complete
          </Text>
          <Text style={{fontSize: 10, fontWeight: 'bold', textAlign: 'center'}}>
            30 mins
          </Text>
        </View>
      </View>
      <View
        style={{
          // height: 100,
          width: 155,
          backgroundColor: '#eef0f1',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          borderRadius: 10,
          position: 'absolute',
          top: 220,
          left: 5,
        }}>
        <Image
          source={require('../assets/images/deliveryrightclick.png')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 30 / 2,
            alignSelf: 'center',
          }}
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            Delivery Complete
          </Text>
        </View>
      </View>
      <Text style={{fontSize: 28,color:'#000', fontWeight: 'bold', position:"absolute",  top: 445,
          left: 25, }}>Welcome !</Text>
             <Text style={{fontSize: 20,width: 180, marginTop: 25, fontWeight: '600', position:"absolute",  top: 465,
          left: 25, }}>Find Your Near By Grocery Store !</Text>
             <Text style={{fontSize: 14,width: 180, marginTop: 30, fontWeight: '500', position:"absolute",  top: 525,
          left: 25, }}>We provide better service for you with our <Text style={{color: '#ec8e16', fontWeight: 'bold'}}>Grocery</Text> app</Text>
                 
          <View style={{flexDirection:'row',  position:"absolute",  top: 655, left: 25}}>
            <View style={{height: 15, width:15, borderRadius: 15/2, backgroundColor: '#c6c6c6'}} />
            <View style={{height: 15, width:15, borderRadius: 15/2, backgroundColor: '#89a3a8', marginLeft: 5,}} />
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={{width: 70, height: 70, borderRadius: 70/2, backgroundColor: '#89a3a8',   position:"absolute",  top: 625, left: 260, justifyContent:"center", alignItems: 'center'}}>
          <AntDesign name="arrowright" size={32} color={'#fff'} />

          </TouchableOpacity>
       

    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,

    // justifyContent: "center"
  },
});
