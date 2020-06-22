import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import PublicationCard from "./PublicationCard";

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#F3F3F3",
  },
});

class PublicationList extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map((evt) => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000);

    const events = require("../../data/db.json").events.map((e) => ({
      ...e,
      date: new Date(e.date),
    }));
    this.setState({ events });
  }

  handleAddEvent = () => {
    this.props.navigation.navigate("form");
  };

  render() {
    return (
      <FlatList
        key="flatlist"
        data={this.state.events}
        style={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item, separators }) => <PublicationCard event={item} />}
        onPress={this.handleAddEvent}
      />
    );
  }
}

export default PublicationList;
