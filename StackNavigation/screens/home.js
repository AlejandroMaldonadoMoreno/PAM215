
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a la pantalla principal</Text>

            <Pressable style={[styles.button, styles.buttonProfile]} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Ir a Perfil</Text>
            </Pressable>

            <Pressable style={[styles.button, styles.buttonSettings]} onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.buttonText}>Ir a Configuración</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },

    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 20,
        width: 180,
        alignItems: 'center',
    },

    buttonProfile: {
        backgroundColor: '#80BFFF',
    },

    buttonSettings: {
        backgroundColor: '#FFB080',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
