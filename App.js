// In App.js in a new project

import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components'; 
import Home from './src/pages/Home';
import InfoWeather from './src/pages/InfoWeather';
import About from './src/pages/About';
import styledComponentsNative from 'styled-components/native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{ 
        headerTintColor:"white", 
        headerStyle:{backgroundColor: '#0086B8'}}}
      >

        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title:"Weather"
        }}
        />

        <Stack.Screen 
        name="InfoWeather"
        component={InfoWeather}
        />

        <Stack.Screen 
        name="About"
        component={About}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;