import {Component} from "react";
import {Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Logo from "./layout/Logo";
import MathSignalsSVG from "./svg/MathSignals";

class NewExpense extends Component {
  render() {
    return (
      <SafeAreaView>
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
              Aqui tem tudo, menos um guarda-roupas
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
              Despesas
            </Text>
          </View>
          <View>
            <TextInput placeholder="Onde tá essa porra?"></TextInput>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default NewExpense;
