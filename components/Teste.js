import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {Component} from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Logo from "./layout/Logo";
import ExpenseList from "./lists/expenses/ExpenseList";
import MathSignalsSVG from "./svg/MathSignals";

import Teste from "./Teste";

const expenses = [
  {
    id: 1,
    title: "Almeida",
    amount: 50.9,
    paidBy: "Docin",
    date: "20/09/2022",
  },
  {
    id: 2,
    title: "Almeida",
    amount: 50.9,
    paidBy: "Docin",
    date: "20/09/2022",
  },
  {
    id: 3,
    title: "Almeida",
    amount: 50.9,
    paidBy: "Docin",
    date: "20/09/2022",
  },
  {
    id: 4,
    title: "Almeida",
    amount: 50.9,
    paidBy: "Docin",
    date: "20/09/2022",
  },
  {
    id: 5,
    title: "Almeida",
    amount: 50.9,
    paidBy: "Docin",
    date: "20/09/2022",
  },
  {
    id: 6,
    title: "Almeida",
    amount: 50.9,
    paidBy: "Docin",
    date: "20/09/2022",
  },
  {
    id: 7,
    title: "Almeida",
    amount: 50.9,
    paidBy: "Docin",
    date: "20/09/2022",
  },
];

function MyTabBar({navigation}) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate("SomeScreen");
      }}
    />
  );
}

class Dashboard extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <SafeAreaView style={styles.home}>
        <View
          style={{
            padding: 20,
            paddingTop: 30,
            backgroundColor: "green",
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
            <TextInput
              style={styles.input}
              placeholder="Onde tá essa porra?"
            ></TextInput>
          </View>
          <ExpenseList expenses={expenses} />
          <View>
            <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
              <Tab.Screen name="Teste" component={Teste} />
            </Tab.Navigator>
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
});

export default Dashboard;
