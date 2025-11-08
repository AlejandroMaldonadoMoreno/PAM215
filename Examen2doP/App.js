import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Easing, Animated, Button, ImageBackground, Switch } from 'react-native';

export default function App() {

    const[cargando, setCargando]=useState(true);
    const desvanecido = new Animated.Value(1);
    const [esEncendido, cambiarEncendido] = useState(false);
    const [esEncendido2, cambiarEncendido2] = useState(false);


    const [esEncendido3, cambiarEncendido3] = useState(false);
    const [esEncendido4, cambiarEncendido4] = useState(false);


    const [esEncendido5, cambiarEncendido5] = useState(false);
    const [esEncendido6, cambiarEncendido6] = useState(false);

    const apagarSwitches = () => {
        cambiarEncendido(false);
        cambiarEncendido2(false);
        cambiarEncendido3(false);
        cambiarEncendido4(false);
        cambiarEncendido5(false);
        cambiarEncendido6(false);
    };



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
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20, marginTop:40, gap:50}}>
              <View style={styles.contenedorTitulo}>
                  <Text style={styles.titulo}>Mis deberes</Text>
                  <Text style={styles.fecha}> Fecha: 07/11/2025</Text>
              </View>
              <Button title={'Reiniciar Tareas'} onPress={()=> apagarSwitches()}></Button>
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
                      <Text style={styles.texto}>Descripción: Barrer cada cuarto</Text>
                      <Text style={styles.texto}>Prioridad: Alta</Text>
                      <Text style={styles.texto}>Estatus: Pendiente</Text>
                      <Switch
                          value={esEncendido}
                          onValueChange={() => cambiarEncendido(!esEncendido)}
                          trackColor={{ false: 'gray', true: 'green' }}
                      />
                  </View>

                  <View style={styles.elementos2}>
                      <Text style={styles.texto}>Descripción: Barrer cada cuarto</Text>
                      <Text style={styles.texto}>Prioridad: Alta</Text>
                      <Text style={styles.texto}>Estatus: Pendiente</Text>
                      <Switch
                          value={esEncendido2}
                          onValueChange={() => cambiarEncendido2(!esEncendido2)}
                          trackColor={{ false: 'gray', true: 'green' }}
                      />
                  </View>
              </ScrollView>

          </View>
          <View style={styles.contScroll}>
              <Text style={styles.Tareas}>Comida</Text>
              <ScrollView
                  style={styles.scrollhorizontal}
                  horizontal={true}
                  nestedScrollEnabled={true}
                  showsHorizontalScrollIndicator={true}
              >

                  <View style={styles.elementos2}>
                      <Text style={styles.texto}>Descripción: Barrer cada cuarto</Text>
                      <Text style={styles.texto}>Prioridad: Alta</Text>
                      <Text style={styles.texto}>Estatus: Pendiente</Text>
                      <Switch
                          value={esEncendido3}
                          onValueChange={() => cambiarEncendido3(!esEncendido3)}
                          trackColor={{ false: 'gray', true: 'green' }}
                      />
                  </View>

                  <View style={styles.elementos2}>
                      <Text style={styles.texto}>Descripción: Barrer cada cuarto</Text>
                      <Text style={styles.texto}>Prioridad: Alta</Text>
                      <Text style={styles.texto}>Estatus: Pendiente</Text>
                      <Switch
                          value={esEncendido4}
                          onValueChange={() => cambiarEncendido4(!esEncendido4)}
                          trackColor={{ false: 'gray', true: 'green' }}
                      />
                  </View>



              </ScrollView>

          </View>

          <View style={styles.contScroll}>
              <Text style={styles.Tareas}>Escuela</Text>
              <ScrollView
                  style={styles.scrollhorizontal}
                  horizontal={true}
                  nestedScrollEnabled={true}
                  showsHorizontalScrollIndicator={true}
              >

                  <View style={styles.elementos2}>
                      <Text style={styles.texto}>Descripción: Barrer cada cuarto</Text>
                      <Text style={styles.texto}>Prioridad: Alta</Text>
                      <Text style={styles.texto}>Estatus: Pendiente</Text>
                      <Switch
                          value={esEncendido5}
                          onValueChange={() => cambiarEncendido5(!esEncendido5)}
                          trackColor={{ false: 'gray', true: 'green' }}
                      />
                  </View>

                  <View style={styles.elementos2}>
                      <Text style={styles.texto}>Descripción: Barrer cada cuarto</Text>
                      <Text style={styles.texto}>Prioridad: Alta</Text>
                      <Text style={styles.texto}>Estatus: Pendiente</Text>
                      <Switch
                          value={esEncendido6}
                          onValueChange={() => cambiarEncendido6(!esEncendido6)}
                          trackColor={{ false: 'gray', true: 'green' }}
                      />
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
        width:'60%',
        alignItems:'center',
        borderRadius:10,
        marginTop:-60,
    },
    titulo:{
        fontSize:32,
        fontWeight:'bold',
        color:'#333',
    },

    contScroll:{
        backgroundColor:'rgba(255, 255, 255, 0.7)',
        padding:20,
        width:'100%',
        borderRadius:20,
        marginTop:20,
        alignItems:'center',
    },
    elementos2:{
        width: 250,
        height: 100,
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
