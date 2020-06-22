import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import PublicationList from "./src/ui/publikacje/PublicationList";
import DetailsForm from "./src/ui/szczegoly/DetailsForm";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={PublicationList}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="form" component={DetailsForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
