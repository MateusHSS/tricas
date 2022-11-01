import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

class ExpenseItem extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.line}>
          <Text style={styles.expenseTitle}>{this.props.expense.title}</Text>
          <Text style={styles.expenseAmount}>
            R${" "}
            {this.props.expense.amount
              .toFixed(2)
              .toString()
              .replaceAll(".", ",")}
          </Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.payedBy}>
            Pago por{" "}
            <Text style={styles.name}>{this.props.expense.paidBy}</Text>
          </Text>
          <Text style={styles.date}>{this.props.expense.date}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginVertical: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
    flex: 1,
  },
  line: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 5,
  },
  h1: {
    fontSize: 25,
  },
  expenseTitle: {
    fontSize: 30,
    fontFamily: "DMSans_700Bold",
    color: "#242A3A",
  },
  expenseAmount: {
    fontSize: 20,
    color: "#C22B2B",
    fontFamily: "DMSans_700Bold",
  },
  payedBy: {
    color: "#69707B",
    fontFamily: "DMSans_400Regular",
  },
  name: {
    fontWeight: "600",
  },
  date: {
    color: "#69707B",
    fontFamily: "DMSans_400Regular",
    fontSize: 15,
  },
});

export default ExpenseItem;
