import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { getMagazineById } from "../../data/MagazineRepository";
import { useTheme } from "@react-navigation/native";
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
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ ...styles.headerText, color: this.props.theme.text }}>
            Title 1
          </Text>
          <Text
            style={{ ...styles.descriptionText, color: this.props.theme.text }}
          >
            {this.state.magazine.Title1}
          </Text>
          <Text style={{ ...styles.headerText, color: this.props.theme.text }}>
            Title 2
          </Text>
          <Text
            style={{ ...styles.descriptionText, color: this.props.theme.text }}
          >
            {this.state.magazine.Title2}
          </Text>
          <Text style={{ ...styles.headerText, color: this.props.theme.text }}>
            ISSN
          </Text>
          <Text
            style={{ ...styles.descriptionText, color: this.props.theme.text }}
          >
            {this.state.magazine.issn}
          </Text>
          <Text style={{ ...styles.headerText, color: this.props.theme.text }}>
            E-ISSN
          </Text>
          <Text
            style={{ ...styles.descriptionText, color: this.props.theme.text }}
          >
            {this.state.magazine.e_issn}
          </Text>
          <Text style={{ ...styles.headerText, color: this.props.theme.text }}>
            ISSN 2
          </Text>
          <Text
            style={{ ...styles.descriptionText, color: this.props.theme.text }}
          >
            {this.state.magazine.issn2}
          </Text>
          <Text style={{ ...styles.headerText, color: this.props.theme.text }}>
            E-ISSN 2
          </Text>
          <Text
            style={{ ...styles.descriptionText, color: this.props.theme.text }}
          >
            {this.state.magazine.e_issn2}
          </Text>
          <Text style={{ ...styles.headerText, color: this.props.theme.text }}>
            Categories
          </Text>
          <Text
            style={{ ...styles.descriptionText, color: this.props.theme.text }}
          >
            {this.state.magazine.Categories.join(",")}
          </Text>
        </View>
      </ScrollView>
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
    paddingLeft: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  descriptionText: {
    fontSize: 14,
  },
});

export default (props) => {
  const { colors } = useTheme();
  return <DetailsForm {...props} theme={colors} />;
};
