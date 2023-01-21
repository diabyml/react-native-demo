import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoryProductsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Category products</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default CategoryProductsScreen;
