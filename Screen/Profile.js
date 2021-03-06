import React, {useState} from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Crunchyroll</Text>
      <Text style={styles.subTitle}>
        Crea una cuenta o accede con una para poder seguir
      </Text>
      <Text style={styles.subTitle}>viendo el mejor anime donde quieras</Text>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={{fontWeight: "bold"}}>CREAR CUENTA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={{fontWeight: "bold"}}>CREAR CUENTA</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    color: "white",
    textAlign: "center",
  },
  title: {
    color: "white",
    fontSize: 27,
  },
  btnLogin: {
    backgroundColor: "#FF5C00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "80%",
    marginTop: 20,
  },
});
export default Profile;
