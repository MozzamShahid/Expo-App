import { Link, Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function NotFound() {
    return(
        <>
                <Stack.Screen options={{ title: "Not Found" }} />
        <View style={styles.container}>
        <Text style={styles.text}>Return to Home</Text>
        <Link href='/' style={styles.button}>Go to Home!</Link>
        </View>
        </>
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
        color:'#ffff',
        fontSize: 20,
    },
    button:{
        textDecorationLine: 'underline',
        color:'#ffff',
    }
})