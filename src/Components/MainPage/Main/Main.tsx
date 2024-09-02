import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Rocket from '../../../Assets/download.png';

const {width, height} = Dimensions.get('window');

export default function Main({navigation}) {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Image source={Rocket} style={styles.image} />
      <Text style={styles.text}>InstaMobile</Text>
      <Text style={styles.paragraph}>
        Use this codebase to start a new Firebase mobile app in minutes
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={handleSignup}>
        <Text style={styles.buttonText1}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  image: {
    width: width * 0.5,
    height: height * 0.25,
    marginBottom: height * 0.05,
  },
  text: {
    color: '#0284c7',
    fontSize: width * 0.08,
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  paragraph: {
    fontSize: width * 0.045,
    textAlign: 'center',
    marginBottom: height * 0.04,
    paddingHorizontal: '10%',
  },
  button: {
    backgroundColor: '#0284c7',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.3,
    marginBottom: height * 0.02,
    borderRadius: 23,
  },
  button1: {
    borderWidth: 1,
    borderColor: '#0284c7',
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.3,
    borderRadius: 23,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.05,
  },
  buttonText1: {
    color: '#0284c7',
    textAlign: 'center',
    fontSize: width * 0.05,
  },
});
