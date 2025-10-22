import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated, Easing} from 'react-native';

export default function  ImageScreen() {
    const[cargando, setCargando]= useState(true);
    const desvanecido=new Animated.Value(1);

    useEffect(()=> {
        const timer = setTimeout(() => {
            Animated.timing(desvanecido, {
                toValue:0,
                duration: 800,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start(() => setCargando(false));

        }, 2000);
        return()=>clearTimeout(timer);
    }, []);

    if(cargando){
     return(
         <Animated.View
         style={[styles.splashcontainer, {opacity: desvanecido}]}
         >
             <ImageBackground
             source={require('../assets/img2.jpg')}
             resizeMode='center'
             style={styles.splashImage}
             >

                 <Text style={styles.splashText}> Cargando... </Text>

             </ImageBackground>
         </Animated.View>
     );
    }



    return (
        <ImageBackground
        source={require('../assets/img1.jpg')}
        style={styles.background}
        resizeMode='cover'
        >
            <Text style={styles.texto}>Bienvenid@ a mi app</Text>

        </ImageBackground>
        
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    texto:{
        color: 'white',
        fontSize: 24,
        fontweight: 'bold',
    },
    splashcontainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:50,

    },
    splashImage:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',

    },
    splashText:{
        position:'absolute',
        marginBottom:60,
        fontSize:20,
        color:'black',

    }

});

