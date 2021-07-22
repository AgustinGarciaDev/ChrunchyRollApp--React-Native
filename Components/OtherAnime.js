import React, {useState} from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const OtherAnime = () => {
  const animeRelations = [
    {
      name: "Seirei Gensouki:Sprit Chronicles",
      img: "https://img1.ak.crunchyroll.com/i/spire2/eddcd2dbb19fd0395fc414cc58e47c051625359588_full.jpg",
    },
    {
      name: "Aware! Meisaku-kun",
      img: "https://img1.ak.crunchyroll.com/i/spire4/a6470bd841a667e7d5f09999a1e1a29b1625651770_full.jpg",
    },
    {
      name: "Digimon Adventure: (2020)",
      img: "https://img1.ak.crunchyroll.com/i/spire2/4dd9e4a8c791dad5b1620a15de09be461586045586_full.jpg",
    },
    {
      name: "Peach Boy Riverside",
      img: "https://img1.ak.crunchyroll.com/i/spire2/8456e119645ec10ff16ddf835b60c8691625134871_full.jpg",
    },
  ];

  return (
    <View style={styles.containerOtherAnime}>
      {animeRelations.map((anime, index) => {
        return (
          <View key={index} style={styles.containerAnime}>
            <Image
              source={{uri: anime.img}}
              resizeMode="cover"
              style={styles.coverAnime}
            />
            <View style={styles.containerTextAnime}>
              <View>
                <Text style={styles.nameAnime}>{anime.name}</Text>
                <Text style={styles.tagSerie}>SERIES</Text>
              </View>
              <View>
                <Icon
                  style={{marginRight: 10, marginLeft: 10}}
                  name="ellipsis-v"
                  size={20}
                  color="white"
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  containerOtherAnime: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "black",
    marginBottom: 30,
  },
  coverAnime: {
    width: 170,
    height: 300,
  },
  containerAnime: {
    margin: 7,
  },
  containerTextAnime: {
    padding: 7,
    backgroundColor: "#22353F",
    width: 170,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameAnime: {
    color: "white",
  },
  tagSerie: {
    color: "#00FFEE",
  },
});

export default OtherAnime;
