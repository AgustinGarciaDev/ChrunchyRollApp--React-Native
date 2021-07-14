import React, { useState } from "react";
import { ImageBackground, FlatList, Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import BoxAnime from "../Components/BoxAnime";
import { data } from '../data'


const Home = (props) => {

    const _renderItem = ({ item, index }) => {
        return (
            < View key={index} style={styles.slide} >
                <ImageBackground source={{ uri: item.cover }} style={styles.imageCarrousel}>
                </ImageBackground>
                <View style={styles.containerNameAnime}>
                    <Text style={styles.textNameAnime}  >{item.name}</Text>
                    <Text style={styles.textFlat}>SERIES</Text>
                </View>
            </View >
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View >
                <ImageBackground
                    source={{ uri: "https://wallpaperaccess.com/full/5872640.jpg" }}
                    resizeMode="cover"
                    style={styles.image}>
                    <LinearGradient
                        start={{ x: 0.5, y: 0.5 }}
                        end={{ x: 0.5, y: 0.2 }}
                        colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.1)']}
                        style={styles.linearGradient}>
                        <View style={styles.containerTextCover}>
                            <Text style={styles.textCoverTitle}>To Your Eternity</Text>
                            <Text style={styles.subTextCoverTitle}>  Al prinicipio el "orbe" llego a la Tierra. Podia hacer dos cosas: tomar la forma de cualquier cosa con la que inter...</Text>
                            <TouchableOpacity
                                style={styles.buttonCover}
                                onPress={() => { props.navigation.navigate('Anime') }}
                            >
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
                    data={data}
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <BoxAnime
                name={'Drug Store in Another Worl..'}
                img={'https://user-images.githubusercontent.com/66225450/125543230-7d120643-e3b2-4dca-9970-35f144c4eaab.png'}
                cover={'https://ramenparados.com/wp-content/uploads/2020/12/Cheat-Kusushi-no-Slow-Life-poster-300x426.jpg'}
            />
            <View>
                <FlatList
                    data={data}
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <BoxAnime
                name={'Boruto'}
                img={'https://img1.ak.crunchyroll.com/i/spire4/d11aa2cec683c50999692fe7487031ba1625611358_main.png'}
                cover={'https://img1.ak.crunchyroll.com/i/spire2/08f56c89d059aa0fc6e12eb38e42008f1625652299_full.jpg'}
            />
            <View>
                <FlatList
                    data={data}
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <BoxAnime
                name={'That Time I Got Reincarnat...'}
                img={'https://estrenos.news/wp-content/uploads/2021/01/1611750945_1_That-Time-I-Got-Reincarnated-as-a-Slime-Temporada-2.jpg'}
                cover={'https://img1.ak.crunchyroll.com/i/spire4/a6470bd841a667e7d5f09999a1e1a29b1625651770_full.jpg'}
            />

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
        height: 180,
    },
    textCoverTitle: {
        color: 'white',
        fontSize: 20
    },
    imageCarrousel: {
        width: 170,
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
        width: 170,
        height: 80,
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
        color: '#00FFEE'
    },

})

export default Home