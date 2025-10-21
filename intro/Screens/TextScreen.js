import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';

export default function  TextScreen() {
    const [nombre, setNombre] = useState('');
    const [contrasenia, setContra] = useState('');
    const [telefono, setTelefono] = useState('');

    const mostrarAlerta= ()=>{
        if(nombre.trim() === '' || contrasenia.trim() === '' || telefono.trim() === ''){
            Alert.alert("Error los campos estan en blanco (Móvil)");
            alert("Llena todo los campos (web)");
        }else{
            Alert.alert("Datos Ingresados\n" +
                `Nombre: ${nombre}\nContraseña: ${contrasenia}\nTeléfono: ${telefono}`);
            alert("Datos Ingresados\n" +
                `Nombre: ${nombre}\nContraseña: ${contrasenia}\nTeléfono: ${telefono}`)
        }
    }



    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> TextInput & Alert </Text>
            <Text  style={styles.etiquetas}> Nombre: </Text>
            <TextInput
                placeholder={'Escribe tu nombre aquí'}
                value={nombre}
                onChangeText={setNombre}
                style={styles.input}
            />
            <Text style={styles.etiquetas}> Contraseña: </Text>
            <TextInput
                placeholder={'Escribe tu contraseña aquí'}
                secureTextEntry={true}
                value={contrasenia}
                onChangeText={setContra}
                style={styles.input}
            />
            <Text  style={styles.etiquetas}> Telefono: </Text>
            <TextInput
                keyboardType={'phone-pad'}
                placeholder={'Escribe tu telefono aquí'}
                value={telefono}
                onChangeText={setTelefono}
                style={styles.input}
            />

            <Button
                onPress={mostrarAlerta}
                title={'Mostrar Alerta'}
                color={'#00345e'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b7cfff',
    },
    titulo:{
        fontSize: 25,
        fontFamily: 'Avenir',
        color: 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 20,
    },
    etiquetas: {
        fontSize: 15,
        marginBottom: 5,
        marginTop: 5,
    },
    input: {
     width: '80%',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
    },


});
