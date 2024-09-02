import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const data = {
  QAEssentials: [
    {
      title: 'QA Essentials',
      description: 'This comprehensive Software Quality Assurance (SQA) course equips students with the essential skills and knowledge needed to ensure the delivery of high-quality software products. Covering the entire software development lifecycle, from planning to release, participants will gain expertise in testing methodologies, automation, and quality assurance practices.',
      image: 'path_to_qa_image.png',
      teacher: 'Faizan Mazher'
    }
  ]
};

const QualityAssurance = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Quality Assurance Courses and Materials</Text>
      
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
    backgroundColor: '#f4f6f9'
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 30,
    color: '#343a40',
    textAlign: 'center'
  },
  section: {
    marginBottom: 40
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#495057'
  },
  item: {
    marginBottom: 25,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#212529'
  },
  itemDescription: {
    fontSize: 18,
    color: '#6c757d',
    marginVertical: 15
  },
  itemImage: {
    width: '100%',
    height: 220,
    marginVertical: 15,
    borderRadius: 12,
    resizeMode: 'cover'
  },
  itemTeacher: {
    fontSize: 18,
    color: '#adb5bd',
    fontStyle: 'italic'
  }
});

export default QualityAssurance;
