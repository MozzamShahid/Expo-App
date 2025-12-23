import Buttons from "@/components/Buttons";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require('../../assets/images/background-image.png')

export default function Index() {
  const [selectedImage, setselectedImage] = useState<string | undefined>(undefined)

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
    })

    if(!result.canceled){
      setselectedImage(result.assets[0].uri)
    } else {
      alert('Pick an image')
    }
  }

  return (
    <View style={styles.container}>
     <View style={styles.imagecontainer}>
      <ImageViewer ImageSource={selectedImage || PlaceholderImage} />
     </View>
     <View style={styles.containersec}>
      <Buttons onPress={pickImageAsync} theme='primary' label="Choose a Photo"/>
      <Buttons label="Use this Photo"/>
     </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
   backgroundColor: '#25292e',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagecontainer:{
    flex: 1,
  },
  containersec:{
    flex: 1/3,
  },
 
})
