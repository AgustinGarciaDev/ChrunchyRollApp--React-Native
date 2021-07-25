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
const Offline = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.artImg} source={require("../assets/historu.png")} />
      <Text style={styles.title}>Sincroniza tu series favoritas</Text>
      <Text style={styles.title}>Para verlas sin conexion</Text>
      <Text style={styles.subTitle}>
        Mejora tu cuenta mega fan para usar esta funcionalidad
      </Text>
      <TouchableOpacity style={styles.btnSuscription}>
        <Icon
          style={{marginRight: 10, marginLeft: 10}}
          name="crown"
          size={20}
          color="black"
        />
        <Text style={{fontWeight: "bold"}}>HAZTE PREMIUM</Text>
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
    width: 200,
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
    backgroundColor: "#FFB400",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "80%",
    marginTop: 20,
  },
});

export default Offline;
