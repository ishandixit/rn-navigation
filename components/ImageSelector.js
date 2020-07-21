import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  Platform,
  Image
} from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Colors from "../constant/Colors";

const ImgPicker = ({onImageTaken}) => {
  const [pickedImage, setPickedImage] = useState("");
  const verifyMultiplePermission = async () => {
    const result = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    console.log("------------", result);
    if (result.status !== "granted") {
      Alert.alert(
        "Insuffient permissions",
        "You need to grant camera permissions to use this app",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    if (Platform.OS === "ios") {
      const hasPermissions = await verifyMultiplePermission();
      if (!hasPermissions) {
        return;
      }
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1
    });
    console.log(result);
    setPickedImage(result.uri);
    onImageTaken(result.uri);
  };
  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>No Image picked yet..!!</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginBottom:10
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ImgPicker;
