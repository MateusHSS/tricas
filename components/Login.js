import React, {Component} from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Logo from "./layout/Logo";
import LoginSVG from "./svg/Login";
import MathSignalsSVG from "./svg/MathSignals";

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.home}>
        <View
          style={{
            justifyContent: "flex-end",
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <Logo style={{fontSize: 20}}></Logo>
        </View>
        <View
          style={{
            justifyContent: "center",
            flexGrow: 1,
            paddingVertical: 30,
          }}
        >
          <MathSignalsSVG />
        </View>
        <View style={{flexGrow: 4, alignItems: "center"}}>
          <View>
            <Text
              style={{
                fontSize: 50,
                ...styles.blueText,
                fontFamily: "DMSans_700Bold",
              }}
            >
              Entrando
            </Text>
          </View>
          <View style={{paddingTop: 20}}>
            <TextInput style={styles.input} placeholder="E-mail"></TextInput>
            <TextInput style={styles.input} placeholder="Senha"></TextInput>
          </View>
        </View>
        <View
          style={{
            flexGrow: 4,
            backgroundColor: "white",
            marginTop: -230,
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={{marginTop: -25}}>
            <Pressable
              onPress={() => this.props.navigation.navigate("Dashboard")}
              style={styles.button}
            >
              <Text style={{...styles.whiteText, fontFamily: "DMSans_700Bold"}}>
                Entrar
              </Text>
              <LoginSVG />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  blueText: {
    color: "#2361FF",
  },
  whiteText: {
    color: "#FFFFFF",
  },
  logoColor: {
    color: "#242A3A",
  },
  title: {
    fontSize: 70,
    fontWeight: "600",
  },
  buttonText: {
    fontWeight: "bold",
  },
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
  input: {
    height: 50,
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 7,
    fontFamily: "DMSans_400Regular",
  },
});

export default Login;
