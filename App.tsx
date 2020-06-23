import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import PublicationList from "./src/ui/publikacje/PublicationList";
import DetailsForm from "./src/ui/szczegoly/DetailsForm";
import FilterView from "./src/ui/filtry/FilterView";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MagazineList">
        <Stack.Screen
          name="MagazineList"
          component={PublicationList}
          options={{ title: "Welcome" }}
          initialParams={{ title: "", minPoints: 0, maxPoints: 200 }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsForm}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="Parametry"
          component={FilterView}
          options={{ title: "Parametry" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
