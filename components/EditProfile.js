import {Component} from "react";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Logo from "./layout/Logo";
import AutorenewSVG from "./svg/Autorenew";
import MathSignalsSVG from "./svg/MathSignals";
import PasswordSVG from "./svg/Password";

class EditProfile extends Component {
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
              marginBottom: 76,
            }}
          >
            <View style={{marginRight: 40}}>
              <Logo style={{fontSize: 20}} />
            </View>
            <View>
              <MathSignalsSVG />
            </View>
          </View>
          <View style={{marginBottom: 25}}>
            <Text
              style={{
                fontFamily: "DMSans_700Bold",
                fontSize: 50,
                color: "#2361FF",
              }}
            >
              Editar perfil
            </Text>
          </View>
          <View>
            <View style={{marginBottom: 30}}>
              <TextInput style={styles.input} placeholder="Nome"></TextInput>
              <TextInput style={styles.input} placeholder="E-mail"></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Chave PIX"
              ></TextInput>
            </View>
            <View>
              <Pressable style={{...styles.button, marginBottom: 20}}>
                <Text
                  style={{...styles.whiteText, fontFamily: "DMSans_700Bold"}}
                >
                  Atualizar
                </Text>
                <AutorenewSVG />
              </Pressable>
              <Pressable
                onPress={() => this.props.navigation.navigate("ChangePassword")}
                style={styles.outlineButton}
              >
                <Text
                  style={{...styles.blueText, fontFamily: "DMSans_700Bold"}}
                >
                  Alterar a senha
                </Text>
                <PasswordSVG />
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
    borderRadius: 100,
    height: 44,
  },
  outlineButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 100,
    height: 44,
    borderColor: "#2361FF",
    borderWidth: 1,
  },
  input: {
    height: 50,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: "DMSans_400Regular",
    fontSize: 15,
    marginVertical: 5,
    backgroundColor: "#FFFFFF",
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

export default EditProfile;
