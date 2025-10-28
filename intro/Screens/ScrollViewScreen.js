import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

export default function ScrollViewScreen() {
    const scrollRef = useRef();

    const irAlFinal = () => {
        scrollRef.current?.scrollToEnd({ animated: true })
    };

    return (
        <ScrollView
            ref={scrollRef}
            style={styles.container}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
        >
            <View>
                <Button title="Ir al final" onPress={irAlFinal} />
            </View>

            <Text style={styles.titulo}>Practica: ScrollView</Text>
            <Text style={styles.titulo2}>Ejemplo desplazamiento vertical</Text>

            {[1, 2, 3, 4, 5].map((num) => (
                <View style={styles.elementos} key={num}>
                    <Text style={styles.text}>Elemento {num}</Text>
                </View>
            ))}

            <Text style={styles.titulo2}>Ejemplo de desplazamiento horizontal</Text>

            <ScrollView
                horizontal
                nestedScrollEnabled={true}
                style={styles.scrollhorizontal}
                showsHorizontalScrollIndicator={true}
            >
                {[...Array(12).keys()].map((num) => (
                    <View style={styles.elementos2} key={num}>
                        <Text style={styles.text}>Cuadro {num + 1}</Text>
                    </View>
                ))}
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5ec6ff',
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center',
    },
    titulo2: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
    },
    elementos: {
        width: '100%',
        height: 100,
        backgroundColor: '#336dff',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
    },
    elementos2: {
        width: 120,
        height: 120,
        backgroundColor: '#0032af',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'Courier',
        fontWeight: '900',
        textDecorationLine: 'underline',
    },
    scrollhorizontal: {
        marginVertical: 10,
        width: '100%',
    },
});
