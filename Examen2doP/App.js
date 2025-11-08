import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Easing, Animated, Button, ImageBackground } from 'react-native';

export default function App() {


    const[cargando, setCargando]=useState(true);
    const desvanecido = new Animated.Value(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            Animated.timing(desvanecido, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
            }).start(()=> setCargando(false));
        },2000);
        return () => clearTimeout(timer);
    }, []);

    if(cargando){
        return(
            <Animated.View
                style={[styles.splashcontainer, {opacity: desvanecido}]}
            >
                <Text>hbdsjd</Text>
            </Animated.View>

        );
    }

  return (
      <ImageBackground
          source={require('./assets/fondo1.png')}
          style={styles.splashImage}
          resizeMode='cover'
      >
          <View style={styles.contenedorTitulo}>
                <Text style={styles.titulo}>Mis deberes</Text>
              <Text style={styles.fecha}> Fecha: 07/11/2025</Text>
          </View>

          <View style={styles.contScroll}>
              <Text style={styles.Tareas}>Limpieza</Text>
              <ScrollView
                  style={styles.scrollhorizontal}
                  horizontal={true}
                  nestedScrollEnabled={true}
                  showsHorizontalScrollIndicator={true}
              >

                  <View style={styles.elementos2}>
                      <Text style={styles.texto}>Barrer cada cuarto</Text>

                  </View>

                  <View style={styles.elementos2}>
                      <Text style={styles.texto}>Lavar la ropa</Text>
                  </View>



              </ScrollView>

          </View>



      </ImageBackground>
  );
}

const styles = StyleSheet.create({
    splashcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#a8a8a8',
    },
    splashImage:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',

    },
    contenedorTitulo:{
        backgroundColor:'rgba(255, 255, 255, 0.7)',
        padding:20,
        whidth:'100%',
        alignItems:'center',
        borderRadius:10,
        marginTop:-290,
    },
    titulo:{
        fontSize:32,
        fontWeight:'bold',
        color:'#333',
    },

    contScroll:{
        backgroundColor:'rgba(255, 255, 255, 0.7)',
        padding:20,
        whidth:'100%',
        borderRadius:10,
        marginTop:20,
        alignItems:'center',
    },
    elementos2:{
        width: 200,
        height: 120,
        backgroundColor: 'rgb(153,176,255)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 10,
    },
    scrollhorizontal:{
        marginVertical: 10,
        width: '100%',
    },
    Tareas:{
        fontSize:24,
        fontWeight:'bold',
        color:'#333',

    }


});
