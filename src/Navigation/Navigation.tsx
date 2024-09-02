import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../Components/MainPage/Main/Main';
import Login from '../Components/MainPage/Login/Login';
import Signup from '../Components/MainPage/Signup/Signup';
import Mainlms from '../Components/Mainlmspage/Mainlms';
import Homepage from '../Components/Home/Homepage';
import Courses from '../Components/Courses/Courses';
import Lmscourses from '../Components/LMScourses/lmscourses';
import Frontend from '../Components/Coursesdetails/Frontend/Frontend.tsx'
import Backend from '../Components/Coursesdetails/Backend/Backend'
import Programmingfundamental from '../Components/Coursesdetails/Programminfundamental/Programmingfundamental'
import Softwarequalityassurance from '../Components/Coursesdetails/Software Quality Assurance/Softwarequalityassurance'
import Graphicdesign from '../Components/Coursesdetails/Graphic Designing/Graphicdesign'
import HtmlCss from '../Components/Mycourses/Htmlandcss/HtmlCss.tsx';
import Javascript from '../Components/Mycourses/Javascript/JavaScript.tsx';
import React from '../Components/Mycourses/React/React.tsx';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Mainlms" component={Mainlms} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Lmscourses" component={Lmscourses} />
        <Stack.Screen name="Frontend" component={Frontend} />
        <Stack.Screen name="Backend" component={Backend} />
        <Stack.Screen name="Programmingfundamental" component={Programmingfundamental} />
        <Stack.Screen name="Softwarequalityassurance" component={Softwarequalityassurance} />
        <Stack.Screen name="Graphicdesign" component={Graphicdesign} />
        <Stack.Screen name="HtmlCss" component={HtmlCss} />
        <Stack.Screen name="JavaScript" component={Javascript} />
        <Stack.Screen name="React" component={React} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
