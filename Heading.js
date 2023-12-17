import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Heading = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("NewRivals")}>
          <Ionicons name="ios-grid" size={24} color={"goldenrod"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: -2,
    marginHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "monospace",
    fontWeight: "semibold",
    fontSize: 27,
    color: "#000",
  },
});
