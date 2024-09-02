import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://4d92e1cd-c379-4c3c-bcee-23beeec5310d.mock.pstmn.io'
        );
        setData(response.data); 
        setLoading(false); 
      } catch (error) {
        setError(error);
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []); 

  if (loading) return <Text style={styles.loading}>Loading...</Text>;
  if (error) return <Text style={styles.error}>Error: {error.message}</Text>; 

  if (!data) return null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.course.title}</Text>
        <Text style={styles.description}>{data.course.description}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.subtitle}>Instructor:</Text>
        <Text style={styles.instructor}>{data.course.instructor}</Text>
        <Text style={styles.subtitle}>Duration:</Text>
        <Text style={styles.duration}>{data.course.duration}</Text>
      </View>

      {data.course.modules.map((module: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; lessons: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; duration: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }[]; }, index: React.Key | null | undefined) => (
        <View key={index} style={styles.module}>
          <Text style={styles.moduleTitle}>{module.title}</Text>
          <Text style={styles.moduleDescription}>{module.description}</Text>
          {module.lessons.map((lesson: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; duration: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, lessonIndex: React.Key | null | undefined) => (
            <View key={lessonIndex} style={styles.lesson}>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
              <Text style={styles.lessonDuration}>Duration: {lesson.duration}</Text>
              <Text style={styles.lessonContent}>{lesson.content}</Text>
            </View>
          ))}
        </View>
      ))}

      <View style={styles.resourcesSection}>
        <Text style={styles.resourcesTitle}>Resources:</Text>
        {data.course.resources.map((resource: { type: string; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; link: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
          <View key={index} style={styles.resource}>
            <Text style={styles.resourceType}>{resource.type.toUpperCase()}</Text>
            <Text style={styles.resourceTitle}>{resource.title}</Text>
            <Text style={styles.resourceLink}>{resource.link}</Text>
          </View>
        ))}
      </View>

      <View style={styles.requirementsSection}>
        <Text style={styles.requirementsTitle}>Requirements:</Text>
        {data.course.requirements.map((req: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
          <Text key={index} style={styles.requirement}>{req}</Text>
        ))}
      </View>

      <View style={styles.assessmentSection}>
        <Text style={styles.assessmentTitle}>Assessment:</Text>
        <Text style={styles.assessmentDescription}>{data.course.assessment.description}</Text>
        <Text style={styles.assessmentWeight}>Weight: {data.course.assessment.weight}</Text>
      </View>

      <View style={styles.certificationSection}>
        <Text style={styles.certificationTitle}>Certification:</Text>
        <Text style={styles.certificationDescription}>{data.course.certification.description}</Text>
        <Text style={styles.certificationRequirements}>Requirements: {data.course.certification.requirements}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f2f5',
  },
  header: {
    backgroundColor: '#4a90e2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 8,
  },
  details: {
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  instructor: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 12,
  },
  duration: {
    fontSize: 16,
    color: '#555555',
  },
  module: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  moduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  moduleDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 12,
  },
  lesson: {
    marginBottom: 16,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  lessonDuration: {
    fontSize: 14,
    color: '#888888',
  },
  lessonContent: {
    fontSize: 14,
    color: '#444444',
    marginTop: 4,
  },
  resourcesSection: {
    marginBottom: 24,
  },
  resourcesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  resource: {
    marginBottom: 12,
  },
  resourceType: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888888',
  },
  resourceTitle: {
    fontSize: 16,
    color: '#333333',
  },
  resourceLink: {
    fontSize: 14,
    color: '#007bff',
  },
  requirementsSection: {
    marginBottom: 24,
  },
  requirementsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  requirement: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 4,
  },
  assessmentSection: {
    marginBottom: 24,
  },
  assessmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  assessmentDescription: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 4,
  },
  assessmentWeight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  certificationSection: {
    marginBottom: 24,
  },
  certificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  certificationDescription: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 4,
  },
  certificationRequirements: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  loading: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    color: '#4a90e2',
  },
  error: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});
