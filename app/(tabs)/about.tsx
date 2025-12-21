import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello Ich Bin Mozzam!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
 backgroundColor:'#25292e',
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
},
text:{
    color: '#ffff',
}
})