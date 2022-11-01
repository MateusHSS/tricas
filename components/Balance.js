import {Component} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Logo from "./layout/Logo";
import AttachMoneySVG from "./svg/AttachMoney";
import MathSignalsSVG from "./svg/MathSignals";

class Balance extends Component {
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
              Então a gente fica combinado assim então
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
              Saldo
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <View style={styles.card}>
              <Text>Niculinha (eu)</Text>
              <Text>-R$ 73,17</Text>
            </View>
            <View style={styles.card}>
              <Text>Periclão</Text>
              <Text>R$ 73,17</Text>
            </View>
            <View style={styles.card}>
              <Text>Docin</Text>
              <Text>-R$ 73,17</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              marginBottom: 50,
            }}
          >
            <Text
              style={{
                fontFamily: "DMSans_700Bold",
                fontSize: 25,
                color: "#2361FF",
              }}
            >
              Minhas dívidas
            </Text>
            <View style={{...styles.card, marginTop: 20}}>
              <Text style={{fontSize: 16, fontFamily: "DMSans_700Bold"}}>
                Periclão
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "DMSans_700Bold",
                  color: "red",
                }}
              >
                R$ 73,17
              </Text>
              <Pressable style={styles.button}>
                <AttachMoneySVG />
                <Text
                  style={{
                    ...styles.whiteText,
                    fontSize: 12,
                    fontFamily: "DMSans_700Bold",
                  }}
                >
                  Pagar
                </Text>
              </Pressable>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: "#69707B",
                fontFamily: "DMSans_700Bold",
                marginBottom: 20,
              }}
            >
              Dívida dos outros
            </Text>
            <View style={styles.card}>
              <View>
                <Text style={{fontFamily: "DMSans_400Regular", fontSize: 16}}>
                  Docin
                </Text>
                <Text
                  style={{
                    fontFamily: "DMSans_400Regular",
                    fontSize: 12,
                    color: "#69707B",
                  }}
                >
                  deve
                </Text>
                <Text style={{fontFamily: "DMSans_400Regular", fontSize: 16}}>
                  Periclão
                </Text>
              </View>
              <View style={{justifyContent: "center"}}>
                <Text style={{fontFamily: "DMSans_700Bold", fontSize: 16}}>
                  R$ 73,36
                </Text>
              </View>
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
  buttonText: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2361FF",
    paddingVertical: 5,
    paddingLeft: 8,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  card: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 7,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Balance;
