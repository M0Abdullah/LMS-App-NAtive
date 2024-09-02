import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GraphicDesign from '../../../Store/Coursesdata/Graphicdesigndata'
export default function Graphicdesign() {
  return (
    <View style={style.container}>
     <GraphicDesign/>
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