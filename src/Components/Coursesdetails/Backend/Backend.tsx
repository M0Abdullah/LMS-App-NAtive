import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Backenddata from '../../../Store/Coursesdata/Backenddata'
export default function Backend() {
  return (
    <View style={style.container} >
     <Backenddata/>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'white'
  }
})