import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Linking,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Munna from '../../../Assets/munna.jpeg';
import facebook from '../../../Assets/facebook.png';
import google from '../../../Assets/google.png';
import Insta from '../../../Assets/insta.jpeg';
import twitter from '../../../Assets/twittwe.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup({navigation}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handlelogin() {
    return navigation.navigate('Login');
  }

  const handleSocialLogin = (url: string) => {
    Linking.openURL(url).catch(error =>
      console.error('Error fetching data', error),
    );
  };

  const validateInputs = () => {
    let newError = {firstname: '', lastname: '', username: '', email: ''};
    if (!firstname) newError.firstname = 'First Name is required';
    if (!lastname) newError.lastname = 'Last Name is required';
    if (!username) newError.username = 'Username is required';
    if (!email) newError.email = 'Email is required';
    else if (!emailRegex.test(email)) newError.email = 'Invalid email format';

    setError(newError);
    return (
      !newError.firstname &&
      !newError.lastname &&
      !newError.username &&
      !newError.email
    );
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    try {
      await AsyncStorage.setItem('firstname', firstname);
      await AsyncStorage.setItem('lastname', lastname);
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('email', email);

      setLoading(false);
      navigation.navigate('Mainlms', {username1: username});
    } catch (error) {
      setLoading(false);
      console.error('Error saving data to AsyncStorage', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.create}>Create New Account</Text>
        <TouchableOpacity>
          <Image source={Munna} style={styles.image} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstname}
          onChangeText={text => {
            setFirstname(text);
            setError({...error, firstname: ''});
          }}
        />
        {error.firstname ? (
          <Text style={styles.errorText}>{error.firstname}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastname}
          onChangeText={text => {
            setLastname(text);
            setError({...error, lastname: ''});
          }}
        />
        {error.lastname ? (
          <Text style={styles.errorText}>{error.lastname}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => {
            setUsername(text);
            setError({...error, username: ''});
          }}
        />
        {error.username ? (
          <Text style={styles.errorText}>{error.username}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={text => {
            setEmail(text);
            setError({...error, email: ''});
          }}
        />
        {error.email ? (
          <Text style={styles.errorText}>{error.email}</Text>
        ) : null}

        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
          disabled={loading}>
          {loading ? (
            <>
              <ActivityIndicator size="small" color="#fff" />
              <Text style={styles.buttonText}>Please wait...</Text>
            </>
          ) : (
            <Text style={styles.buttonText}>Register</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.Or}>OR</Text>

        <TouchableOpacity
          style={styles.phoneButton}
          onPress={handlelogin}
          disabled={loading}>
          <Text style={styles.phoneText}>Already have a Account</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <TouchableOpacity
            onPress={() => handleSocialLogin('https://www.facebook.com/')}
            accessibilityLabel="Login with Facebook">
            <Image source={facebook} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSocialLogin('https://www.google.com/')}
            accessibilityLabel="Login with Google">
            <Image source={google} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSocialLogin('https://www.instagram.com/')}
            accessibilityLabel="Login with Instagram">
            <Image source={Insta} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSocialLogin('https://x.com/')}
            accessibilityLabel="Login with Twitter">
            <Image source={twitter} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.05, // 5% of the screen width
    justifyContent: 'center',
  },
  create: {
    color: '#0284c7',
    fontSize: width * 0.06, // 6% of the screen width
    textAlign: 'center',
    marginBottom: height * 0.03, // 3% of the screen height
  },
  input: {
    width: '100%',
    padding: height * 0.009, // 2% of the screen height
    marginTop: height * 0.015, // 1.5% of the screen height
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#cbd5e1',
  },
  image: {
    width: width * 0.4, // 40% of the screen width
    height: width * 0.4, // 40% of the screen width
    borderRadius: (width * 0.4) / 2, // Half of the image width to make it circular
    alignSelf: 'center',
    marginBottom: height * 0.03, // 3% of the screen height
  },
  button: {
    backgroundColor: '#0284c7',
    paddingVertical: height * 0.02, // 2% of the screen height
    borderRadius: 10,
    marginTop: height * 0.03, // 3% of the screen height
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.045, // 4.5% of the screen width
  },
  phoneButton: {
    alignItems: 'center',
    padding: height * 0.01, // 1% of the screen height
  },
  phoneText: {
    fontSize: width * 0.05, // 5% of the screen width
    color: 'blue',
  },
  Or: {
    color: 'black',
    fontSize: width * 0.05, // 5% of the screen width
    textAlign: 'center',
    marginVertical: height * 0.03, // 3% of the screen height
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.015, // 1.5% of the screen height
  },
  socialIcon: {
    width: width * 0.13, // 13% of the screen width
    height: width * 0.13, // 13% of the screen width
    borderRadius: (width * 0.13) / 2, // Half of the icon width to make it circular
  },
  errorText: {
    color: 'red',
    fontSize: width * 0.035, // 3.5% of the screen width
    marginTop: height * 0.005, // 0.5% of the screen height
  },
});
