import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme/theme";
import { View, Text, StyleSheet } from "react-native";

const RNLogo = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="logo-react" size={24} color={COLORS.white} />
      <Text style={styles.title}>Nkasugu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default RNLogo;
