import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Programing from '../../../Store/Coursesdata/Programmingfundamentaldata'
export default function Programmingfundamental() {
  return (
    <View style={style.container} >
<Programing/>
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