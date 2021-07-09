import React, { useState } from "react";
import { ImageBackground, FlatList, Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {

    const anime = [
        { id: 1, nombre: "One piece", url: 'https://user-images.githubusercontent.com/66225450/124844548-f717ed80-df6a-11eb-96a8-291abe240402.jpg' },
        { id: 2, nombre: "One piece", url: 'https://ramenparados.com/wp-content/uploads/2020/12/Cheat-Kusushi-no-Slow-Life-poster-300x426.jpg' },
        { id: 3, nombre: "One piece", url: 'https://user-images.githubusercontent.com/66225450/124844548-f717ed80-df6a-11eb-96a8-291abe240402.jpg' },
        { id: 4, nombre: "One piece", url: 'https://user-images.githubusercontent.com/66225450/124844548-f717ed80-df6a-11eb-96a8-291abe240402.jpg' },
    ]
    const _renderItem = ({ item, index }) => {
        return (
            < View key={item.id} style={styles.slide} >
                <ImageBackground source={{ uri: item.url }} style={styles.imageCarrousel}>
                </ImageBackground>
                <View style={styles.containerNameAnime}>
                    <Text style={styles.textNameAnime}  >{item.nombre}</Text>
                    <Text style={styles.textFlat}>SERIES</Text>
                </View>
            </View >
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View >
                <ImageBackground
                    source={{ uri: "https://user-images.githubusercontent.com/66225450/124844548-f717ed80-df6a-11eb-96a8-291abe240402.jpg" }}
                    resizeMode="cover"
                    style={styles.image}>
                    <LinearGradient
                        start={{ x: 0.5, y: 0.5 }}
                        end={{ x: 0.5, y: 0.2 }}
                        colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.1)']}
                        style={styles.linearGradient}>
                        <View style={styles.containerTextCover}>
                            <Text style={styles.textCoverTitle}>Tokyo Revengers</Text>
                            <Text style={styles.subTextCoverTitle}>Takemichi Hanagaki es un trabajador que ha tocado fondo en la vida. Entonces descubre que la única novia que tuvo jamás, en sus años de secundaria,</Text>
                            <TouchableOpacity style={styles.buttonCover}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="play" size={30} color="#000" />
                                    <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>VER AHORA</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View>
                <Text style={styles.titleText}>LOS FANS DEL ANIME TAMBIEN LLORAN</Text>
            </View>

            <View>
                <FlatList
                    data={anime}
                    renderItem={_renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Text>Hola</Text>
            <View style={{ margin: 10 }}>
                <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/proxy/fq4HAE-F8VUivBeLn8kiWbpxPkQglKurGhxBP_7MA5s4jJkC6l5nIECcrVMwh2cHl5Ky713Xu0qty4HjThd4FE969pwoWioQVpdHb2f1ZP8N0g' }}
                    resizeMode="cover"
                    style={styles.BoxImageAbove}
                />
                <View style={styles.boxBelow}>
                    <View>
                        <Image
                            source={{ uri: 'https://ramenparados.com/wp-content/uploads/2020/12/Cheat-Kusushi-no-Slow-Life-poster-300x426.jpg' }}
                            resizeMode="cover"
                            style={styles.BoxPortAnime}
                        />
                    </View>
                    <View style={styles.boxText}>
                        <Text style={styles.boxTextTitle}>Drug Store in Another Worl..</Text>
                        <View>
                            <Text style={styles.boxTextSubTitle} >SERIES</Text>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: "100%",

    },
    image: {
        width: "100%",
        height: 500
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttonCover: {
        width: 150,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5C00'
    },
    containerTextCover: {
        height: 180
    },
    textCoverTitle: {
        color: 'white',
        fontSize: 20
    },
    imageCarrousel: {
        width: 140,
        height: 250,
        marginLeft: 10,
        marginRight: 10
    },
    titleText: {
        color: 'white',
        fontSize: 17,
        margin: 10
    },
    containerNameAnime: {
        backgroundColor: '#213945',
        width: "88%",
        height: 70,
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-around'
    },
    textNameAnime: {
        color: 'white'
    },
    subTextCoverTitle: {
        color: 'white',
        fontSize: 17
    },
    textFlat: {
        color: '#1387A5'
    },
    BoxImageAbove: {
        width: "100%",
        height: 200
    },
    boxBelow: {
        backgroundColor: '#213945',
        height: 200,
        flexDirection: 'row'
    },
    BoxPortAnime: {
        width: 140,
        height: 250,
        position: 'relative',
        left: 10,
        bottom: 60
    },
    boxText: {
        justifyContent: 'space-around',
        position: 'relative',
        left: 20,
    },
    boxTextTitle: {
        color: 'white'
    },
    boxTextSubTitle: {
        color: '#1387A5'
    }
})

export default Home