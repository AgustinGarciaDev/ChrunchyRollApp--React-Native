import React from "react";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import Tab from './navegation/Tab'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  return (

    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  )
};



export default App;
