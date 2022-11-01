import React, {Component} from "react";
import {Pressable, StyleSheet, Text} from "react-native";

class Button extends Component {
  render() {
    return (
      <Pressable onPress={() => Alert.alert("teste")} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
        <Text style={styles.buttonText}>->]</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2361FF",
    paddingVertical: 10,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    height: 50,
    borderRadius: 60,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Button;
