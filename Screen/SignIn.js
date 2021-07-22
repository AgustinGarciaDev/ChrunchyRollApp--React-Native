import React, {useState} from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
const SingIn = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [inputSelect, setInputSelect] = useState(false);

  const changeInput = () => {
    console.log(inputSelect);
    setInputSelect(!inputSelect);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://user-images.githubusercontent.com/66225450/124843672-ce8ef400-df68-11eb-97e4-5214a3129980.jpeg",
          }}
          style={styles.logo}
        />
      </View>
      <View>
        <TextInput
          style={inputSelect ? styles.inputActive : styles.inputField}
          placeholder="E-mail"
          onFocus={changeInput}
          placeholderTextColor="#BABBBD"
        />
        <TextInput
          style={inputSelect ? styles.inputActive : styles.inputField}
          onFocus={changeInput}
          placeholder="Password"
          placeholderTextColor="#BABBBD"
        />
        <View style={styles.containerChexboxAndText}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            tintColors={{
              true: "#F15927",
              false: "#141519",
            }}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={styles.text}>
            Al usar esta cuenta aceptas los terminos y condiciones
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonHome}>
          <Button
            title="Crear cuenta"
            color="black"
            accessibilityLabel="Crear Cuenta"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    padding: 10,
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: 40,
  },
  containerChexboxAndText: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  inputField: {
    margin: 10,
    backgroundColor: "#141519",
    color: "white",
  },
  inputActive: {
    margin: 10,
    backgroundColor: "#141519",
    borderBottomColor: "#F7751D",
    borderBottomWidth: 5,
    color: "white",
  },

  buttonHome: {
    margin: 10,
    borderWidth: 2,
    borderColor: "#141519",
    marginTop: 40,
  },
  text: {
    color: "white",
  },
});

export default SingIn;
