import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import ListGender from "../Components/ListGender";
import ListAnimeExplore from "../Components/ListAnimeExplore";
import {data} from "../data";
const Tab = createMaterialTopTabNavigator();

const Explore = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#24252A",
        labelStyle: {fontWeight: "bold", fontSize: 12, color: "white"},
        style: {backgroundColor: "black"},
        indicatorStyle: {backgroundColor: "#FF6500"},
      }}>
      <Tab.Screen name="GENEROS" component={ListGender} />
      <Tab.Screen
        name="TODO"
        initialParams={{arrayItem: data}}
        component={ListAnimeExplore}
      />
    </Tab.Navigator>
  );
};

export default Explore;
