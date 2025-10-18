import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, Button} from 'react-native';

export default function BotonesScreen() {
    const [esEncendido, cambiarEncendido] = useState(false);
    const [color, cambiarColor] = useState('yellow');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Control de Luz</Text>
            {/* Controlador ternario */}
            <Text style={[styles.text, { color: esEncendido ? color : 'black' }]}>
                {esEncendido ? 'Luz encendida' : 'Luz apagada'}
            </Text>
            <Switch
                value={esEncendido}
                onValueChange={() => cambiarEncendido(!esEncendido)}
                trackColor={{ false: 'gray', true: 'yellow' }}
            />

            <View style={styles.cajaBotones}>
                <Button title={'Amarillo'} color={'#b9a100'}  onPress={() => esEncendido && cambiarColor('yellow')} />
                <Button title={'Azul'} color={'blue'}  onPress={() =>esEncendido && cambiarColor('blue')} />
                <Button title={'Rojo'} color={'red'} onPress={() =>esEncendido && cambiarColor('red')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5d5d5d',
    },
    text: {
        fontSize: 30,
        marginBottom: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    cajaBotones: {
       flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
});
