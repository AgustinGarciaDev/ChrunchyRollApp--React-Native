import { Text, View, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useEffect } from "react";

const ListAnimeExplore = (props) => {

    const [animes, setAnime] = useState([])

    useEffect(() => {
        setAnime(props.route.params.arrayItem)
    }, [])

    return (
        <ScrollView style={styles.container} >
            <View style={styles.containerCover}>


                {
                    animes.map((anime, index) => {

                        return (
                            <View style={{ margin: 5 }} key={index}>
                                <Image
                                    source={{ uri: anime.cover }}
                                    style={styles.coverAnime}
                                    resizeMode='cover'
                                />
                                <View style={styles.containerTexts}>
                                    <Text style={{ color: 'white' }}>{anime.name}</Text>
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