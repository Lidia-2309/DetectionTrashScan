// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './src/pages/Home';
import DetectPage from './src/pages/Detect';
import { enableScreens } from 'react-native-screens';
import DetectResultsPage from './src/pages/DetectResults';
enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false}} />
        <Stack.Screen name="Detect" component={DetectPage} 
            options={{ title: 'Detector de Resíduos', headerTintColor: '#678F7C', headerTitleStyle: {
              fontSize: 16, 
              color: '#678F7C'
            },  }}  />
        <Stack.Screen name="DetectResults" component={DetectResultsPage} 
            options={{ title: 'Detector de Resíduos', headerTintColor: '#678F7C', headerTitleStyle: {
              fontSize: 16, 
              color: '#678F7C'
            },  }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
