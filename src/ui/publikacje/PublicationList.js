import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import PublicationCard from "./PublicationCard";
import { getMagazines } from "../../data/MagazineRepository";
const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#F3F3F3",
  },
});

class PublicationList extends Component {
  state = {
    currentPage: 1,
    magazines: [],
  };

  async componentDidMount() {
    try {
      await console.log("Before fetched");
      const response = await getMagazines((page = this.state.currentPage));
      await console.log("Fetched", response.magazines.length);

      this.setState({
        magazines: response.magazines,
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleAddEvent = () => {
    this.props.navigation.navigate("form");
  };

  render() {
    return (
      <FlatList
        data={this.state.magazines}
        style={styles.list}
        keyExtractor={(item) => item._id}
        renderItem={({ item, separators }) => (
          <PublicationCard
            event={{ title: item.Title1, points: item.Points[0].Value }}
          />
        )}
        onPress={this.handleAddEvent}
      />
    );
  }
}

export default PublicationList;
