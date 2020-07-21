import React from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet, FlatList } from "react-native";
import PlaceItem from "../components/placeItem";

const PlacesListScreen = ({navigation}) => {
  const places = useSelector(state => state.places.places);
  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <PlaceItem
            image={itemData.item.imageUri}
            title={itemData.item.title}
            address={null}
            onSelect={()=>{navigation.navigate("PlaceDetail",{
                placeTitle:itemData.item.title,
                placeId:itemData.item.id
            })}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PlacesListScreen;
