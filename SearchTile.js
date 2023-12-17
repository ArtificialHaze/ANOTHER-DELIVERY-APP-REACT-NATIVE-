import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchTile = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetails", { item })}
        style={styles.container}
      >
        <View style={styles.image}>
          <Image source={{ uri: item.imgUrl }} style={styles.productImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.supplier}>{item.supplier}</Text>
          <Text style={styles.supplier}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTile;

const styles = StyleSheet.create({
  supplier: {
    fontSize: "10",
    fontWeight: "500",
    color: "gray",
    marginTop: 3,
  },
  productTitle: { fontSize: "15px", fontWeight: "bold", color: "gold" },
  textContainer: { flex: 1, marginHorizontal: 12 },
  productImage: {
    width: "100%",
    height: 65,
    resizeMode: "cover",
    borderRadius: 3,
  },
  image: {
    width: 70,
    backgroundColor: "lightblue",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#fff",
    shadowRadius: 5,
  },
});
