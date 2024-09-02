import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Frontenddata from '../../../Store/Coursesdata/Frontenddata.tsx';
export default function Frontend() {
  return (
    <View style={style.container}>
      <Frontenddata />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor:'white'
  },
});
