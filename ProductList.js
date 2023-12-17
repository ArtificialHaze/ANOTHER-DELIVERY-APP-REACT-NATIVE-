import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import useFetch from "./useFetch";
import ProductCardView from "./ProductCardView";

const ProductList = () => {
  const { data, isLoading, err } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={30} color={"gold"} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        data={data}
        numColumns={2}
        renderItem={(item) => <ProductCardView item={item} />}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  separator: {
    height: 16,
  },
  container: {
    alignItems: "center",
    paddingTop: 15,
    paddingLeft: 8,
  },

  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
