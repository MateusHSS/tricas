import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {Component} from "react";
import NewExpense from "./NewExpense";
import Profile from "./Profile";
import Summarize from "./Summarize";
import ManageAccountsSVG from "./svg/ManageAccounts";
import PaymentsSVG from "./svg/Payments";
import SummarizeSVG from "./svg/SummarizeSVG";

class Dashboard extends Component {
  render() {
    const DashboardStack = createBottomTabNavigator();
    return (
      <DashboardStack.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === "Summarize") {
              return <SummarizeSVG color={focused ? "#2361FF" : "#242A3A"} />;
            } else if (route.name === "Balance") {
              return <PaymentsSVG color={focused ? "#2361FF" : "#242A3A"} />;
            } else if (route.name === "Profile") {
              return (
                <ManageAccountsSVG color={focused ? "#2361FF" : "#242A3A"} />
              );
            }
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#E1E1E8",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            justifyContent: "space-between",
            paddingVertical: 20,
          },
          headerShown: false,
        })}
      >
        <DashboardStack.Screen name="Summarize" component={Summarize} />
        <DashboardStack.Screen name="Balance" component={NewExpense} />
        <DashboardStack.Screen name="Profile" component={Profile} />
      </DashboardStack.Navigator>
    );
  }
}

export default Dashboard;
