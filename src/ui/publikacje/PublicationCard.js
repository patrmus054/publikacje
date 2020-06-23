import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 11,
    paddingTop: 20,
    height: 59,
    paddingRight: 11,
  },
  textStyle: {
    fontSize: 16,
  },
});

export default function PublicationCard({ magazine }) {
  //const { days, hours, minutes, seconds } = getCountdownParts(event.date);

  return (
    <TouchableOpacity onPress={() => magazine.onSelect(magazine.id)}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{magazine.title}</Text>
        <Text style={styles.textStyle}>{magazine.points}</Text>
      </View>
    </TouchableOpacity>
  );
}

PublicationCard.propTypes = {
  magazine: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  }),
};
