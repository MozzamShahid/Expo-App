import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'

type Props = {
    ImageSource: string,
}

export default function ImageViewer({ImageSource} : Props){
    return (
        <Image style={styles.image} source={ImageSource}/>
    )
}

const styles = StyleSheet.create({
    image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  }
})