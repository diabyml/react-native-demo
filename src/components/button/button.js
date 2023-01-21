import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={onPress}>
      <Text style={styles.homeButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default Button;
