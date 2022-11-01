import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import {Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import Logo from "./layout/Logo";
import LoginSVG from "./svg/Login";
import MathSignals from "./svg/MathSignals";
import PersonAddSVG from "./svg/PersonAdd";

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.home}>
        <StatusBar barStyle={"dark-content"} />

        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            flexGrow: 2,
          }}
        >
          <Logo style={{fontSize: 70}} />
        </View>
        <View
          style={{
            height: 100,
            flexGrow: 2,
            justifyContent: "center",
          }}
        >
          <MathSignals />
        </View>
        <View
          style={{
            flexGrow: 3,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <View style={{marginTop: -35}}>
            <View style={{marginVertical: 10}}>
              <Pressable
                onPress={() => this.props.navigation.navigate("Login")}
                style={styles.button}
              >
                <Text
                  style={{
                    ...styles.whiteText,
                    fontFamily: "DMSans_700Bold",
                    fontSize: 15,
                  }}
                >
                  Entrar
                </Text>
                <LoginSVG />
              </Pressable>
            </View>
            <View style={{marginVertical: 10}}>
              <Pressable
                onPress={() => this.props.navigation.navigate("Register")}
                style={styles.outlinedButton}
              >
                <Text
                  style={{
                    ...styles.blueText,
                    fontFamily: "DMSans_700Bold",
                    fontSize: 15,
                  }}
                >
                  Cadastrar
                </Text>
                <PersonAddSVG />
              </Pressable>
            </View>
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
    shadowColor: "#2361FF",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.27,
  },
  outlinedButton: {
    backgroundColor: "#F5F5FB",
    paddingVertical: 10,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    height: 50,
    borderRadius: 60,
    borderColor: "#2361FF",
    borderWidth: 2,
  },
});

export default Home;
