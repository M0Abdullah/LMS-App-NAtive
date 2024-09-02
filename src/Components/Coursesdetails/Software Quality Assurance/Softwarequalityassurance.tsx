import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Softwaredata from '../../../Store/Coursesdata/Softwarequalityassurancedata'
export default function Softwarequalityassurance() {
  return (
    <View style={style.container} >
    <Softwaredata/>
    </View>
  )
}
const style =StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'white'
  }
})