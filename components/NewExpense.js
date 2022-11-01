import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Logo from "./layout/Logo";
import MathSignalsSVG from "./svg/MathSignals";

class NewExpense extends Component {
  render() {
    return (
      <SafeAreaView style={styles.home}>
        <View
          style={{
            padding: 20,
            paddingTop: 30,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{marginRight: 40}}>
              <Logo style={{fontSize: 20}} />
            </View>
            <View>
              <MathSignalsSVG />
            </View>
          </View>
          <View style={{marginVertical: 20, paddingTop: 20}}>
            <Text style={{fontFamily: "DMSans_500Medium", color: "#69707B"}}>
              Só da pra ter uma de cada vez, não 05
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: "DMSans_700Bold",
                fontSize: 50,
                color: "#2361FF",
              }}
            >
              Nova despesa
            </Text>
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
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: "DMSans_400Regular",
    fontSize: 15,
    marginVertical: 10,
    backgroundColor: "#D6DAE0",
    color: "#242A3A",
    borderRadius: 7,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "#2361FF",
    borderRadius: 100,
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
    left: 190,
  },
});

export default NewExpense;
