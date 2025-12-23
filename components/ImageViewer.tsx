import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'

type Props = {
    ImageValue: string,
}

export default function ImageViewer({ImageValue} : Props){
    return (
        <Image style={styles.image} source={ImageValue}/>
    )
}

const styles = StyleSheet.create({
    image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  }
})