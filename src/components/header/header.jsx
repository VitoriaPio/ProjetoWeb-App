import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text>AthleteExplorer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "blue", // Defina sua cor de fundo desejada
    padding: 10, // Adicione o preenchimento desejado
    alignItems: "center",
  },
});

export default Header;
