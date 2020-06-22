import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { formatDate, getCountdownParts } from "../../data/api";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
  },
  date: {
    fontWeight: "200",
    fontSize: 15,
    color: "#bdbdbd",
    width: "30%",
    textAlign: "right",
  },
  title: {
    fontSize: 15,
    fontWeight: "300",
    marginLeft: 7,
    textAlign: "left",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  item: {
    width: "25%",
    flex: 1,
  },
  itemText: {
    fontSize: 40,
    textAlign: "center",
  },
  itemLabel: {
    fontSize: 13,
    fontWeight: "100",
    color: "#a3a3a3",
    textAlign: "center",
    paddingTop: 0,
  },
});

export default function PublicationCard({ event }) {
  //const { days, hours, minutes, seconds } = getCountdownParts(event.date);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.date}>Tu może coś być</Text>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Text style={styles.itemText}>{event.title}</Text>
        </View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}>
          <Text style={styles.itemText}>{event.points}</Text>
        </View>
      </View>
    </View>
  );
}

PublicationCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
  }),
};
