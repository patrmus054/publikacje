import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
//import { Picker } from "@react-native-community/picker";
import { Picker } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
class FilterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      minPoints: 0,
      maxPoints: 200,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Podaj tytuł czasopisma"
          value={this.state.title}
          style={{ height: 50, width: 300 }}
          onChangeText={(text) => this.setState({ title: text })}
          underlineColorAndroid="#000"
        />
        <View>
          <View style={styles.pickerContainer}>
            <Text>Min Points</Text>
            <Picker
              style={{ height: 50, width: 100 }}
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
            <Text>Max Points</Text>
            <Picker
              style={{ height: 50, width: 100 }}
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
        <Button color="#09A693" title="Szukaj" />
      </View>
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
  button: {
    width: 100,
    height: 35,

    borderRadius: 20,
    backgroundColor: "#09A693",
  },
});
export default FilterView;
