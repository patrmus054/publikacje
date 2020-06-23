import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import PublicationList from "./src/ui/publikacje/PublicationList";
import DetailsForm from "./src/ui/szczegoly/DetailsForm";
import FilterView from "./src/ui/filtry/FilterView";
import SearchButton from "./src/component/searchButton";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MagazineList">
        <Stack.Screen
          name="MagazineList"
          component={PublicationList}
          initialParams={{ title: "", minPoints: 0, maxPoints: 200 }}
          options={({ navigation }) => ({
            headerRight: () => (
              <View>
                <SearchButton
                  onClick={() => {
                    navigation.navigate("FilterView");
                  }}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#53D3CC",
            },
            headerTintColor: "#fff",
            title: "Magazine List",
          })}
        />
        <Stack.Screen
          name="Details"
          component={DetailsForm}
          options={({ navigation }) => ({
            headerRight: () => (
              <View>
                <SearchButton
                  onClick={() => {
                    navigation.navigate("FilterView");
                  }}
                />
              </View>
            ),
            headerStyle: {
              backgroundColor: "#53D3CC",
            },
            headerTintColor: "#fff",
            title: "Details",
          })}
        />
        <Stack.Screen
          name="FilterView"
          component={FilterView}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#53D3CC",
            },
            headerTintColor: "#fff",
            title: "Filters",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
