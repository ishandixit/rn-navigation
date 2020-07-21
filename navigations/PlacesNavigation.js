import React from "react";
import { Platform, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "../constant/Colors";
import PlaceListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";

const Stack = createStackNavigator();

const PlacesNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : ""
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,

          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}>
        <Stack.Screen
          name="Places"
          component={PlaceListScreen}
          options={({ navigation, route }) => ({
            headerTitle: "All Places",
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate("NewPlace");
                }}
                title="Add Places"
                icon={Platform.OS === "android" ? "md-add" : "ios-add"}
                color={Colors.primary}
              />
            )
          })}
        />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} 
            options={({route})=>({
                headerTitle:route.params.placeTitle
            })}
        />
        <Stack.Screen name="NewPlace" component={NewPlaceScreen} 
        options={({})=>({
            headerTitle:"Add Places"
        })}
        />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default PlacesNavigator;
