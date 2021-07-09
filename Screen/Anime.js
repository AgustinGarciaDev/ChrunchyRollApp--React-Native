import React, { useState } from "react";
import { ImageBackground, FlatList, Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListCapAnime from "../Components/ListCapAnime";
import OtherAnime from "../Components/OtherAnime";

const Tab = createMaterialTopTabNavigator();
const Anime = () => {

    return (
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
                    <Text style={styles.textCoverTitle}>Tokyo Revengers</Text>
                    <Text style={styles.subCoverTitle}>SERIES</Text>
                    <View style={styles.containerRating}>
                        <Icon style={{ marginRight: 3, marginLeft: 3 }} name="star" size={30} color="white" />
                        <Icon style={{ marginRight: 3, marginLeft: 3 }} name="star" size={30} color="white" />
                        <Icon style={{ marginRight: 3, marginLeft: 3 }} name="star" size={30} color="white" />
                        <Icon style={{ marginRight: 3, marginLeft: 3 }} name="star" size={30} color="white" />
                        <Icon style={{ marginRight: 3, marginLeft: 3 }} name="star" size={30} color="white" />
                        <Text style={{ marginRight: 3, marginLeft: 3 }} style={styles.textRating}>Media: 4.9(4,6K)</Text>
                        <Icon style={{ marginRight: 3, marginLeft: 3 }} name="caret-down" size={20} color="white" />
                    </View>
                    <Text style={styles.textDescription}>
                        Al prinicipio el "orbe" llego a la Tierra. Podia hacer dos cosas: tomar la forma de cualquier cosa con la que inter...
                    </Text>

                    <TouchableOpacity style={styles.btnDetails}>
                        <Text style={styles.btnDetailsText}>DETALLES DE LA SERIE</Text>
                        <Icon style={{ marginRight: 3, marginLeft: 3 }} name="chevron-right" size={17} color="orange" />
                    </TouchableOpacity>
                </View>
            </View>
            <NavigationContainer style={{ width: "100%" }}>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: '#24252A',
                        labelStyle: { fontWeight: 'bold', fontSize: 12, color: 'white' },
                        style: { backgroundColor: '#24252A' },
                        indicatorStyle: { backgroundColor: 'orange' },
                    }}
                >
                    <Tab.Screen name="EPISODIOS" component={ListCapAnime} />
                    <Tab.Screen name="MAS COMO ESTO" component={OtherAnime} />
                </Tab.Navigator>
            </NavigationContainer>

        </ScrollView >


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
        color: 'orange',
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
        color: 'white',
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
        color: 'orange',
        fontSize: 17,
    },


})

export default Anime