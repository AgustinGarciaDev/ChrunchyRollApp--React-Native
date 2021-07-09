import React, { useState } from "react";
import { ImageBackground, Alert, Modal, FlatList, Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListCapAnime = () => {
    const [modalTemporates, setModalTemporates] = useState(false)
    const [modalSincronitation, setModalSincronitation] = useState(false)

    return (
        <View style={styles.containerListAnime}>
            <TouchableOpacity
                style={styles.containerSeason}
                onPress={() => setModalTemporates(!modalTemporates)}
            >
                <Icon style={{ marginRight: 3, marginLeft: 3 }} name="chevron-down" size={20} color="#00FFEE" />
                <Text style={styles.textSeason}> S1-To your Eternity (Portuguese Dub)</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalTemporates}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalTemporates(!modalTemporates);
                }} >
                <View style={styles.modalStyle}>
                    <View style={styles.containerTitleModal}>
                        <TouchableOpacity onPress={() => setModalTemporates(!modalTemporates)}  >
                            <Icon style={{ marginRight: 10, marginLeft: 10 }} name="times" size={30} color="white" />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', marginLeft: 20, fontSize: 20 }}>Temporadas</Text>
                    </View>
                    <View style={styles.containerTemporate}>
                        <Text style={styles.titleTemporate}>S1-To Your Eternity</Text>
                        <Text style={styles.titleTemporate}>S1-To Your Eternity</Text>
                        <Text style={styles.titleTemporate}>S1-To Your Eternity</Text>
                        <Text style={styles.titleTemporate}>S1-To Your Eternity</Text>
                        <Text style={styles.titleTemporate}>S1-To Your Eternity</Text>
                    </View>

                </View>
            </Modal>
            <View style={styles.separator}></View>
            <View style={styles.containerButtonsList}>
                <TouchableOpacity style={styles.containerSeason}>
                    <Icon style={{ marginRight: 3, marginLeft: 3 }} name="sort-amount-up-alt" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.containerSeason}
                    onPress={() => setModalSincronitation(!modalSincronitation)}

                >
                    <Text style={{ fontSize: 14, color: 'white' }}> SINCRONIZAR TODO</Text>
                    <Icon style={{ marginRight: 5, marginLeft: 5 }} name="arrow-alt-circle-down" size={24} color="white" />
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalSincronitation}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalTemporates(!modalSincronitation);
                    }} >
                    <View style={styles.modalSincronization}>
                        <View style={styles.containerTitleModal}>
                            <TouchableOpacity onPress={() => setModalSincronitation(!modalSincronitation)}>
                                <Icon style={{ marginRight: 10, marginLeft: 10 }} name="times" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalSuscription}>
                            <Text>Hola</Text>
                        </View>

                    </View>
                </Modal>
            </View>
            <View>
                <View style={styles.containerCap}>
                    <ImageBackground
                        source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/dfd7bbad9b55b27b0d160b80dbb818f31618229842_wide.jpg' }}
                        resizeMode="cover"
                        style={styles.coverCap}>
                        <View style={styles.containerTimecap}>
                            <Text style={styles.capTime}>20m restantes</Text>
                        </View>
                    </ImageBackground>
                    <View style={{ justifyContent: 'space-between', width: 220 }}>
                        <Text style={styles.capText}>S1 E1-El ultimo</Text>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Icon style={{ marginRight: 5, marginLeft: 5, marginBottom: 10 }} name="arrow-alt-circle-down" size={24} color="white" />
                        </View>
                    </View>
                </View>
                <View style={styles.containerCap}>
                    <ImageBackground
                        source={{ uri: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/dfd7bbad9b55b27b0d160b80dbb818f31618229842_wide.jpg' }}
                        resizeMode="cover"
                        style={styles.coverCap}>
                        <View style={styles.containerTimecap}>
                            <Text style={styles.capTime}>20m restantes</Text>
                        </View>
                    </ImageBackground>
                    <View style={{ justifyContent: 'space-between', width: 220 }}>
                        <Text style={styles.capText}>S1 E1-El ultimo</Text>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Icon style={{ marginRight: 5, marginLeft: 5, marginBottom: 10 }} name="arrow-alt-circle-down" size={24} color="white" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerListAnime: {
        flex: 1,
        backgroundColor: 'black'
    },
    containerSeason: {
        flexDirection: 'row',
        padding: 14
    },
    textSeason: {
        color: '#00FFEE',
        fontSize: 16
    },
    separator: {
        borderBottomColor: '#24252A',
        borderBottomWidth: 0.5,
    },
    containerButtonsList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerCap: {
        backgroundColor: '#213945',
        height: 120,
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5
    },
    coverCap: {
        width: 180,
        height: 120,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    containerTimecap: {
        backgroundColor: 'rgba(0, 0, 0, 0.74)',
        width: 100,
        padding: 2,
        margin: 5
    },
    capTime: {
        color: 'white'
    },
    capText: {
        color: 'white',
        marginLeft: 10
    },
    titleSeason: {
        color: 'white'
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
    titleTemporate: {
        color: 'white',
        fontSize: 17,
        marginBottom: 10,
        marginTop: 10,
    },
    containerTemporate: {
        marginLeft: 25,
        marginTop: 13,

    },
    modalSincronization: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: "100%",
        height: "100%"
    }
})

export default ListCapAnime