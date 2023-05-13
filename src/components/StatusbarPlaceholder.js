import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar,  Platform, SafeAreaView} from "react-native";


const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const StatusbarPlaceholder = ({bgcolor}) => {
  return (
    <View style={{
      width: "100%",
      height: STATUS_BAR_HEIGHT,
      backgroundColor: bgcolor
  }}>
      <StatusBar
          backgroundColor={bgcolor}
          barStyle="dark-content"
      />
  </View>
  )
}

export default StatusbarPlaceholder




