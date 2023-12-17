import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ProductList from "./ProductList";

const NewRivals = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} color={"#fff"} />
          </TouchableOpacity>
          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: "15px",
    color: "#fff",
    marginLeft: 5,
  },
  container: { flex: 1, backgroundColor: "#fff" },
  wrapper: {},
  upperRow: {
    width: "55%",
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    borderRadius: 10,
    top: "20px",
    backgroundColor: "gold",
  },
});
