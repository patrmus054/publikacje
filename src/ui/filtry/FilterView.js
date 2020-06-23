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
            placeholder="Podaj tytuł czasopisma"
            value={this.state.title}
            style={{ height: 50, width: 300 }}
            onChangeText={(text) => this.setState({ title: text })}
            underlineColorAndroid={this.state.myTheme.text}
          />
          <View>
            <View style={styles.pickerContainer}>
              <Text style={{ color: this.state.myTheme.text }}>Min Points</Text>

              <Picker
                style={{
                  color: this.state.myTheme.text,
                  height: 50,
                  width: 100,
                  opacity: this.state.pickerOpacity,
                }}
                itemStyle={{ color: this.state.myTheme.text }}
                selectedValue={this.state.minPoints}
                onValueChange={(itemValue) =>
                  this.setState({ minPoints: itemValue })
                }
              >
                <Picker.Item label="0" value={0} />
                <Picker.Item label="20" value={20} />
                <Picker.Item label="40" value={40} />
                <Picker.Item label="70" value={70} />
                <Picker.Item label="100" value={100} />
                <Picker.Item label="140" value={140} />
                <Picker.Item label="200" value={200} />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={{ color: this.state.myTheme.text }}>Max Points</Text>

              <Picker
                style={{
                  color: this.state.myTheme.text,
                  height: 50,
                  width: 100,
                  opacity: this.state.pickerOpacity,
                }}
                selectedValue={this.state.maxPoints}
                onValueChange={(itemValue) =>
                  this.setState({ maxPoints: itemValue })
                }
              >
                <Picker.Item label="20" value={20} />
                <Picker.Item label="40" value={40} />
                <Picker.Item label="70" value={70} />
                <Picker.Item label="100" value={100} />
                <Picker.Item label="140" value={140} />
                <Picker.Item label="200" value={200} />
              </Picker>
            </View>
          </View>
          <Button
            color="#09A693"
            title="Szukaj"
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
