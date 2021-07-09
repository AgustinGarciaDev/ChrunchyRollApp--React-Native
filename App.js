import React from "react";
import Anime from "./Screen/Anime";
import Home from "./Screen/Home";
import SingIn from "./Screen/SignIn";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    /*  <SingIn /> */
    /* <Home /> */
    <Anime />
  )
};



export default App;
