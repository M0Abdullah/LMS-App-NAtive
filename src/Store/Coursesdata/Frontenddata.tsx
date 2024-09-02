import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

const data = {
  ReactNative: [
    { title: 'React Native', description: 'React Native is an open-source framework developed by Facebook that allows developers to build mobile applications using JavaScript and React.' },
    { title: 'Official Website', link: 'https://reactnative.dev/' },
    { title: 'Official Getting Started', link: 'https://reactnative.dev/docs/getting-started' },
    { title: 'Learn React Native by CodeAcademy', link: 'https://www.codecademy.com/learn/learn-react-native' },
    { title: 'Teacher: Muhammad Shahryar' }
  ],
  React: [
    { title: 'React', description: 'React lets you build user interfaces out of individual pieces called components.' },
    { title: 'Teacher: Muhammad Shahryar' }
  ],
  ReactjsTask: [
    { title: 'Reactjs Task', description: 'This course includes Reactjs Basic Task.' },
    { title: 'Teacher: Fahad Khan' }
  ],
  JavascriptProjects: [
    { title: 'Javascript Projects', description: 'Projects related to JavaScript.' },
    { title: 'Teacher: Talib Hussain' }
  ],
  JavaScript: [
    { title: 'JavaScript', description: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and much more.' },
    { title: 'Teacher: Ahmad Faraz' },
    { title: 'Teacher: Muhammad Shahryar' }
  ],
  HTMLandCSS: [
    { title: 'HTML and CSS', description: 'HTML is used to structure web content, and CSS is used to apply styling.' },
    { title: 'Teacher: Fahad Khan' }
  ]
};

const Frontend = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Frontend Courses and Materials</Text>
      
      {Object.keys(data).map(category => (
        <View key={category} style={styles.section}>
          <Text style={styles.categoryTitle}>{category.replace(/([A-Z])/g, ' $1').trim()}</Text>
          {data[category].map((item: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; link: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {item.description && <Text style={styles.itemDescription}>{item.description}</Text>}
              {item.link && (
                <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                  <Text style={styles.itemLink}>{item.link}</Text>
                </TouchableOpacity>
              )}
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
    marginBottom: 15,
    color: '#343a40'
  },
  section: {
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    paddingBottom: 10
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#007bff',
    marginBottom: 10
  },
  item: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#212529'
  },
  itemDescription: {
    fontSize: 16,
    color: '#6c757d',
    marginTop: 5
  },
  itemLink: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
    marginTop: 5
  }
});

export default Frontend;
