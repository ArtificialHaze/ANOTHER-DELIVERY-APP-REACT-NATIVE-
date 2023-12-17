import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import ProductCardView from "./ProductCardView";
import useFetch from "./useFetch";

const ProductRow = () => {
  const { data, err, isLoading } = useFetch();

  return (
    <View style={{ marginTop: 5 }}>
      {isLoading ? (
        <ActivityIndicator size={35} color={"gold"} />
      ) : err ? (
        <Text>Something went wrong.</Text>
      ) : (
        <FlatList
          key={(item) => item._id}
          data={data}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: 5 }}
        />
      )}
    </View>
  );
};
export default ProductRow;

const styles = StyleSheet.create({});
