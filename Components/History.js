import React from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
const History = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.artImg} source={require("../assets/queue.png")} />
      <Text style={styles.title}>Preparate para hacer historia</Text>
      <Text style={styles.subTitle}>
        Crea una cuenta para rellenar tu historial
      </Text>
      <TouchableOpacity style={styles.btnSuscription}>
        <Text style={{fontWeight: "bold"}}>CREAR CUENTA</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  artImg: {
    width: 250,
    height: 200,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  subTitle: {
    color: "white",
    marginTop: 10,
  },
  btnSuscription: {
    backgroundColor: "#FF5C00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "80%",
    marginTop: 20,
  },
});

export default History;
