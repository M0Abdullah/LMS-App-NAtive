import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';

const Dropdown = ({ onSelect, navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Please choose an option');
  const [isExpanded, setIsExpanded] = useState(false);

  const options = [
    { value: '1', label: 'Programming Fundamentals' },
    { value: '2', label: 'Software Quality Assurance' },
    { value: '3', label: 'Graphic Designing' },
    { value: '4', label: 'Frontend' },
    { value: '5', label: 'Backend' },
  ];

  const handleSelect = option => {
    setSelectedOption(option);
    // onSelect(option);
    setIsOpen(false);

    switch(option) {
      case 'Programming Fundamentals':
        navigation.navigate('Programmingfundamental');
        break;
      case 'Frontend':
        navigation.navigate('Frontend');
        break;
      case 'Backend':
        navigation.navigate('Backend');
        break;
      case 'Graphic Designing':
        navigation.navigate('Graphicdesign');
        break;
      case 'Software Quality Assurance':
        navigation.navigate('Softwarequalityassurance');
        break;
      default:
        console.log('No matching screen for option:', option); 
        break;
    }
  };

  const handleShowOptionForCourses = () => {
    setIsOpen(true);
  };

  const handleExpandAll = () => {
    setIsExpanded(!isExpanded);
  };

  const additionalOptions = {
    Backend: [
      '1: C# for Unity Game Development',
      '2: Python for Beginner',
      '3: Django',
    ],
    Frontend: [
      '1: React Native',
      '2: React',
      '3: Reactjs Task',
      '4: Javascript Projects',
      '5: JavaScript',
      '6: HTML and CSS',
    ],
    'Programming Fundamentals': [
      '1: Algorithm Learning for Beginners',
    ],
    'Graphic Designing': [
      '1: Figma',
      '2: Adobe Photoshop',
      '3: Adobe Illustrator',
    ],
    'Software Quality Assurance': [
      '1: QA Essentials',
    ],
  };

  return (
    <ScrollView style ={styles.scroll} >

      <Text style={styles.lms}>LMS Enigmatix</Text>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.dropdownText}>{selectedOption}</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.training} onPress={handleShowOptionForCourses}>
          <Text style={{ color: 'blue', fontSize: 25 }}>>>Training</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.training} onPress={handleExpandAll}>
          <Text style={{ color: 'blue', fontSize: 20 }}>
            {isExpanded ? 'CollapseAll' : 'ExpandAll'}
          </Text>
        </TouchableOpacity>
      </View>

      {isOpen && (
        <View style={styles.dropdownList}>
          {options.map(option => (
            <TouchableOpacity
              key={option.value}
              style={styles.option}
              onPress={() => handleSelect(option.label)}>
              <Text style={styles.optionText}>{option.label}</Text>
              {isExpanded && additionalOptions[option.label] && (
                <View style={styles.subOptions}>
                  {additionalOptions[option.label].map((subOption, index) => (
                    <Text key={index} style={styles.subOptionText}>
                      {subOption}
                    </Text>
                  ))}
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
</ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll:{
flexGrow:1,

width: '100%',
height: '100%',
backgroundColor: 'white'

  },
  lms: {
    color: 'black',
    fontSize: 30,
    padding:10
  },
  dropdownButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    backgroundColor: 'white',

  },
  dropdownText: {
    fontSize: 20,
    color: 'black',
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    maxHeight: '100%',
    marginTop: 5,
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  subOptions: {
    marginLeft: 20,
  },
  subOptionText: {
    fontSize: 14,
    color: 'blue',
  },
  training: {
    padding: 20,
  },
});

export default Dropdown;
