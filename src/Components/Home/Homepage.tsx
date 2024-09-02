import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {Dimensions} from 'react-native';

export default function Homepage({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  const handleNavigateToCourse = (courseName: string) => {
    navigation.navigate(courseName);
  };

  const onChangeSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
    setError('');
  };

  const onSearchPress = () => {
    switch (true) {
      case ['html', 'css', 'javascript', 'js', 'react', 'frontend'].includes(
        searchQuery,
      ):
        handleNavigateToCourse('Frontend');
        break;
      case ['backend', 'python', 'django'].includes(searchQuery):
        handleNavigateToCourse('Backend');
        break;
      case ['softwarequalityassurance'].includes(searchQuery):
        handleNavigateToCourse('Softwarequalityassurance');
        break;
      case ['programmingfundamental', 'algorithm'].includes(searchQuery):
        handleNavigateToCourse('Programmingfundamental');
        break;
      case ['graphicdesign', 'figma', 'adobephotoshop'].includes(searchQuery):
        handleNavigateToCourse('Graphicdesign');
        break;
      default:
        setError('Please enter a valid course name.');
        setTimeout(() => {
          setError('');
        }, 3000);
    }
    setTimeout(() => {
      setSearchQuery('');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enigmatix LMS</Text>

      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => handleNavigateToCourse('Lmscourses')}>
          <Text style={styles.navText}>Courses/</Text>
        </TouchableOpacity>
        <Text style={styles.navText}>Enigmatix/</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Searchbar
          placeholder="Search Here"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />

        <TouchableOpacity style={styles.searchButton} onPress={onSearchPress}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: width * 0.03, // Responsive padding
  },
  title: {
    fontSize: width * 0.08, // Responsive font size
    color: '#0284c7',
    marginVertical: height * 0.03, // Responsive margin
    fontWeight: 'bold',
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.02, // Responsive margin
  },
  navText: {
    color: '#0284c7',
    fontSize: width * 0.06, // Responsive font size
  },
  searchBar: {
    height: height * 0.07, // Responsive height
    borderRadius: 10,
    width: width * 0.7, // Responsive width
  },
  searchButton: {
    marginLeft: width * 0.03, // Responsive margin
    paddingVertical: height * 0.02, // Responsive padding
    paddingHorizontal: width * 0.05, // Responsive padding
    borderRadius: 10,
    backgroundColor: '#0284c7',
  },
  searchButtonText: {
    color: 'white',
    fontSize: width * 0.04,
  },
  errorText: {
    color: 'red',
    marginTop: height * 0.02,
    fontSize: width * 0.04,
    textAlign: 'center',
  },
});
