import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, dummyData} from '../constants';

const BannerCarousel = () => {
  ///flat carousel data
  const carousedata = dummyData.carouseldata;

  const onViewChangeRef = React.useRef(({viewableItems, changed}) => {
    if (viewableItems[0].index == 1) {
      // setWalkthrouhAnimate2(true)
    }
  });

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {carousedata.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`dot-${index}`}
              style={{
                borderRadius: 6 / 2,
                marginHorizontal: 6,
                width: 6,
                height: 6,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderFooter() {
    return (
      <View
        style={{
          // height: height * 0.2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Dots />
      </View>
    );
  }

  //slide animation
  const row1FlatListRef = React.useRef();

  let currentSlide = 0;
  let intervalTime = 4000;

  const goToNextPage = () => {
    if (row1FlatListRef.current != null) {
      if (currentSlide >= carousedata.length - 1) currentSlide = -1;
      row1FlatListRef.current.scrollToIndex({
        index: ++currentSlide,
        animated: true,
      });
    }
  };

  React.useEffect(() => {
    setInterval(goToNextPage, intervalTime);
  }, []);

  return (
    <View style={{width: SIZES.width, height: 190, marginVertical: SIZES.base}}>
      <Animated.FlatList
        ref={row1FlatListRef}
        data={carousedata}
        keyExtractor={item => item.id}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewChangeRef.current}
        scrollEventThrottle={16}
        scrollEnabled={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: SIZES.width,
                justifyContent: 'center',
                height: 180,
              }}>
              <View
                style={{
                  // flex: 0.5,
                  height: 168,
                  // alignItems: 'center',
                  justifyContent: 'flex-start',
                  //paddingHorizontal: 24,
                  marginHorizontal: 10,
                  backgroundColor: 'grey',
                  borderRadius: 15,
                }}>
                <ImageBackground
                  source={{uri: item.url}}
                  imageStyle={{borderRadius: 15}}
                  resizeMode="cover"
                  style={{
                    height: '100%',

                    overflow: 'hidden',
                  }}
                />
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default BannerCarousel;

const styles = StyleSheet.create({});
