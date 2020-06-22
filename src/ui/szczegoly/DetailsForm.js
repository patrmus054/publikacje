import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";

class DetailsForm extends Component {
  state = {
    title: null,
    date: "",
  };
  handleAddPress = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <view>
        <TouchableHighlight onPress={this.handleAddPress}>
          <Text>Add</Text>
        </TouchableHighlight>
      </view>
    );
  }
}

export default DetailsForm;
