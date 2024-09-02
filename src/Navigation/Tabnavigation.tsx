import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Notification from '../Components/Notification/Notificication';
import Mainlms from '../Components/Mainlmspage/Mainlms';

const Tab = createBottomTabNavigator();  // Change this from Drawer to Tab

export default function Drawernavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Mainlms" component={Mainlms} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
