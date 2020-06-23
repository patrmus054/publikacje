import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { useTheme } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 11,

    paddingTop: 20,
    height: 59,
  },
  titleStyle: {
    flex: 0.8,
    textAlign: "left",
  },
  pointsStyle: {
    flex: 0.3,
    textAlign: "right",
    paddingRight: 11,
  },
  textStyle: {
    fontSize: 16,
    justifyContent: "flex-end",
  },
});

export default function PublicationCard({ magazine }) {
  //const { days, hours, minutes, seconds } = getCountdownParts(event.date);
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={() => magazine.onSelect(magazine.id)}>
      <View style={styles.container}>
        <Text
          style={{
            ...styles.textStyle,
            ...styles.titleStyle,
            color: colors.text,
          }}
        >
          {magazine.title}
        </Text>
        <Text
          style={{
            ...styles.textStyle,
            ...styles.pointsStyle,
            color: colors.text,
          }}
        >
          {magazine.points}
        </Text>
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
