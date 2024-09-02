import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const data = {
  Figma: [
    {
      title: 'Figma',
      description: 'Develop a solid understanding of Figma\'s capabilities, including creating new files, designing on a grid, importing and cropping photos, working with vector graphics and colors, creating reusable components, building clickable prototypes, exporting assets, sharing files, utilizing auto layout, creating animations, and much more.',
      teacher: 'Noman Ahmad'
    }
  ],
  AdobePhotoshop: [
    { title: 'Adobe Photoshop', teacher: 'Faizan Mazher' }
  ],
  AdobeIllustrator: [
    { title: 'Adobe Illustrator', teacher: 'Faizan Mazher' }
  ]
};

const GraphicDesign = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Graphic Design Courses and Materials</Text>
      
      {Object.keys(data).map(category => (
        <View key={category} style={styles.section}>
          <Text style={styles.categoryTitle}>{category.replace(/([A-Z])/g, ' $1').trim()}</Text>
          {data[category].map((item: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; teacher: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {item.description && <Text style={styles.itemDescription}>{item.description}</Text>}
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
    backgroundColor: '#f4f4f4'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  section: {
    marginBottom: 20
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555'
  },
  item: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  itemDescription: {
    fontSize: 16,
    color: '#666'
  },
  itemTeacher: {
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic'
  }
});

export default GraphicDesign;
