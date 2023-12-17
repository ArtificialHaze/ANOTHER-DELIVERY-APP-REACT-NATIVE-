import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText("black", 5)}>Find the most</Text>
        <Text style={styles.welcomeText("goldenrod", 0)}>Luxury Furniture</Text>
      </View>
      <View style={styles.searchBar}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            onPressIn={() => navigation.navigate("Search")}
            value=""
            placeholder="What are we looking for?"
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="camera-outline" color={"#fff"} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeText: (color, top) => ({
    fontFamily: "monospace",
    fontSize: 30,
    marginTop: top,
    fontWeight: "bold",
    color: color,
    marginHorizontal: 12,
  }),
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 12,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: "gray",
    marginTop: 3,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "lightblue",
    marginRight: 10,
    borderRadius: 5,
  },
  searchInput: {
    fontFamily: "monospace",
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
  },
  searchButton: {
    width: 50,
    backgroundColor: "goldenrod",
    height: "100%",
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
  },
});
