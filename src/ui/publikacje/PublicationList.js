import React, { Component } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import PublicationCard from "./PublicationCard";
import { getMagazines } from "../../data/MagazineRepository";
import { useTheme } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loader: {
    height: 40,
    marginTop: 10,
    textAlign: "center",
  },
});

class PublicationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      magazines: [],
      isLoading: false,
      hasNext: true,
      title: props.route.params.title,
      minPoints: props.route.params.minPoints,
      maxPoints: props.route.params.maxPoints,
      myTheme: props.theme,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      currentPage: 1,
      magazines: [],
      title: nextProps.route.params.title,
      minPoints: nextProps.route.params.minPoints,
      maxPoints: nextProps.route.params.maxPoints,
      isLoading: false,
    });
    console.log(this.state.currentPage);
    this.componentDidMount();
  }
  async componentDidMount() {
    console.log("D");
    this.setState(
      { isLoading: true, magazines: [], currentPage: 1 },
      this.fetchMagazines
    );
  }

  async fetchMagazines() {
    try {
      const response = await getMagazines(
        this.state.currentPage,
        (title = this.state.title),
        (minPoints = this.state.minPoints),
        (maxPoints = this.state.maxPoints)
      );

      this.setState({
        magazines: [...this.state.magazines, ...response.magazines],
        hasNext: response.hasNext,
        currentPage: this.state.currentPage + 1,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
    }
  }
  c = () => {
    this.setState({
      currentPage: 1,
      magazines: [],
    });
  };
  handleAddEvent = (id) => {
    this.props.navigation.navigate("Details", {
      id: id,
    });
  };
  handleLoadMore = () => {
    if (this.state.hasNext) {
      this.setState({ isLoading: true }, this.fetchMagazines);
    }
  };
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: "#4B4949",
        opacity: 0.29,
        height: 1,
      }}
    />
  );

  footer = () => {
    return this.state.isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };
  render() {
    return (
      <FlatList
        data={this.state.magazines}
        style={{
          ...styles.list,
          backgroundColor: this.state.myTheme.backgroundColor,
        }}
        keyExtractor={(item, index) => index.toString()}
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
        onEndReachedThreshold={0.5}
        onEndReached={this.handleLoadMore}
        ListFooterComponent={this.footer}
      />
    );
  }
}

export default (props) => {
  const { colors } = useTheme();
  console.log(colors);
  return <PublicationList {...props} theme={colors} />;
};
