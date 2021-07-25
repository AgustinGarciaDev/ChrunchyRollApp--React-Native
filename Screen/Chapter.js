import React, {useState} from "react";
import {useEffect} from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Video from "react-native-video";
import Comments from "../Components/Comments";

const Chapter = props => {
  const [visibleComment, setVisibleComment] = useState(false);
  const [listChapters] = useState(props.route.params.item.Chapter);
  const [chapter, setChapter] = useState(null);
  const [proxChapter, setProxChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadChapter(props.route.params.id);
  }, []);

  const loadChapter = id => {
    const chapterFilter = listChapters.find(chapter => chapter._id === id);
    setChapter(chapterFilter);
    let currentChapter = listChapters.indexOf(chapterFilter);
    setProxChapter(listChapters[currentChapter + 1]);
    setLoading(false);
  };

  if (loading) {
    return <Text>Loading</Text>;
  }

  const numberComments = 339;

  return (
    <>
      <View style={styles.videoContainer}>
        <Video
          source={{uri: chapter.urlChapter}}
          style={{width: "100%", height: 260}}
          controls={true}
          resizeMode="cover"
          audioOnly={true}
        />
      </View>
      <ScrollView style={styles.containerChapter}>
        <View style={{padding: 10}}>
          {!visibleComment ? (
            <>
              <View>
                <Text style={{color: "#FF6500"}}>To your eternity</Text>
                <View style={styles.containerTitleAndIcon}>
                  <Text style={styles.titleChapter}>{chapter.title}</Text>
                  <Icon
                    style={{marginRight: 10, marginLeft: 10}}
                    name="ellipsis-v"
                    size={20}
                    color="white"
                  />
                </View>
                <Text
                  style={{
                    color: "#CFD0D2",
                    fontSize: 16,
                    marginBottom: 20,
                    marginTop: 10,
                  }}>
                  {chapter.description}
                </Text>
              </View>
              <View>
                <View style={styles.separator}></View>
                <TouchableOpacity
                  style={styles.buttonComment}
                  onPress={() => {
                    setVisibleComment(!visibleComment);
                  }}>
                  <Icon
                    style={{marginRight: 3, marginLeft: 3}}
                    name="comment"
                    size={30}
                    color="#CFD0D2"
                  />
                  <Text style={{color: "white"}}>
                    Comentarios {numberComments}
                  </Text>
                </TouchableOpacity>
                <View style={styles.separator}></View>
              </View>
              <View style={{marginTop: 20, marginBottom: 20}}>
                <Text style={{color: "#CFD0D2"}}>Proximo episodio</Text>
                <View style={styles.containerCap}>
                  <ImageBackground
                    source={{
                      uri: proxChapter.cover,
                    }}
                    resizeMode="cover"
                    style={styles.coverCap}>
                    <View style={styles.containerTimecap}>
                      <Text style={styles.capTime}>{proxChapter.duration}</Text>
                    </View>
                  </ImageBackground>
                  <View style={{justifyContent: "space-between", width: 220}}>
                    <Text style={styles.capText}>{proxChapter.title}</Text>
                    <View
                      style={{alignItems: "flex-start", flexDirection: "row"}}>
                      <Icon
                        style={{marginLeft: 15, marginBottom: 10}}
                        name="comment"
                        size={22}
                        color="#CFD0D2"
                      />
                      <Text style={{color: "white", marginLeft: 7}}>144</Text>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.btnDetails}
                onPress={() => setModalVisible(!visibleComment)}>
                <Text style={styles.btnDetailsText}>TODOS LOS CAPITULOS</Text>
                <Icon
                  style={{marginRight: 10, marginLeft: 10}}
                  name="chevron-right"
                  size={17}
                  color="#FF6500"
                />
              </TouchableOpacity>
            </>
          ) : (
            <Comments
              visibleComment={visibleComment}
              setVisibleComment={setVisibleComment}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  containerChapter: {
    backgroundColor: "black",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  btnDetails: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnDetailsText: {
    color: "#FF6500",
    fontSize: 14,
  },
  titleChapter: {
    color: "white",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
  },
  containerTitleAndIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  separator: {
    borderBottomColor: "#24252A",
    borderBottomWidth: 0.5,
  },
  buttonComment: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
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
  titleSeason: {
    color: "white",
  },
});

export default Chapter;
