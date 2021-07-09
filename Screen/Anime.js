import React, { useState } from "react";
import { ImageBackground, Alert, Modal, FlatList, Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListCapAnime from "../Components/ListCapAnime";
import OtherAnime from "../Components/OtherAnime";

const Tab = createMaterialTopTabNavigator();
const Anime = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalRaiting, setModalRaiting] = useState(false)
    const [modalOrderCap, setModalOrdenCap] = useState(false)
    return (
        <>
            <ScrollView style={styles.container}>
                <ImageBackground
                    source={{ uri: "https://wallpaperaccess.com/full/5872640.jpg" }}
                    resizeMode="cover"
                    style={styles.image}>
                    <LinearGradient
                        start={{ x: 0.5, y: 0.5 }}
                        end={{ x: 0.5, y: 0.2 }}
                        colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.1)']}
                        style={styles.linearGradient}>
                    </LinearGradient>
                </ImageBackground>
                <View style={styles.containerMainContent}>
                    <View style={styles.containerTextCover}>
                        <Text style={styles.textCoverTitle}>To Your Eternity</Text>
                        <Text style={styles.subCoverTitle}>SERIES</Text>
                        <View style={styles.containerRating}>
                            <Icon style={{ marginRight: 3, marginLeft: 3 }} name="star" size={30} color="#CFD0D2" />
                            <Icon style={{ marginRight: 3, marginLeft: 3 }} name="star" size={30} color="#CFD0D2" />
                            <Icon style={{ marginRight: 3, marginLeft: 3 }} name="star" size={30} color="#CFD0D2" />
                            <Icon style={{ marginRight: 3, marginLeft: 3 }} name="star" size={30} color="#CFD0D2" />
                            <Icon style={{ marginRight: 3, marginLeft: 3 }} name="star" size={30} color="#CFD0D2" />
                            <Text style={{ marginRight: 3, marginLeft: 3 }} style={styles.textRating}>Media: 4.9(4,6K)</Text>
                            <Icon style={{ marginRight: 3, marginLeft: 3 }} name="caret-down" size={20} color="#CFD0D2" />
                        </View>
                        <Text style={styles.textDescription}>
                            Al prinicipio el "orbe" llego a la Tierra. Podia hacer dos cosas: tomar la forma de cualquier cosa con la que inter...
                        </Text>
                        <TouchableOpacity
                            style={styles.btnDetails}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.btnDetailsText}>DETALLES DE LA SERIE</Text>
                            <Icon style={{ marginRight: 10, marginLeft: 10 }} name="chevron-right" size={17} color="#FF6500" />
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }} >
                            <View style={styles.modalStyle}>
                                <View style={styles.containerTitleModal}>
                                    <TouchableOpacity onPress={() => setModalVisible(false)} >
                                        <Icon style={{ marginRight: 10, marginLeft: 10 }} name="times" size={30} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ color: 'white', marginLeft: 20, fontSize: 20 }}>To your Eternity</Text>
                                </View>
                                <Text style={styles.textModal}>
                                    Al principio el "orbe" llegó a la Tierra. Podía hacer dos cosas: tomar la forma de cualquier cosa con la que interactuara y regenerarse para volver a la vida. El orbe se convirtió en roca, luego en lobo y finalmente en un chico, pero vaga por el mundo como un recién nacido que no sabe nada. Como niño se convierte en Fushi. Poco a poco va conociendo la amabilidad humana y Fushi no solo aprende a sobrevivir, sino que crece como "persona". Pero su viaje queda ensombrecido por Nokker, un destructivo e inexplicable enemigo, así como por las crueles depedidas de aquellos a quienes ama.
                                </Text>
                                <View style={styles.containerEpAndEd}>
                                    <Text style={styles.titleModalEp}>Episodios Totales</Text>
                                    <Text style={styles.textModalEp}>42</Text>
                                </View>
                                <View style={styles.separator}></View>
                                <View style={styles.containerEpAndEd}>
                                    <Text style={styles.titleModalEp}>Editora</Text>
                                    <Text style={styles.textModalEp}>NHKEnterpise</Text>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>
                <NavigationContainer style={{ width: "100%" }}>
                    <Tab.Navigator
                        tabBarOptions={{
                            activeTintColor: '#24252A',
                            labelStyle: { fontWeight: 'bold', fontSize: 12, color: 'white' },
                            style: { backgroundColor: '#24252A' },
                            indicatorStyle: { backgroundColor: '#FF6500' },
                        }}
                    >
                        <Tab.Screen name="EPISODIOS" component={ListCapAnime} />
                        <Tab.Screen name="MAS COMO ESTO" component={OtherAnime} />
                    </Tab.Navigator>
                </NavigationContainer>
            </ScrollView >
            <View style={styles.footerFloting}>
                <TouchableOpacity style={styles.buttonPlay}>
                    <Icon style={{ marginRight: 10, marginLeft: 10 }} name="play" size={17} color="#000" />
                    <Text style={styles.ButtonPlayText}>EMPEZAR A VER AHORA!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSave}>
                    <Icon style={{ marginRight: 10, marginLeft: 10 }} name="bookmark" size={17} color="#FF6500" />
                </TouchableOpacity>
            </View>
        </>


    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 500,
    },
    container: {
        backgroundColor: 'black',
        height: "100%",
        marginBottom: 30
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        height: 500,
        justifyContent: 'flex-end'
    },
    textCoverTitle: {
        color: 'white',
        fontSize: 25,
        marginBottom: 10
    },
    subCoverTitle: {
        color: '#00FFEE',
        fontSize: 15,
        marginBottom: 10
    },
    containerMainContent: {
        position: 'relative',
        bottom: 50,
        margin: 20
    },
    containerRating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRating: {
        color: '#CFD0D2',
        fontSize: 17,
        marginLeft: 10,
        marginRight: 5
    },
    textDescription: {
        color: '#8B8B8B',
        marginTop: 10,
        fontSize: 15,
    },
    btnDetails: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnDetailsText: {
        color: '#FF6500',
        fontSize: 17,
    },
    footerFloting: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        height: 60,

    },
    buttonPlay: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6500',
        height: 40,
        width: '80%',
        justifyContent: 'center'
    },
    ButtonPlayText: {
        color: 'black',
        fontWeight: 'bold',
    },
    buttonSave: {
        borderWidth: 3,
        borderColor: '#FF6500',
        width: "10%",
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        height: 40,
    },
    modalStyle: {
        backgroundColor: 'black',
        width: "100%",
        height: "100%"
    },
    containerTitleModal: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    textModal: {
        color: '#CFD0D2',
        padding: 12,
        fontSize: 16,
        letterSpacing: 1,
        marginBottom: 20

    },
    separator: {
        borderBottomColor: '#24252A',
        borderBottomWidth: 0.5,
    },
    textModalEp: {
        color: 'white'
    },
    titleModalEp: {
        color: 'white',
        fontSize: 17,
    },
    containerEpAndEd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }

})

export default Anime