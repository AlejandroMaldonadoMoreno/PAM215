//1. imports: Zonas de importaciones
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ContadorScreen from "./contadorScreen";
import BotonesScreen from "./BotonesScreen";
import TextScreen from "./TextScreen";
import ImageScreen from "./ImageScreen";
import ScrollViewScreen from "./ScrollViewScreen";
import ActivityIndicatorScreen from "./ActivityIndicatorScreen";
import FlatListScreen from "./FlatListScreen";
import Bottomcreen from "./BottomScreen";
import ModalScreen from "./ModalScreen";

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

        default:
            return (
                <View style={styles.container}>
                    <Text>Menu de practicas</Text>
                    <Button onPress={() => setScreen('contador')} title={'Practica: Contador'} color={'red'} />
                    <Button onPress={() => setScreen('botones')} title={'Practica: Buttons'} color={'green'} />
                    <Button onPress={() => setScreen('Text_Input')} title={'Practica: Text Input'} color={'blue'} />
                    <Button onPress={() => setScreen('ImageBackground')} title={'Practica: Image Background'} color={'yellow'} />
                    <Button onPress={() => setScreen('ScrollView')} title={'Practica: ScrollView'} color={'orange'} />
                    <Button onPress={() => setScreen('ActivityIndicator')} title={'Practica: Activity Indicator'} color={'purple'} />
                    <Button onPress={() => setScreen('FlatList')} title={'Practica: FlatList'} color={'brown'} />
                    <Button onPress={() => setScreen('ModalScreen')} title={'Practica: ModalScreen'} color={'pink'} />
                    <Button onPress={() => setScreen('Bottom_Sheet')} title={'Practica: Bottom Sheet'} color={'gray'} />
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
        gap: 20,
    },
});
