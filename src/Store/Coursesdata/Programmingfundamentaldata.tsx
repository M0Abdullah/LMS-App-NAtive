import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const data = {
  AlgorithmLearningForBeginners: [
    {
      title: 'Algorithm Learning for Beginners',
      description: 'Algorithm Learning for Beginners is an introductory course designed to provide students with a solid foundation in algorithms and problem-solving techniques. This course is suitable for individuals with little to no prior programming experience and aims to develop their understanding of basic algorithms and their applications. Through hands-on exercises and practical examples, students will learn how to analyze and design algorithms to solve various computational problems efficiently.',
      image: 'path_to_algorithm_image.png',
      teacher: 'Faizan Mazher'
    }
  ]
};

const Algorithms = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Algorithm Courses and Materials</Text>
      
      {Object.keys(data).map(category => (
        <View key={category} style={styles.section}>
          <Text style={styles.categoryTitle}>{category.replace(/([A-Z])/g, ' $1').trim()}</Text>
          {data[category].map((item: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; image: any; teacher: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {item.description && <Text style={styles.itemDescription}>{item.description}</Text>}
              {item.image && <Image source={{ uri: item.image }} style={styles.itemImage} />}
              {item.teacher && <Text style={styles.itemTeacher}>Teacher: {item.teacher}</Text>}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
    textAlign: 'center'
  },
  section: {
    marginBottom: 30
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#495057'
  },
  item: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529'
  },
  itemDescription: {
    fontSize: 16,
    color: '#6c757d',
    marginVertical: 10
  },
  itemImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    resizeMode: 'cover'
  },
  itemTeacher: {
    fontSize: 16,
    color: '#adb5bd',
    fontStyle: 'italic'
  }
});

export default Algorithms;
