import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props= {
    label: string,
    theme?: 'primary',
    onPress?: () => void,
}

export default function Buttons({label, theme, onPress}: Props){
    if(theme === 'primary'){
    return(
         <View style={[styles.buttoncontainer, 
            {borderWidth: 2, borderColor: '#ffff', backgroundColor:'#fff', borderRadius: 18}
         ]}>
            <Pressable style={[styles.button, {backgroundColor: '#ffff' }]} onPress={onPress}>
            <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
            <Text style={[styles.buttontext, {color:'#25292e'}]}>{label}</Text>
            </Pressable>
        </View>
    )}

    return (
        <View style={styles.buttoncontainer}>
            <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttontext}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttoncontainer:{
        flex: 1,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{ 
        color: '#ffff',
        justifyContent: 'center',
        flexDirection: 'row',
    },
     buttonIcon: {
    paddingRight: 8,
  },
    buttontext:{
        color: '#fff',
        fontSize: 18,
    }
})

