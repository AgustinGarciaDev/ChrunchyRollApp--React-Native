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

const Queu = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.artImg} source={require("../assets/offline.png")} />
      <Text style={styles.title}>Tu cola necesita algo de amor.</Text>
      <Text style={styles.subTitle}>
        Crea una cuenta de Crunchyroll o accede con una para anadir series a tu
        cola
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
    textAlign: "center",
    width: "70%",
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

export default Queu;
