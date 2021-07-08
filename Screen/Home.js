import React, { useState } from "react";
import { ImageBackground, FlatList, Text, View, Image, StyleSheet, TextInput, Button, ScrollView } from "react-native";
const Home = () => {

    const anime = [
        { id: 1, nombre: "One piece", url: 'https://user-images.githubusercontent.com/66225450/124844548-f717ed80-df6a-11eb-96a8-291abe240402.jpg' },
        { id: 2, nombre: "One piece", url: 'https://user-images.githubusercontent.com/66225450/124844548-f717ed80-df6a-11eb-96a8-291abe240402.jpg' },
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
            <Text style={styles.titleText}>LOS FANS DEL ANIME TAMBIEN LLORAN</Text>

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
    textFlat: {
        color: '#1387A5'
    }

})

export default Home