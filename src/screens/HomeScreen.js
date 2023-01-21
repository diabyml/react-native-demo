import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { screens } from "../constants";
import ProductListView from "../components/product/ProductList";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/button/button";
import { ACTION_TYPES, AppContext } from "../providers/AppProvider";

const HomeScreen = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>{state.name}</Text>
      <Button
        title="Go to profile"
        onPress={() =>
          navigation.navigate(screens.profile, { title: "Mon Profile" })
        }
      />
      <View style={{ marginBottom: 16 }} />
      <Button
        title="Go to category products"
        onPress={() => navigation.navigate(screens.categoryProducts)}
      />

      <Button
        title={"Change title"}
        onPress={() =>
          dispatch({ type: ACTION_TYPES.CHANGE_NAME, payload: "Nkasugu New" })
        }
      />
      <ProductListView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
