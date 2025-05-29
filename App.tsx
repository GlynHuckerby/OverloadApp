import React from 'react';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};