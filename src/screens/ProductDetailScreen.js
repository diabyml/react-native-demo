import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SimilarProductList from "../components/product/SimilarProductList";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ProductsContext } from "../providers/productsProvider";

const ProductDetailScreen = () => {
  const { getProduct } = useContext(ProductsContext);
  const navigation = useNavigation();
  const route = useRoute();

  const productId = route.params.productId;
  const product = getProduct(productId);

  // update title using setOptions
  useEffect(() => navigation.setOptions({ title: product.title }), []);

  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <Text>Product Detail: {product.title}</Text>
      </View>

      <SimilarProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  test: {
    height: 200,
    backgroundColor: "pink",
  },
});

export default ProductDetailScreen;
