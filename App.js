import React from 'react'
import { StyleSheet, Text, View, StatusBar, LogBox } from 'react-native'
import Router from './src/router'

const App = () => {
  LogBox.ignoreAllLogs()
  return (
 
        <Router/>
  )
}

export default App

const styles = StyleSheet.create({})