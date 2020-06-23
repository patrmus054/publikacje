import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { getMagazineById } from "../../data/MagazineRepository";
class DetailsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.route.params.id,
      isLoading: true,
    };
  }

  async componentDidMount() {
    const response = await getMagazineById(this.state.id);
    await this.setState({ magazine: response, isLoading: false });
  }
  render() {
    return this.state.isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <View>
        <ScrollView>
          <Text>Title 1</Text>
          <Text>{this.state.magazine.Title1}</Text>
          <Text>Title 2</Text>
          <Text>{this.state.magazine.Title2}</Text>
          <Text>ISSN</Text>
          <Text>{this.state.magazine.issn}</Text>
          <Text>E-ISSN</Text>
          <Text>{this.state.magazine.e_issn}</Text>
          <Text>ISSN 2</Text>
          <Text>{this.state.magazine.issn2}</Text>
          <Text>E-ISSN 2</Text>
          <Text>{this.state.magazine.e_issn2}</Text>
          <Text>Categories</Text>
          <Text>{this.state.magazine.Categories.join(",")}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    height: 40,
    marginTop: 10,
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 14,
  },
});

export default DetailsForm;
