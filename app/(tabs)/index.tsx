import Buttons from "@/components/Buttons";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require('../../assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
     <View style={styles.imagecontainer}>
      <ImageViewer ImageValue={PlaceholderImage}/>
     </View>
     <View style={styles.containersec}>
      <Buttons theme='primary' label="Choose a Photo"/>
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
