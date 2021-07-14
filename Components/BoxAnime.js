import React, { useState } from "react";
import { ImageBackground, FlatList, Text, View, Image, StyleSheet, TouchableOpacity, Button, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const BoxAnime = ({ cover, img, name, text }) => {

    return (
        <View style={{ margin: 10 }}>
            <Image
                source={{ uri: img }}
                resizeMode="cover"
                style={styles.BoxImageAbove}
            />
            <View style={styles.boxBelow}>
                <View>
                    <Image
                        source={{ uri: cover }}
                        resizeMode="cover"
                        style={styles.BoxPortAnime}
                    />
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.boxTextTitle}>{name}</Text>
                    <View>
                        <Text style={styles.boxTextSubTitle} >SERIES</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

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
        color: '#00FFEE'
    }
})
export default BoxAnime