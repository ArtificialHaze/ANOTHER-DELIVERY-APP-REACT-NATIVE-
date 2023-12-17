import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const route = useRoute();
  const { item } = route.params;

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={"#000"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={"green"} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Ionicons name="star" key={item} color={"gold"} size={24} />
            ))}
            <Text style={styles.ratingText}>{4.9}</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons size={20} name="plus" color={"#000"} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons size={20} name="minus" color={"#000"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.descText}>{item.description}</Text>
        </View>
        <View style={{ marginBottom: 5 }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text>{item.product_location}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text>Free delivery</Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity style={styles.cartButton} onPress={() => {}}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addCart} onPress={() => {}}>
            <Fontisto size={22} name="shopping-bag" color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  addCart: {
    width: 37,
    height: 37,
    borderRadius: "50%",
    margin: 10,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  cartButton: {
    width: "50%",
    padding: 10,
    borderRadius: "10px",
    marginLeft: 6,
    backgroundColor: "#000",
  },
  cartTitle: { color: "#fff", fontSize: 12, marginLeft: 5 },
  cartRow: {
    paddingBottom: 7,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  upperRow: {
    position: "absolute",
    width: "95%",
    top: 15,
    zIndex: 999,
    marginHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -15,
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: 7,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    top: 20,
  },
  title: {
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 20,
  },
  priceWrapper: {
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
  price: {
    fontFamily: "monospace",
    fontWeight: "semibold",
    paddingHorizontal: 10,
  },
  ratingRow: {
    paddingBottom: 7,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    top: 5,
  },
  rating: {
    top: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 20,
  },
  ratingText: {
    color: "gray",
    fontFamily: "monospace",
    fontWeight: "500",
    paddingHorizontal: 5,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: 500,
  },
  descText: {
    textAlign: "justify",
    marginBottom: 5,
    fontFamily: "monospace",
    fontWeight: 400,
    fontSize: 14,
  },
  location: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: "lightblue",
    borderRadius: 10,
    marginHorizontal: 12,
  },
});
