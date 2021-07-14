import React, { useState } from "react";
import { Text, View, ImageBackground, Modal, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const CommentUnique = ({ comment: { comment, like, response, userName } }) => {

    const [moreComments, setMoreComments] = useState(false)

    return (
        <View style={styles.containerComment}>
            <ImageBackground
                style={styles.profileImage}
                source={{ uri: 'https://user-images.githubusercontent.com/66225450/125334048-4ff7d500-e321-11eb-8d9d-5adae0335fd6.png' }}
                resizeMode="cover"
            ></ImageBackground>
            <View style={styles.containerInfoUser}>
                <Text style={styles.text}>{userName}</Text>
                <Text style={styles.text}>{comment}</Text>
                <View style={styles.containerIcons}>
                    <Icon style={{ marginRight: 19, marginLeft: 25 }} name="share" size={20} color="#CFD0D2" />
                    <Icon style={{ marginRight: 19, marginLeft: 25 }} name="thumbs-up" size={20} color="#CFD0D2" />
                    <Icon style={{ marginRight: 19, marginLeft: 25 }} name="ellipsis-v" size={20} color="#CFD0D2" />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => setMoreComments(!moreComments)}
                        style={styles.btnMoreComments}
                    >
                        <Text style={styles.btnMoreComments}>MOSTRAR {response.length} RESPUESTA</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    profileImage: {
        width: 60,
        height: 60,
        marginLeft: 10
    },
    containerComment: {
        flexDirection: 'row',
        marginBottom: 20,
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
    modalStyle: {
        backgroundColor: 'red',
        height: 200,
        width: "100%",
        alignItems: 'center'
    }
})
export default CommentUnique