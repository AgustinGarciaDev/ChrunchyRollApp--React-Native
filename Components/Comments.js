import React, { useState } from "react";
import { Text, View, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommentUnique from "./CommentUnique";
const Comments = ({ setVisibleComment, visibleComment }) => {


    const listComment = [
        {
            userName: 'CocoSenpai',
            comment: 'Excelente Capitulo',
            likes: 2,
            response: [
                {
                    nameComment: 'carlitos',
                    likes: 4,
                    commentResponse: 'Muy buen aporte!'
                }
            ]
        },
        {
            userName: 'Martin',
            comment: 'Me encanto!',
            likes: 2,
            response: [
                {
                    nameComment: 'carlitos',
                    likes: 4,
                    commentResponse: 'Muy buen aporte!'
                }
            ]
        },
        {
            userName: 'Juan',
            comment: 'Me encanto!',
            likes: 2,
            response: [
                {
                    nameComment: 'carlitos',
                    likes: 4,
                    commentResponse: 'Muy buen aporte!'
                }
            ]
        },
        {
            userName: 'Carlos',
            comment: 'Me encanto!',
            likes: 2,
            response: [
                {
                    nameComment: 'carlitos',
                    likes: 4,
                    commentResponse: 'Muy buen aporte!'
                }
            ]
        },

    ]

    return (
        <View>
            <View style={styles.containerHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setVisibleComment(!visibleComment)} >
                        <Icon style={{ marginRight: 3, marginLeft: 3 }} name="arrow-left" size={30} color="#CFD0D2" />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', marginLeft: 30, fontSize: 17 }}>
                        Comentarios 338
                    </Text>
                </View>
                <TouchableOpacity>
                    <Icon style={{ marginRight: 3, marginLeft: 3 }} name="sort-amount-up" size={30} color="#CFD0D2" />
                </TouchableOpacity>
            </View>
            <View style={styles.listComment}>
                {
                    listComment.map((comment, index) => <CommentUnique key={index} comment={comment} />)
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listComment: {
        marginTop: 20
    },
    profileImage: {
        width: 60,
        height: 60,
        marginLeft: 10
    },
    containerComment: {
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontSize: 17,
        marginBottom: 2,
        marginTop: 2
    },
    containerIcons: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10
    },
    btnMoreComments: {
        color: 'orange',
        marginTop: 5
    },
    containerInfoUser: {
        marginLeft: 10
    },
})
export default Comments