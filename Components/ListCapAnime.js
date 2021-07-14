import React, { useState } from "react";
import { ImageBackground, TouchableWithoutFeedback, Alert, Modal, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const ListCapAnime = (props) => {
    const [modalTemporates, setModalTemporates] = useState(false)
    const [modalSincronitation, setModalSincronitation] = useState(false)
    const [modalOrderCap, setModalOrdenCap] = useState(false)

    const listCap = [
        {
            title: 'S1 E1-El ultimo',
            duration: '20m restantes',
            cover: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/dfd7bbad9b55b27b0d160b80dbb818f31618229842_wide.jpg'
        },
        {
            title: 'S1 E2-Una niña inquieta',
            duration: '20m restantes',
            cover: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/108a437e007b516fedde13427d2af32d1618825084_wide.jpg'
        },
        {
            title: 'S1 E3-Una puqueña evolución',
            duration: '20m restantes',
            cover: 'https://img1.ak.crunchyroll.com/i/spire2-tmb/2fdac4440bb8aeae9cdf318f24a0635d1619434210_wide.jpg'
        },
        {
            title: 'S1 E4-Un enorme recipiente',
            duration: '20m restantes',
            cover: 'https://img1.ak.crunchyroll.com/i/spire1-tmb/4ec5d161870f407217428271ff7210fd1620042481_wide.jpg'
        },
        {
            title: 'S1 E5-Acompañante',
            duration: '20m restantes',
            cover: 'https://img1.ak.crunchyroll.com/i/spire4-tmb/c2b2e64c8bae83bc7199cca9012925e31620642491_wide.jpg'
        }

    ]


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
                    listCap.map((chapter, index) => {

                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => { props.navigation.navigate('Chapter') }}
                            >
                                <View style={styles.containerCap}>
                                    <ImageBackground
                                        source={{ uri: chapter.cover }}
                                        resizeMode="cover"
                                        style={styles.coverCap}>
                                        <View style={styles.containerTimecap}>
                                            <Text style={styles.capTime}>{chapter.duration}</Text>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ justifyContent: 'space-between', width: 220, padding: 10 }}>
                                        <Text style={styles.capText}>{chapter.title}</Text>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Icon style={{ marginRight: 5, marginLeft: 5, marginBottom: 10 }} name="arrow-alt-circle-down" size={24} color="white" />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )

                    })
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