import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  ActivityIndicator,
  Dimensions,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for local storage
import google from '../../../Assets/google.png';
import apple from '../../../Assets/Apple.jpeg';

export default function Login({ navigation }) {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setnameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  const { width } = Dimensions.get('window'); // Get screen width for responsiveness

  const handleLogin = async () => {
    setLoading(true);
    setnameError('');
    setPasswordError('');

    if (!name) {
      setnameError('name is required');
      setLoading(false);
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      setLoading(false); // Stop loading
      return;
    }

    setTimeout(async () => {
      try {
        await AsyncStorage.setItem('username', name); // Store name in local storage
        setLoading(false);
        navigation.navigate('Mainlms', { username: name }); // Pass the name to Mainlms
      } catch (error) {
        console.error('Error saving data', error);
        setLoading(false);
      }
    }, 2000);
  };

  const handleforfb = () => {
    Linking.openURL('https://www.facebook.com/').catch(error =>
      console.error('Error Fetching data'),
    );
  };
  const handleforgoogle = () => {
    Linking.openURL('https://www.google.com/').catch(error =>
      console.error('Error Fetching data'),
    );
  };
  const handleforapple = () => {
    Linking.openURL('https://www.apple.com/').catch(error =>
      console.error('Error Fetching data'),
    );
  };
  const handlesignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <ScrollView style={styles.scroll} >



    <View style={styles.container}>
      <Text style={styles.text}>Sign-In</Text>
      <TextInput
        style={[styles.input, { fontSize: width > 320 ? 18 : 14 }]}
        placeholder="Enter your User-Name"
        value={name}
        onChangeText={setname}
        editable={!loading} // Disable input while loading
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
      <TextInput
        style={[styles.input, { fontSize: width > 320 ? 18 : 14 }]}
        placeholder="Enter your Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        editable={!loading} // Disable input while loading
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forget your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { width: width > 320 ? '70%' : '85%' }]} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      {loading && <Text style={styles.loadingText}>Please wait...</Text>}

      <Text style={styles.para}>OR</Text>
      <TouchableOpacity style={[styles.button1, { width: width > 320 ? '70%' : '85%' }]} onPress={handleforfb} disabled={loading}>
        <Text style={styles.fbButtonText}>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleforgoogle} disabled={loading}>
        <Image source={google} style={[styles.image, { width: width > 320 ? 50 : 40, height: width > 320 ? 50 : 40 }]} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button2, { width: width > 320 ? '70%' : '85%' }]} onPress={handleforapple} disabled={loading}>
        <Image source={apple} style={[styles.apple, { width: width > 320 ? 50 : 40, height: width > 320 ? 50 : 40 }]} />
        <Text style={styles.buttonText2}>Signin with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.phoneButton} onPress={handlesignup} disabled={loading}>
        <Text style={styles.phoneText}>Not have an Account? Sign-Up</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll:{
    flexGrow: 1,

  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    color: '#0284c7',
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 20,
    borderColor: 'gray',
    backgroundColor: '#cbd5e1',
    color:'black'
  },
  button: {
    backgroundColor: '#0284c7',
    padding: 13,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center',
  },
  button1: {
    backgroundColor: '#0284c7',
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  fbButtonText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  buttonText2: {
    color: 'white',
  },
  button2: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center',
  },
  forgotPassword: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'right',
    fontSize: 13,
  },
  para: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 20,
  },
  image: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  apple: {
    marginRight: 10,
  },
  phoneButton: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  phoneText: {
    fontSize: 20,
    color: 'blue',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loadingText: {
    color: 'gray',
    textAlign: 'center',
    marginVertical: 10,
  },
});
