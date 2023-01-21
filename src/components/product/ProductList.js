import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { screens } from "../../constants";
import { ProductsContext } from "../../providers/productsProvider";
import ProductCard from "./ProductCard";

const ProductListView = () => {
  const navigation = useNavigation();
  const { products } = useContext(ProductsContext);
  return (
    <View>
      <Text>Product ListView</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(screens.productDetail, { productId: item.id })
            }
          >
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
        keyExtractor={({ id }) => id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductListView;
