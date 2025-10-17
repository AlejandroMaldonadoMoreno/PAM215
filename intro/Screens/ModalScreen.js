import React, { useState } from 'react';
import {View, Text, StyleSheet, Modal, Pressable } from 'react-native';

export default function  ModalScreen() {

    const [visible, setVisible] = useState(false);

   const abrirModal = () => setVisible(true);
   const cerrarModal = () => setVisible(false);

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Proximamente por Leonardo</Text>

            <Pressable style={styles.botonAbrir} onPress={abrirModal}>
                <Text style={styles.texto}> Abrir Modal </Text>
            </Pressable>

            <Modal
                visible={visible}
                animationType='slide'//none slide y fade
                //transparent={true} //sirve para ver el fondo
                onRequestClose={cerrarModal}//opcion solo para andorid
                onShow={() => console.log('Modal mostrado')}
                 >
                <View style={styles.contenedorModal}>
                    <Text style={styles.texto}> Aqui va el contenido del modal </Text>

                    <Pressable style={styles.botonCerrar} onPress={cerrarModal}>
                        <Text style={styles.texto}> Cerrar Modal </Text>
                    </Pressable>



                </View>

            </Modal>


        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    botonAbrir: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    botonCerrar: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    texto: {
        color: 'white',
        fontSize: 16,
    },
    contenedorModal: {
        backgroundColor: '#8fa1ff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }

});

