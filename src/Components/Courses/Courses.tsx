import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import React from 'react';
import react from '../../Assets/react.jpeg';
import html from '../../Assets/html.jpeg';
import js from '../../Assets/JS.png';

export default function Courses({ navigation }) {

  const handleReact = () => {
    navigation.navigate('React');
  };

  const handleJS = () => {
    navigation.navigate('JavaScript');
  };

  const handleHtmlCss = () => {
    navigation.navigate('HtmlCss');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Courses</Text>
      <Text style={styles.subtitle}>Courses Overview and details</Text>
      <TouchableOpacity style={styles.card} onPress={handleReact}>
        <Image source={react} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.courseTitle}>React JS</Text>
          <Text style={styles.courseSubtitle}>Frontend</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handleJS}>
        <Image source={js} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.courseTitle}>JavaScript</Text>
          <Text style={styles.courseSubtitle}>Frontend</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handleHtmlCss}>
        <Image source={html} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.courseTitle}>HTML and CSS</Text>
          <Text style={styles.courseSubtitle}>Frontend</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  courseSubtitle: {
    fontSize: 15,
    color: 'gray',
  },
});
