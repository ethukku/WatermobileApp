import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import {GlobalProvider} from './src/context/GlobalContext'
export default function App() {
  return (
    <GlobalProvider>
      <AppContainer />
    </GlobalProvider>
  );
}
