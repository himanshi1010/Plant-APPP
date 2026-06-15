import React from 'react';
import { LanguageProvider } from './src/context/LanguageContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import ResultScreen from './screens/ResultScreen';
import ChatbotScreen from './screens/ChatbotScreen';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
 <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name='Home'
          component={HomeScreen}
        />
 <Stack.Screen
          name='Camera'
          component={CameraScreen}
        />

        <Stack.Screen
          name='Result'
          component={ResultScreen}
        />
<Stack.Screen
          name='Chatbot'
          component={ChatbotScreen}
        />

      </Stack.Navigator>
      
      <LanguageProvider>
      <YourNavigation />
    </LanguageProvider>


    </NavigationContainer>
  );
}