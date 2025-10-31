import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, Pressable, TextInput, Switch, Alert} from 'react-native';

export default function LoginScreen() {
    const [modalVisible, setModalVisible] = useState(null);
    const [alertas, setAlertas] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    const validacionLogin=()=>{
        if(correo.trim() === '' || contrasenia.trim() === ''){
            Alert.alert("Error los campos estan en blanco (Móvil)");
            return false;
        }
        if(!correo.includes('@') || !correo.includes('.')){
            Alert.alert("El correo no es valido (Móvil)");
            return false;
        }

        Alert.alert('Inicio de sesión exitoso', 'Bienvenido de nuevo!');
        return true;
    }
    const validacionRegistro=()=>{
        if(nombre.trim() === '' && apellidos.trim() === '' && telefono.trim() === '' && correo.trim() === '' && contrasenia.trim() === '' && alertas === false){
            Alert.alert("Error los campos estan en blanco (Móvil)");
            return false;
        }
        if(!correo.includes('@') || !correo.includes('.')){
            Alert.alert("El correo no es valido (Móvil)");
            return false;
        }
        if(telefono.length < 10){
            Alert.alert("El número de teléfono no es válido (Móvil)");
            return false;
        }

        if( nombre === ''){
            Alert.alert("El número de teléfono no es válido (Móvil)");
            return false;
        }

        Alert.alert('Registro exitoso', '¡Bienvenido a la aplicación de ahorro!');
        return true;
    }

    return (
    <View style={styles.container}>
      <Text style={styles.TituloPrincipal}>Bienvenido a tu aplicación de ahorro</Text>

        <Pressable style={styles.boton} onPress={()=>setModalVisible('login')}>
            <Text style={styles.tituloBoton}> Iniciar Sesión </Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={()=>setModalVisible('registro')}>
            <Text style={styles.tituloBoton}> Registrarse </Text>
        </Pressable>

        <Modal
            visible={modalVisible === 'login'}
            animationType="slide"
            transparent={false}
            onRequestClose={() => setModalVisible(null)}
        >
            <View style={styles.containerMain}>

                <View style={styles.Encabezado}>
                    <View style={styles.Salir}>
                        <Pressable onPress={() => setModalVisible(null)}>
                            <Text style={styles.Atras}>‹ Atras</Text>
                        </Pressable>

                    </View>

                    <Text style={styles.Titulo}>Iniciar sesión</Text>
                </View>


                <View style={styles.Contain5}>
                    <Text style={styles.label}>Correo electrónico:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ejemplo@gmail.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={correo}
                        onChangeText={setCorreo}
                    />

                    <Text style={styles.label}>Contraseña:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="************"
                        secureTextEntry
                        value={contrasenia}
                        onChangeText={setContrasenia}
                    />

                    <Pressable style={styles.BotonInicio}  onPress={() => { if (validacionLogin()) setModalVisible(null); }}>
                        <Text style={styles.BotonInicioText}>Iniciar sesión</Text>
                    </Pressable>


                </View>


                <View style={styles.Card2}>
                    <Text style={styles.CardText2}> ¿Aún no tienes cuenta? </Text>
                    <Pressable onPress={() => setModalVisible('registro') }>
                        <Text style={styles.BotonRegistro}> Regístrate</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Modal
            visible={modalVisible === 'registro'}
            animationType="slide"
            transparent={false}
            onRequestClose={() => setModalVisible(null)}
        >
            <View style={styles.containerMain}>

                <View style={styles.Encabezado2}>
                    <View style={styles.Salir}>
                        <Pressable onPress={() => setModalVisible(null)}>
                            <Text style={styles.Atras}>‹ Atras</Text>
                        </Pressable>

                    </View>

                    <Text style={styles.Titulo}>Registro</Text>
                </View>


                <View style={styles.Contain6}>
                    <Text style={styles.label}>Nombre:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe tu nombre"
                        keyboardType="default"
                        autoCapitalize="words"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <Text style={styles.label}>Apellidos:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe tus apellidos"
                        keyboardType="default"
                        autoCapitalize="words"
                        value={apellidos}
                        onChangeText={setApellidos}
                    />
                    <Text style={styles.label}>Número de teléfono:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe tu numero de teléfono"
                        keyboardType="phone-pad"
                        autoCapitalize="none"
                        value={telefono}
                        onChangeText={setTelefono}
                    />
                    <Text style={styles.label}>Correo electrónico:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe tu correo electrónico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={correo}
                        onChangeText={setCorreo}
                    />

                    <Text style={styles.label}>Contraseña:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="************"
                        secureTextEntry
                        value={contrasenia}
                        onChangeText={setContrasenia}
                    />
                    <View style={styles.switchContainer}>

                        <Text style={styles.switchLabel}>
                            Enviar alertas de presupuesto a mi correo
                        </Text>
                        <Switch
                            value={alertas}
                            onValueChange={setAlertas}
                            trackColor={{ false: '#d1d5db', true: '#0a57d9' }}
                            thumbColor={alertas ? '#ffffff' : '#f4f3f4'}
                        />
                    </View>

                    <Pressable style={styles.BotonInicio} onPress={() => { if (validacionRegistro()) setModalVisible(null); }}>
                        <Text style={styles.BotonInicioText}>Iniciar sesión</Text>
                    </Pressable>


                </View>



            </View>

        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      backgroundColor: '#002359',
      gap:20,
  },
    containerMain: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    Titulo: {
    fontSize: 25,
    fontWeight: '500',
    color: '#FFFFFF',
        alignItems: 'center',
    },
    TituloPrincipal: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        alignItems: 'center',
    },
    boton: {
    backgroundColor: '#ffffff',
        borderRadius: 15,
        paddingVertical: 14,
        paddingHorizontal: 20,
        minWidth:'60%',
        maxWidth:300,
        alignItems: 'center',
  },
    tituloBoton: {
        fontSize: 20,
        fontWeight: '500',
    },
    Encabezado: {
        backgroundColor: '#002359',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingVertical: 16,
        paddingBottom: 28,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    Encabezado2: {
        backgroundColor: '#002359',
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingVertical: 16,
        paddingBottom: 28,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    Salir: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    Atras: {
        color: '#cfe2ff',
        fontWeight: '600',
        fontSize: 16,
    },

    Contain5: {
        backgroundColor: '#fff',
            marginHorizontal: 20,
        minHeight: 300,
        marginTop: -22,
        padding: 16,
        borderRadius: 16,
        elevation: 5,
        borderColor:'#171717',
        borderWidth: 1,

    },
    Contain6: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        minHeight: '75%',
        marginTop: -22,
        padding: 16,
        borderRadius: 16,
        elevation: 5,
        borderColor:'#171717',
        borderWidth: 1,

    },
    label: {
        color: '#4b5563',

        marginBottom: 6,
        fontSize: 13,
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        marginBottom: 14,
        minHeight: 55,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
    },

    BotonInicio: {
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a57d9',
        marginTop: 10,
        marginBottom: 8,
    },
    BotonInicioText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,

    },
    Card2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        paddingHorizontal: 16,
    },
    CardText2: {
        color: '#6b7280',
    },
    BotonRegistro: {
        color: '#0a57d9',
        fontWeight: '700',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 4,
    },
    switchLabel: {
        marginLeft: 8,
        color: '#4b5563',
        fontSize: 13,
        flexShrink: 1,
    },

});
