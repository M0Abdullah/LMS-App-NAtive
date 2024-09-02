import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Image, TouchableOpacity } from 'react-native';

const data = {
  CSharpForUnity: [
    { title: 'C# for Unity Game Development', description: 'Learn how to use C# for developing games in Unity.' },
    { title: 'Teacher: Faizan Mazher' }
  ],
  PythonForBeginner: [
    { title: 'Python for Beginner', description: 'This course introduces Python and provides examples to work on.', image: 'path_to_python_image.png' },
    { title: 'Teacher: Faizan Mazher' }
  ],
  Django: [
    { title: 'Django', description: 'In this course, you will learn how to build Django-based web applications suitable for use by end users. You will learn about cookies, sessions, and authentication processes in Django. You will build navigation into your applications and explore ways to easily improve the look and feel of Django applications.', lead: 'Hamid Mustafa' }
  ]
};

const Backenddata = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Backend Courses and Materials</Text>
      
      {Object.keys(data).map(category => (
        <View key={category} style={styles.section}>
          <Text style={styles.categoryTitle}>{category.replace(/([A-Z])/g, ' $1').trim()}</Text>
          {data[category].map((item: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; image: any; link: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; lead: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {item.description && <Text style={styles.itemDescription}>{item.description}</Text>}
              {item.image && <Image source={{ uri: item.image }} style={styles.itemImage} />}
              {item.link && (
                <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                  <Text style={styles.itemLink}>{item.link}</Text>
                </TouchableOpacity>
              )}
              {item.lead && <Text style={styles.itemLead}>Lead: {item.lead}</Text>}
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
    backgroundColor: '#f5f5f5' // Light grey background for better contrast
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333' // Dark grey color for the header
  },
  section: {
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light border color for separation
    paddingBottom: 10
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    color: '#555' // Slightly lighter grey for category titles
  },
  item: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff', // White background for items
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2 // Shadow effect for Android
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222' // Dark color for item titles
  },
  itemDescription: {
    fontSize: 16,
    color: '#666', // Medium grey color for descriptions
    marginVertical: 5
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginVertical: 10
  },
  itemLink: {
    fontSize: 16,
    color: '#007bff', // Bootstrap blue for links
    textDecorationLine: 'underline'
  },
  itemLead: {
    fontSize: 16,
    color: '#888', // Light grey color for lead information
    fontStyle: 'italic'
  }
});

export default Backenddata;
