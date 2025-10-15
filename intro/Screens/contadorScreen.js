//1. imports: Zonas de importaciones
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

//2. Main: Zona de componentes
export default function ContadorScreen() {
    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Contador</Text>
            <Text style={styles.texto2}>{contador}</Text>

            <View style={styles.contenedorBotones}>
                <Button color={'blue'} title={'Incrementar'} onPress={() => setContador(contador + 1)} />
                <Button color={'green'} title={'Reiniciar'} onPress={() => setContador(0)} />
                <Button color={'red'} title={'Decrementar'} onPress={() => setContador(contador - 1)} />
            </View>
        </View>
    );
}

//3. Estilos: Zona de los estilos y posicionamiento
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89f5ff',
        alignItems: 'center', //eje x
        justifyContent: 'center', //eje y
    },
    texto:{
        fontFamily:'Times New Roman',
        fontSize:30,
        color:'rgb(0,35,122)',
        fontWeight:'bold',
        fontStyle: 'italic',
        textDecorationLine: 'line-through',
    },
    texto2:{
        fontFamily:'Courier ',
        fontSize:40,
        color:'rgb(0,85,255)',
        fontWeight:'500',
        textDecorationLine: 'underline',
    },
    contenedorBotones:{
        marginTop:30,
        flexDirection: 'row',
        gap:20,
    },
});
