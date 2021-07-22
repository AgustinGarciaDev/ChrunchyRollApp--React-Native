import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const PreviewChapter = props => {
  const {chapter, navigation, route} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Chapter", {
          item: route.params.arrayItem,
          id: chapter._id,
        });
      }}>
      <View style={styles.containerCap}>
        <ImageBackground
          source={{uri: chapter.cover}}
          resizeMode="cover"
          style={styles.coverCap}>
          <View style={styles.containerTimecap}>
            <Text style={styles.capTime}>{chapter.duration}</Text>
          </View>
        </ImageBackground>
        <View
          style={{justifyContent: "space-between", width: 220, padding: 10}}>
          <Text style={styles.capText} numberOfLines={1}>
            {chapter.title}
          </Text>
          <View style={{alignItems: "flex-end"}}>
            <Icon
              style={{marginRight: 5, marginLeft: 5, marginBottom: 10}}
              name="arrow-alt-circle-down"
              size={24}
              color="white"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCap: {
    backgroundColor: "#213945",
    height: 120,
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 5,
  },
  coverCap: {
    width: 180,
    height: 120,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  containerTimecap: {
    backgroundColor: "rgba(0, 0, 0, 0.74)",
    width: 100,
    padding: 2,
    margin: 5,
  },
  capTime: {
    color: "white",
  },
  capText: {
    color: "white",
    marginLeft: 10,
  },
});

export default PreviewChapter;
