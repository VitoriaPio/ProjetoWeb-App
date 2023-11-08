import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.column}>
        <Text style={styles.text}>Equipe</Text>
        <Text style={styles.text}>Maria Sabina</Text>
        <Text style={styles.text}>Guilherme Bezerra</Text>
        <Text style={styles.text}>Vitória Pio</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.text}>AthleteExplorer</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.link}>Atletas</Text>
        <Text style={styles.link}>Favoritos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row", // Para organizar os elementos na horizontal
    justifyContent: "space-around", // Para distribuir igualmente os elementos na horizontal
    backgroundColor: "yourBackgroundColor", // Defina sua cor de fundo desejada
    padding: 10, // Adicione o preenchimento desejado
  },
  column: {
    flex: 1, // Para ocupar o espaço disponível na vertical
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    color: "white", // Cor do texto
  },
  link: {
    color: "blue", // Cor do link, você pode alterar para a cor desejada
  },
  // Outros estilos conforme necessário
});

export default Footer;
