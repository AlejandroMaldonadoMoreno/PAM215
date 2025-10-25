//1. imports: Zonas de importaciones
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import ContadorScreen from "./contadorScreen";
import BotonesScreen from "./BotonesScreen";
import TextScreen from "./TextScreen";
import ImageScreen from "./ImageScreen";
import ScrollViewScreen from "./ScrollViewScreen";
import ActivityIndicatorScreen from "./ActivityIndicatorScreen";
import FlatListScreen from "./FlatListScreen";
import Bottomcreen from "./BottomScreen";
import ModalScreen from "./ModalScreen";
import LoginScreen from "./LoginScreen";

//2. Main: Zona de componentes
export default function MenuScreen() {

    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'contador':
            return <ContadorScreen />;
        case 'botones':
            return <BotonesScreen />;
        case 'Text_Input':
            return <TextScreen />;
        case 'ImageBackground':
            return <ImageScreen />;
        case 'ScrollView':
            return <ScrollViewScreen />;
        case 'ActivityIndicator':
            return <ActivityIndicatorScreen />;
        case 'FlatList':
            return <FlatListScreen />;
        case 'ModalScreen':
            return <ModalScreen/>;
        case 'Bottom_Sheet':
            return <Bottomcreen />;
        case 'Login':
            return <LoginScreen/>;

        default:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Menu de practicas</Text>
                    <Pressable style={styles.button} onPress={() => setScreen('contador')}>
                        <Text style={styles.buttonText}>Practica: Contador</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => setScreen('botones')}>
                        <Text style={styles.buttonText}>Practica: Buttons</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => setScreen('Text_Input')}>
                        <Text style={styles.buttonText}>Practica: Text Input</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => setScreen('ImageBackground')}>
                        <Text style={styles.buttonText}>Practica: Image Background</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => setScreen('ScrollView')}>
                        <Text style={styles.buttonText}>Practica: ScrollView</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => setScreen('ActivityIndicator')}>
                        <Text style={styles.buttonText}>Practica: Activity Indicator</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => setScreen('FlatList')}>
                        <Text style={styles.buttonText}>Practica: FlatList</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => setScreen('ModalScreen')}>
                        <Text style={styles.buttonText}>Practica: ModalScreen</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => setScreen('Bottom_Sheet')}>
                        <Text style={styles.buttonText}>Practica: Bottom Sheet</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => setScreen('Login')}>
                        <Text style={styles.buttonText}>Repaso 1</Text>
                    </Pressable>
                </View>
            );
    }
}

//3. Estilos: Zona de los estilos y posicionamiento
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center', //eje x
        justifyContent: 'center', //eje y
        gap: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        width: 350,
        paddingVertical: 10,
        backgroundColor: '#0069d9',
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
