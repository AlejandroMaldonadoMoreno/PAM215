import {View, Text, StyleSheet, Pressable} from 'react-native';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

export default function Profile() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>

                <Text style={styles.title}> Perfil de usuario </Text>

                <Pressable style={[styles.button, styles.buttonSettings]} onPress={() => navigation.navigate('Detalles')}>
                    <Text style={styles.buttonText}>Ir a Detalles</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonSettings: {
        backgroundColor: '#0051ff',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
