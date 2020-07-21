import React,{useState} from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet
} from "react-native";
import {useDispatch} from "react-redux";
import Colors from "../constant/Colors";
import ImagePicker from "../components/ImageSelector";
import LocationPicker from "../components/LocationPicker";
import * as Actions from "../store/actions";


const NewPlaceScreen = ({navigation}) => {
    const [value,setValue]=useState('');
    const [selectedImage,setSelectedImage]=useState('');
    const dispatch=useDispatch();
    const changeTextHandler=(text)=>{
        setValue(text);
    };
    const savePlacesHandler=()=>{
        dispatch(Actions.addPlace(value,selectedImage));
        navigation.goBack();
    };
    const imageTakenHandler=(imageUri)=>{
      setSelectedImage(imageUri);
    };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.textInput} value={value} onChangeText={changeTextHandler} />
        <ImagePicker onImageTaken={imageTakenHandler}/>
        <LocationPicker />
        <Button title="Save Place" color={Colors.primary} onPress={savePlacesHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30
  },
  label: {
    marginBottom: 10,
    fontSize: 20
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});

export default NewPlaceScreen;
