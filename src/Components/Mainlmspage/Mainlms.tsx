import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';
import { Calendar } from 'react-native-calendars';
const { width, height } = Dimensions.get('window');
export default function Mainlms({ navigation, route }) {
  const { username } = route.params;
  const { username1 } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All');
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [selectedSecondOption, setSelectedSecondOption] = useState('Sort by Dates');
  const [message, setMessage] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);

  const options = ['All', 'Overdue', 'In-progress', 'In-future'];
  const secondOptions = ['Sort by Dates', 'Sort by courses'];
  const activities = {
    All: ['Activity 1', 'Activity 2'],
    Overdue: [],
    'In-progress': ['Activity 3'],
    'In-future': [],
  };

  const handleSelect = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
    setModalVisible(false);
    checkMessage(option, selectedSecondOption);
  };

  const handleSecondSelect = (option: React.SetStateAction<string>) => {
    setSelectedSecondOption(option);
    setSecondModalVisible(false);
    checkMessage(selectedOption, option);
  };

  const checkMessage = (option: React.SetStateAction<string>, sortOption: React.SetStateAction<string>) => {
    const selectedActivities = activities[option];
    if (selectedActivities && selectedActivities.length === 0) {
      setMessage('No Activity Found');
      setMessageVisible(true);
      setTimeout(() => {
        setMessageVisible(false);
      }, 3000);
    } else {
      setMessage('');
      setMessageVisible(false);
    }
  };

  function handlehomepage() {
    navigation.navigate('Homepage');
  }

  function handlecourses() {
    navigation.navigate('Courses');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlehomepage}>
          <Text style={styles.buttonText}>Homepage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlecourses}>
          <Text style={styles.buttonText}>My Courses</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Welcome back! {username} {username1}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.timeline}>Timeline</Text>
        <View style={styles.selectorsContainer}>
          <TouchableOpacity
            style={styles.select}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.selectText}>{selectedOption}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.select1}
            onPress={() => setSecondModalVisible(true)}>
            <Text style={styles.selectText}>{selectedSecondOption}</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search by Activity type or name"
        />
        {messageVisible && message ? (
          <Text style={styles.messageText}>{message}</Text>
        ) : null}
        <Calendar
          style={styles.calendar}
        />
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={secondModalVisible}
        animationType="slide"
        onRequestClose={() => setSecondModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={secondOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSecondSelect(item)}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: 10,
    flexGrow: 1,
  },
  text: {
    color: 'black',
    fontSize: 24, // Adjust font size for responsiveness
    padding: 10,
  },
  timeline: {
   color: 'black',
    fontSize: 22, // Adjust font size for responsiveness
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%', // Use percentage for width
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Adjust font size for responsiveness
  },
  select: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '45%', // Use percentage for width
  },
  select1: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '45%', // Use percentage for width
  },
  selectText: {
    fontSize: 16, // Adjust font size for responsiveness
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16, // Adjust font size for responsiveness
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    width: '100%', // Ensure input takes full width
  },
  messageText: {
    fontSize: 16, // Adjust font size for responsiveness
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
  calendar: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    width: '100%', // Ensure calendar takes full width
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  selectorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
