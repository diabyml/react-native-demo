import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductCard = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: "yellow", padding: 16 }}>
        {product.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ProductCard;
