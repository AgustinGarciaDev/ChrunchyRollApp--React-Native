import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import React from "react";
import History from "../Components/History";
import Offline from "../Components/Offline";
import Queu from "../Components/Queu";
const Tab = createMaterialTopTabNavigator();
const MyList = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#24252A",
        labelStyle: {fontWeight: "bold", fontSize: 12, color: "white"},
        style: {backgroundColor: "black"},
        indicatorStyle: {backgroundColor: "#FF6500"},
      }}>
      <Tab.Screen name="Cola" component={Queu} />
      <Tab.Screen name="Historial" component={History} />
      <Tab.Screen name="Offline" component={Offline} />
    </Tab.Navigator>
  );
};

export default MyList;
