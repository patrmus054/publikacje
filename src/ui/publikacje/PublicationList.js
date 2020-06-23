import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import PublicationCard from "./PublicationCard";
import { getMagazines } from "../../data/MagazineRepository";
const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

class PublicationList extends Component {
  state = {
    currentPage: 1,
    magazines: [],
  };

  async componentDidMount() {
    try {
      const response = await getMagazines((page = this.state.currentPage));

      this.setState({
        magazines: response.magazines,
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleAddEvent = () => {
    this.props.navigation.navigate("Details");
  };

  render() {
    return (
      <FlatList
        data={this.state.magazines}
        style={styles.list}
        keyExtractor={(item) => item._id}
        renderItem={({ item, separators }) => (
          <PublicationCard
            magazine={{
              id: item._id,
              title: item.Title1,
              points: item.Points[0].Value.toString(),
              onSelect: this.handleAddEvent,
            }}
          />
        )}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: "#4B4949",
        opacity: 0.29,
        height: 1,
      }}
    />
  );
}

export default PublicationList;
