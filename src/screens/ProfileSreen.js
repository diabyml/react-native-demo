import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { screens } from "../constants";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/button/button";

const ProfileSreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Profile Screecn</Text>
      <Button title="Go back home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  homeButton: {
    marginTop: 6,
    backgroundColor: "#023e8a",
    display: "flex",
    alignSelf: "baseline",
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 8,
  },
  homeButtonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 15,
  },
});

export default ProfileSreen;
