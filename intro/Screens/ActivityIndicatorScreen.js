import React, {useState} from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';

export default function  ActivityIndicatorScreen() {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
    };
    if (loading) {
        return(
        <View style={styles.container}>
            <View >
                <ActivityIndicator
                    size="large"
                    animating={true}
                    color="blue"
                    hidesWhenStopped={true}
                />

                <Text style={styles.texto}>Cargando...</Text>
            </View>
        </View>

        );

    }
    return (
      <View style={styles.container}>
         <Text style={styles.texto}>Actividad Indicator</Text>
            <Pressable style={styles.boton} title="Cargar" onPress={startLoading} >
                <Text style={styles.textoBoton}>Cargar</Text>
            </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#80c4ff',
    },
    texto:{
        marginBottom: 20,
        fontSize: 18,
        fontWeight: '400',
        color: '#000000',
    },
    boton:{
        backgroundColor:'#002aff',
        borderRadius:20,
        width:'35%',
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
    },
    textoBoton:{
        color:'white',
        fontSize:18,
        padding:10,
    },


});

