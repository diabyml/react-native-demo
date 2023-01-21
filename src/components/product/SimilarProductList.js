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

const SimilarProductList = () => {
  const navigation = useNavigation();
  const { similarProducts } = useContext(ProductsContext);
  return (
    <View>
      <Text>Similar Products</Text>
      <FlatList
        data={similarProducts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              // I use push here because we are in ProductDetail screen and I wanna go to ProductDetail screen
              // but with new data, so I use push isntead of navigate because I am already there
              navigation.push(screens.productDetail, { productId: item.id })
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

export default SimilarProductList;
