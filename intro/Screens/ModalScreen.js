import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, Pressable, TextInput } from 'react-native';

export default function ModalScreen() {

    const [mostrar, setMostrar]=useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bienvenido</Text>

            <Pressable style={styles.boton} onPress={()=> setMostrar('login')}>
                <Text style={styles.text}>Iniciar Sesión</Text>
            </Pressable>

            <Pressable style={styles.boton} onPress={()=> setMostrar('registro')}>
                <Text style={styles.text}>Registrarse</Text>
            </Pressable>

            <Pressable style={styles.boton} onPress={()=> setMostrar('alerta')}>
                <Text style={styles.text}>Alertas</Text>
            </Pressable>

            <Modal
                animationType='slide'
                transparent={true}
                visible={mostrar === 'login'}
                onRequestClose={()=> setMostrar(null)}
            >
                <View style={styles.container2}>

                    <Text style={styles.titulo}>Formulario Iniciar Sesión</Text>

                    <TextInput placeholder='Ingrese su Usuario' style={styles.input}/>
                    <TextInput placeholder='Ingrese su contraseña' secureTextEntry={true} style={styles.input}/>

                    <Pressable style={styles.boton} onPress={()=> setMostrar(null)}>
                        <Text style={styles.text}>Iniciar Sesión</Text>
                    </Pressable>

                </View>

            </Modal>

            <Modal
                animationType='slide'
                transparent={false}
                visible={mostrar === 'registro'}
                onRequestClose={()=> setMostrar(null)}
            >
                <View style={styles.container2}>

                    <Text style={styles.titulo}>Formulario de Registro</Text>

                    <TextInput placeholder='Ingrese su Usuario' style={styles.input}/>
                    <TextInput placeholder='Ingrese su Email' keyboardType={'email-address'} style={styles.input}/>
                    <TextInput placeholder='Ingrese su contraseña' secureTextEntry={true} style={styles.input}/>

                    <Pressable style={styles.boton} onPress={()=> setMostrar(null)}>
                        <Text style={styles.text}>Registrarse</Text>
                    </Pressable>

                </View>

            </Modal>

            <Modal
                animationType='fade'
                transparent={true}
                visible={mostrar === 'alerta'}
                onRequestClose={()=> setMostrar(null)}
            >

                <View style={styles.container3}>

                    <View style={styles.containerAlerta}>

                        <Text style={styles.textAlerta}>Esto es una alerta</Text>

                        <View style={styles.containerBoton}>

                            <Pressable style={styles.boton1} onPress={()=> setMostrar(null)}>
                                <Text style={styles.text}>Ok</Text>
                            </Pressable>

                            <Pressable style={styles.boton2} onPress={()=> setMostrar(null)}>
                                <Text style={styles.text}>Cerrar</Text>
                            </Pressable>

                        </View>

                    </View>

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
        backgroundColor: '#fff',
    },
    container2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#a1bfffff',
    },
    container3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.7)',
    },
    boton:{
        backgroundColor:'#002aff',
        padding:15,
        borderRadius:20,
        marginBottom:15,
        width:'70%',
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize:18,
        fontWeight:'500'
    },
    titulo:{
        fontSize: 25,
        marginBottom: 20,
    },
    input:{
        width: '80%',
        borderWidth:1,
        borderColor:'black',
        borderRadius:10,
        marginBottom:20,
        padding:15,
        backgroundColor:'white',
    },
    containerAlerta:{
        width:300,
        height:200,
        backgroundColor:'#ffffffff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    textAlerta:{
        fontSize:20,
        color:'black',
    },
    boton1:{
        backgroundColor: '#002aff',
        padding: 15,
        borderRadius: 20,
        marginRight: 10,
        width: 100,
        alignItems: 'center',
    },
    boton2:{
        backgroundColor: '#F44336',
        padding: 15,
        borderRadius: 20,
        marginLeft: 10,
        width: 100,
        alignItems: 'center',
    },
    containerBoton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '80%',
    },
});
