import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { item })}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1}>
            {item.supplier}
          </Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons size={35} name="add-circle" color={"goldenrod"} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: 5,
    backgroundColor: "lightblue",
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "gray",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: 5,
  },
  title: {
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 2,
  },
  subtitle: { fontFamily: "regular", fontSize: 15, color: "gray" },
  price: { fontFamily: "monospace", fontWeight: "bold", fontSize: 12 },
  addButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});
