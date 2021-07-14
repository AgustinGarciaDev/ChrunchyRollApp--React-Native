import { Text, View, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const ListGender = () => {

    const listGenderAnime = [
        {
            gender: 'acción',
            cover: 'https://oniichanimecom.sfo2.cdn.digitaloceanspaces.com/multimedia/uploads/2018/07/los-mejores-animes-de-accion-primavera-2018-oniichanime.jpg',
            icon: 'fire'
        },
        {
            gender: 'aventura',
            cover: 'https://oniichanimecom.sfo2.cdn.digitaloceanspaces.com/multimedia/uploads/2019/03/los-mejores-animes-de-aventura-invierno-2019-tate-no-yuusha-no-nariagari-1024x576.jpg',
            icon: 'map'
        },
        {
            gender: 'Comedia',
            cover: 'https://cdn.superaficionados.com/imagenes/image-142-cke.jpg',
            icon: 'grin-squint-tears'
        },
        {
            gender: 'drama',
            cover: 'https://oniichanimecom.sfo2.cdn.digitaloceanspaces.com/multimedia/uploads/2019/05/los-mejores-animes-de-drama-invierno-2019-domestic-na-kanojo.jpg',
            icon: 'heart-broken'
        },
        {
            gender: 'fantasia',
            cover: 'https://areajugones.sport.es/wp-content/uploads/2021/07/to-your-eternity.jpeg',
            icon: 'fighter-jet'
        },
        {
            gender: 'musical',
            cover: 'https://img1.ak.crunchyroll.com/i/spire1-tmb/5fddbad016185cb02922f18d0d99e29b1618477933_wide.jpg',
            icon: 'music'
        },
        {
            gender: 'romance',
            cover: 'https://hiramnoriega.com/wp-content/uploads/2021/05/Main.jpg',
            icon: 'heart'
        },
        {
            gender: 'Ciencia ficcion',
            cover: 'https://media.airedesantafe.com.ar/p/d3028ed7d47944165c44c74dcf3aedad/adjuntos/268/imagenes/001/659/0001659924/los-7-mejores-animes-ciencia-ficcion.jpg',
            icon: 'map'
        },
        {
            gender: 'Seinen',
            cover: 'https://cdn.defensoresdelacruz.net/wp-content/uploads/2020/08/animanga-0_335874_pn2.jpg',
            icon: 'bahai'
        },
        {
            gender: 'shoujo',
            cover: 'https://k-magazinemx.com/wp-content/uploads/2020/02/images-3.jpeg',
            icon: 'book-reader'
        },
        {
            gender: 'shonen',
            cover: 'https://as01.epimg.net/meristation/imagenes/2021/05/18/noticias/1621331371_078391_1621331484_portada_normal.jpg',
            icon: 'fist-raised'
        },
        {
            gender: 'recuentos de la vida',
            cover: 'https://honeysanime.com/wp-content/uploads/2017/09/NEW-GAME-capture.jpg',
            icon: 'calendar-check'
        },
        {
            gender: 'deportes',
            cover: 'https://newesc.com/wp-content/uploads/kuroko-1-1280x720.jpg',
            icon: 'futbol'
        },
        {
            gender: 'Sobrenatural',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacUxXQaBtzFUywWE82ApjxcBSutUTbv_AUA&usqp=CAU',
            icon: 'ghost'
        },
    ]



    return (
        <ScrollView style={styles.container} >
            <View style={styles.containerCover}>
                {
                    listGenderAnime.map((gender, index) => {
                        return (
                            <ImageBackground
                                key={index}
                                source={{ uri: gender.cover }}
                                resizeMode='cover'
                                style={styles.coverGender}>
                                <LinearGradient
                                    start={{ x: 0.2, y: 0.5 }}
                                    end={{ x: 0.7, y: 0.2 }}
                                    colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.1)']}
                                    style={styles.linearGradient}>
                                    <TouchableOpacity style={styles.btnGender}>
                                        <Icon style={{ marginRight: 3, marginLeft: 3 }} name={gender.icon} size={30} color="white" />
                                        <Text style={styles.titleGender}>{gender.gender}</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </ImageBackground>
                        )

                    })
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: "100%",
        height: "100%",
    },
    containerCover: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    coverGender: {
        width: 180,
        height: 120,
        margin: 4
    },
    titleGender: {
        color: 'white'
    },
    linearGradient: {
        width: 200,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnGender: {
        alignItems: 'center'
    }
})

export default ListGender