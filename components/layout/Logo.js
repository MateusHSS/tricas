import React, {Component} from "react";
import {StyleSheet, Text} from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <Text style={{...this.props.style, fontFamily: "DMSans_700Bold"}}>
        <Text style={styles.blueText}>t</Text>
        <Text style={styles.logoColor}>RICAS</Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  blueText: {
    color: "#2361FF",
  },
  logoColor: {
    color: "#242A3A",
  },
});
