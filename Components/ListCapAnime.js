import React, { useState } from "react";
import { ImageBackground, TouchableWithoutFeedback, Alert, Modal, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect } from "react";
import PreviewChapter from "./PreviewChapter";

const ListCapAnime = (props) => {
    const [modalTemporates, setModalTemporates] = useState(false)
    const [modalSincronitation, setModalSincronitation] = useState(false)
    const [modalOrderCap, setModalOrdenCap] = useState(false)
    const [listChapter, setListChapter] = useState([])

    useEffect(() => {
        setListChapter(props.route.params.arrayItem.Chapter)
    }, [])

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
                animationType="fade"
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
                        <Text style={{
                            color: '#00FFEE',
                            fontSize: 17,
                            marginBottom: 10,
                            marginTop: 10,
                        }}>S1-To Your Eternity</Text>
                        <Text style={styles.titleTemporate}>S1-To Your Eternity</Text>
                        <Text style={styles.titleTemporate}>S1-To Your Eternity</Text>
                        <Text style={styles.titleTemporate}>S1-To Your Eternity</Text>
                        <Text style={styles.titleTemporate}>S1-To Your Eternity</Text>
                    </View>

                </View>
            </Modal>
            <View style={styles.separator}></View>
            <View style={styles.containerButtonsList}>
                <TouchableOpacity
                    onPress={() => setModalOrdenCap(!modalOrderCap)}
                    style={styles.containerSeason}>
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
                    animationType="fade"
                    transparent={true}
                    visible={modalSincronitation}
                    onRequestClose={() => {
                        setModalTemporates(!modalSincronitation);
                    }} >
                    <View style={styles.modalSincronization}>

                        <ImageBackground
                            style={styles.modalSuscription}
                            source={{ uri: 'https://i1.wp.com/nosomosnonos.com/wp-content/uploads/2020/06/Rent-a-Girlfriend-1.jpg' }}
                            resizeMode="cover"
                        >
                            <LinearGradient
                                start={{ x: 0.5, y: 0.5 }}
                                end={{ x: 0.5, y: 0.2 }}
                                colors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.8)']}
                                style={styles.linearGradient}>
                                <View style={styles.containerTitleModal}>
                                    <TouchableOpacity onPress={() => setModalSincronitation(!modalSincronitation)}>
                                        <Icon style={{ marginRight: 10, marginLeft: 10 }} name="times" size={30} color="white" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Icon style={{ marginBottom: 20 }} name="crown" size={30} color="orange" />
                                    <View>
                                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'white' }}>SOLO PARA MEGA FAN</Text>
                                        <Text style={{ textAlign: 'center', color: 'white' }}>Solos los miembros Mega Fan pueden</Text>
                                        <Text style={{ textAlign: 'center', color: 'white' }}>sicronizar videos para verlos sin conexion</Text>
                                    </View>
                                    <TouchableOpacity style={styles.btnSuscription}>
                                        <Icon style={{ marginRight: 10, marginLeft: 10 }} name="crown" size={20} color="black" />
                                        <Text style={{ fontWeight: 'bold' }}>HAZTE PREMIUM</Text>
                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>
                        </ImageBackground>

                    </View>
                </Modal>
                {/* Modal order cap */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalOrderCap}
                    onRequestClose={() => {
                        setModalOrdenCap(!modalOrderCap);
                    }} >
                    <TouchableWithoutFeedback onPress={() => setModalOrdenCap(!modalOrderCap)}>
                        <View style={styles.modalOrder}  >
                            <View style={styles.containerModalOrder}>
                                <Text style={{ color: '#55565B', marginBottom: 40 }}>Ordenar por:</Text>
                                <TouchableOpacity >
                                    <Text style={{ color: 'white', fontSize: 18, marginBottom: 40 }}>Más antiguo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={{ color: '#FF6907', fontSize: 17 }}>Más nuevo</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
            <View>
                {
                    listChapter.map((chapter, index) => <PreviewChapter navigation={props.navigation} route={props.route} key={index} chapter={chapter} />)
                }
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
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalSuscription: {
        width: 340,
        height: 250
    },
    btnSuscription: {
        backgroundColor: '#FFB400',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 250,
        marginTop: 20
    },
    linearGradient: {
        height: 250
    },
    modalOrder: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: "100%",
        height: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    containerModalOrder: {
        backgroundColor: '#19191A',
        width: "100%",
        height: "25%",
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ListCapAnime