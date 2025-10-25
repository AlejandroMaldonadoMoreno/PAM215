import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, Pressable, Switch, Alert, Animated, Easing} from 'react-native';

export default function LoginScreen() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const[cargando, setCargando]= useState(true);
    const desvanecido=new Animated.Value(1);


    const [esEncendido, cambiarEncendido] = useState(false);

    const mostrarAlerta= ()=>{
        if(nombre.trim() === '' && correo.trim() === '' && esEncendido === false){
            Alert.alert("Error, Debes llenar todos los campos y aceptar los terminos y condiciones");
        }else if(nombre.trim() === '' ){
            Alert.alert("Error, El nombre es obligatorio");
        }else if(correo.trim() === ''){
            Alert.alert("Error, El correo es obligatorio");
        }else if(!esEncendido){
            Alert.alert("Error, Debes aceptar los terminos y condiciones");
        } else if (!correo.includes('@') || !correo.includes('.')) {
            Alert.alert("Error", "Ingresa un correo válido (debe contener @ y un dominio)");
        }
        else{
            Alert.alert("Datos recibidos correctamente", `Nombre: ${nombre}\nCorreo: ${correo}`);
        }

    }
    useEffect(()=> {
        const timer = setTimeout(() => {
            Animated.timing(desvanecido, {
                toValue:0,
                duration: 500,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start(() => setCargando(false));

        }, 1500);
        return()=>clearTimeout(timer);
    }, []);

    if(cargando){
        return(
            <Animated.View
                style={[styles.splashcontainer, {opacity: desvanecido}]}
            >
                <ImageBackground
                    source={require('../assets/logo.jpg')}
                    resizeMode='center'
                    style={styles.splashImage}
                >

                    <Text style={styles.splashText}> Cargando... </Text>

                </ImageBackground>
            </Animated.View>
        );
    }


  return (

    <ImageBackground style={styles.container}
    source={require('../assets/imagenfondo.jpeg')}
    resizeMode='cover'
    >

        <View style={styles.contenedor2}>
            <Text style={styles.Titulo}>Registro de Usuario</Text>

            <TextInput
                placeholder={'Escribe tu nombre completo'}
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                placeholder={'ejemplo@gmail.com'}
                style={styles.input}
                value={correo}
                onChangeText={setCorreo}
                keyboardType='email-address'
            />
            <View style={styles.contenedor3}>
                <Text style={styles.textoTerminos}>Aceptar Terminos y Condiciones</Text>
                <Switch
                    value={esEncendido}
                    onValueChange={() => cambiarEncendido(!esEncendido)}
                    trackColor={{ false: 'gray', true: 'green' }}
                />
            </View>



            <Pressable style={styles.Boton} onPress={()=>{mostrarAlerta()}}>
                <Text style={styles.texto}>Registrarse</Text>
            </Pressable>

        </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    contenedor2: {
    width: '80%',
    height: '30%',
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    top: -5,
    },
    input: {
    fontSize: 15,
        margin:10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 15,
        width: '85%',
        height: '15%',

    },
    Boton: {
    marginTop: 15,
    backgroundColor: '#bdbdbd',
        width: '85%',
        height: '17%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    texto: {
    fontSize: 20,
        color:'white',
        fontWeight: 'bold',
    },
    contenedor3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: -10,
    },
    textoTerminos: {
        marginRight: 10,
    },
    splashcontainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:50,

    },
    splashImage:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',

    },
    splashText:{
      top: 120,
        fontSize:20,
        color:'black',
    }


});
