import React from "react";
import Home from "../Screen/Home";
import Explore from "../Screen/Explore";
import MyList from "../Screen/MyList";
import Profile from "../Screen/Profile";
import SimulCast from "../Screen/Simulcast";
import Icon from "react-native-vector-icons/FontAwesome5";
import {createStackNavigator} from "@react-navigation/stack";
import Anime from "../Screen/Anime";
import Chapter from "../Screen/Chapter";
import Search from "../Screen/Search";
import {TouchableOpacity, TextInput, StyleSheet} from "react-native";

const stack = createStackNavigator();

export const HomeStack = ({navigation}) => {
  return (
    <stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {backgroundColor: "black"},
      }}>
      <stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <Icon
              name="search"
              color="white"
              onPress={() => navigation.navigate("Search")}
              style={{marginRight: 10}}
              size={20}
            />
          ),
          title: "",
        }}
      />

      <stack.Screen
        name="Anime"
        component={Anime}
        options={{
          headerRight: () => (
            <Icon
              name="search"
              color="white"
              onPress={() => navigation.navigate("Search")}
              style={{marginRight: 10}}
              size={20}
            />
          ),
          title: "",
        }}
      />
      <stack.Screen
        name="Chapter"
        component={Chapter}
        options={{
          headerRight: () => (
            <Icon
              name="search"
              color="white"
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 10}}
              size={20}
            />
          ),
          title: "",
        }}
      />
      <stack.Screen
        name="Search"
        component={Search}
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <TextInput style={styles.input} placeholder="Buscar" />
            </TouchableOpacity>
          ),
          title: "",
        }}
      />
    </stack.Navigator>
  );
};

export const MyListStack = ({navigation}) => {
  return (
    <stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {backgroundColor: "black"},
      }}>
      <stack.Screen
        name="My list"
        component={MyList}
        options={{
          headerRight: () => (
            <Icon
              name="search"
              color="white"
              onPress={() => navigation.navigate("Search")}
              style={{marginRight: 10}}
              size={20}
            />
          ),
          title: "Mis listas",
        }}
      />
    </stack.Navigator>
  );
};
export const ExploreStack = ({navigation}) => {
  return (
    <stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {backgroundColor: "black"},
      }}>
      <stack.Screen
        name="Explore"
        component={Explore}
        options={{
          headerRight: () => (
            <Icon
              name="search"
              color="white"
              onPress={() => navigation.navigate("Search")}
              style={{marginRight: 10}}
              size={20}
            />
          ),
          title: "Explore",
        }}
      />
    </stack.Navigator>
  );
};
export const SimulCastStack = ({navigation}) => {
  return (
    <stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {backgroundColor: "black"},
      }}>
      <stack.Screen
        name="Simulcast"
        component={SimulCast}
        options={{
          headerRight: () => (
            <Icon
              name="search"
              color="white"
              onPress={() => navigation.navigate("Search")}
              style={{marginRight: 10}}
              size={20}
            />
          ),
          title: "Temporada de simulcast",
        }}
      />
    </stack.Navigator>
  );
};

export const ProfileStack = ({navigation}) => {
  return (
    <stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {backgroundColor: "black"},
      }}>
      <stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => (
            <Icon
              name="search"
              color="white"
              onPress={() => navigation.navigate("Search")}
              style={{marginRight: 10}}
              size={20}
            />
          ),
          title: "Mi cuenta",
        }}
      />
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    width: 360,
  },
});
