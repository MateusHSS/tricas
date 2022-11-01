import React, {Component} from "react";
import {FlatList} from "react-native";
import ExpenseItem from "./ExpenseItem";

class ExpenseList extends Component {
  render() {
    const renderItem = ({item}) => <ExpenseItem expense={item} />;
    return (
      <FlatList
        data={this.props.expenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

export default ExpenseList;
