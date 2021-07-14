import { Text, View, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListAnimeExplore = () => {

    const listExploreAnime = [
        {
            name: 'One piece',
            cover: 'https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg',
        },
        {
            name: 'My Hero Academi',
            cover: 'https://img1.ak.crunchyroll.com/i/spire3/137c90ecc4fae013811fab5275b307791617056778_full.jpg',
        },
        {
            name: 'That Time I Got Reincarnated as a Slime',
            cover: 'https://img1.ak.crunchyroll.com/i/spire4/a6470bd841a667e7d5f09999a1e1a29b1625651770_full.jpg',
        },
        {
            name: 'Boruto',
            cover: 'https://img1.ak.crunchyroll.com/i/spire2/08f56c89d059aa0fc6e12eb38e42008f1625652299_full.jpg',
        },
        {
            name: 'Tokyo Revengers',
            cover: 'https://img1.ak.crunchyroll.com/i/spire4/81ba04142373eed44f7e0c2f278b17361626143500_full.jpg'
        },
        {
            name: 'Welcome to Demon School! Iruma-kun',
            cover: 'https://img1.ak.crunchyroll.com/i/spire2/fd4ec1b58bc75f9fdc5c658121fa6e951618988280_full.jpg',
        },
        {
            name: 'My Hero Academi',
            cover: 'https://img1.ak.crunchyroll.com/i/spire4/06abd3afda8813b94ee87751a050feef1622798458_full.jpg',
        },
        {
            name: 'Aware! Meisaku-kun',
            cover: 'https://img1.ak.crunchyroll.com/i/spire4/a6470bd841a667e7d5f09999a1e1a29b1625651770_full.jpg',
        },
        {
            name: 'Digimon Adventure: (2020)',
            cover: 'https://img1.ak.crunchyroll.com/i/spire2/4dd9e4a8c791dad5b1620a15de09be461586045586_full.jpg',
        },
        {
            name: 'Peach Boy Riverside',
            cover: 'https://img1.ak.crunchyroll.com/i/spire2/8456e119645ec10ff16ddf835b60c8691625134871_full.jpg'
        }

    ]



    return (
        <ScrollView style={styles.container} >
            <View style={styles.containerCover}>


                {
                    listExploreAnime.map((gender, index) => {

                        return (
                            <View style={{ margin: 5 }} key={index}>
                                <Image
                                    source={{ uri: gender.cover }}
                                    style={styles.coverAnime}
                                    resizeMode='cover'
                                />
                                <View style={styles.containerTexts}>
                                    <Text style={{ color: 'white' }}>{gender.name}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: '#00FFEE' }}>SERIES</Text>
                                        <Icon style={{ marginRight: 3, marginLeft: 3 }} name="ellipsis-v" size={20} color="white" />
                                    </View>
                                </View>
                            </View>
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
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 10
    },
    coverAnime: {
        width: 180,
        height: 250,

    },
    containerTexts: {
        backgroundColor: '#213945',
        height: 80,
        justifyContent: 'space-between',
        padding: 8,
        width: 180,
    }

})
export default ListAnimeExplore