import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import {GlobalProvider} from './src/context/GlobalContext';
import { Provider } from "react-redux";
import { store } from "./src/AppRedux/store";
export default function App() {
  return (
    <GlobalProvider>
     <Provider store={store}>
      <AppContainer />
     </Provider>    
    </GlobalProvider>

  );
}
