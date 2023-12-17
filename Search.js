import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import axios from "react-native-axios";
import { Image } from "react-native-elements";
import SearchTile from "./SearchTile";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`[YOUR_URL]=${searchTerm}`);
      setSearchResults(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchBar}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            onChangeText={setSearchTerm}
            value={searchTerm}
            placeholder="What are we looking for?"
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => handleSearch()}
          >
            <Feather name="search" color={"#fff"} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: "" }} style={styles.searchImage} />
        </View>
      ) : (
        <FlatList
          style={{ marginHorizontal: 12 }}
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={(item) => <SearchTile item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchImage: {
    resizeMode: "contain",
    width: "65%",
    height: "45%",
    opacity: 0.9,
  },
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
