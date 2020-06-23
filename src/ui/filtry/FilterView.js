import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
//import { Picker } from "@react-native-community/picker";
import { Platform } from "react-native";
import { Picker } from "react-native";
import {
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
} from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";
class FilterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      minPoints: 0,
      maxPoints: 200,
      pickerOpacity: 0,
      opacityOfOtherItems: 1,
      myTheme: props.theme,
    };
  }
  checkIfIOS() {
    if (Platform.OS === "ios") {
      return (
        <Button
          buttonStyle={{
            backgroundColor: "#D1D1D1",
            opacity: this.state.opacityOfOtherItems,
          }}
          onPress={this.toggle()}
          color="#101010"
          title={this.state.label}
          onPress={this.changeOpacity}
        />
      );
    } else if (Platform.OS === "android") {
      this.setState({
        pickerOpacity: 1, //set picker opacity:1 -> picker is visible.
      });
    }
  }

  toggle() {
    if (Platform.OS === "ios") {
      if (this.state.pickerOpacity == 0) {
        this.setState({
          pickerOpacity: 1,
          opacityOfOtherItems: 0, // THIS WILL HIDE YOUR BUTTON!
        });
      } else {
        this.setState({
          pickerOpacity: 0,
          opacityOfOtherItems: 1,
        });
      }
    }
  }
  componentDidMount() {
    this.checkIfIOS();
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            placeholder="Title"
            placeholderTextColor={this.state.myTheme.text}
            value={this.state.title}
            style={{ height: 50, width: 300, color: this.state.myTheme.text }}
            onChangeText={(text) => this.setState({ title: text })}
            underlineColorAndroid={this.state.myTheme.text}
          />
          <View>
            <View style={styles.pickerContainer}>
              <Text style={{ color: this.state.myTheme.text }}>
                Min Points:
              </Text>

              <TextInput
                placeholder="Min Points"
                placeholderTextColor={this.state.myTheme.text}
                value={this.state.minPoints}
                style={{
                  height: 50,
                  width: 100,
                  marginLeft: 10,
                  color: this.state.myTheme.text,
                }}
                keyboardType="numeric"
                onChangeText={(text) => this.setState({ minPoints: text })}
                underlineColorAndroid={this.state.myTheme.text}
              />
            </View>
            <View style={styles.pickerContainer}>
              <Text style={{ color: this.state.myTheme.text }}>
                Max Points:
              </Text>

              <TextInput
                placeholder="Max Points"
                value={this.state.maxPoints}
                placeholderTextColor={this.state.myTheme.text}
                keyboardType="numeric"
                style={{
                  height: 50,
                  width: 100,
                  marginLeft: 10,
                  color: this.state.myTheme.text,
                }}
                onChangeText={(text) => this.setState({ maxPoints: text })}
                underlineColorAndroid={this.state.myTheme.text}
              />
            </View>
          </View>
          <Button
            color="#09A693"
            title="Search"
            onPress={() => this.searchMagazines()}
          />
        </View>
      </ScrollView>
    );
  }
  searchMagazines = () => {
    this.props.navigation.navigate("MagazineList", {
      title: this.state.title,
      minPoints: this.state.minPoints,
      maxPoints: this.state.maxPoints,
    });
  };
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  pickerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  pickerStyle: {
    color: "#fff",
  },
  button: {
    width: 100,
    height: 35,

    borderRadius: 20,
    backgroundColor: "#09A693",
  },
});
export default (props) => {
  const { colors } = useTheme();
  return <FilterView {...props} theme={colors} />;
};
