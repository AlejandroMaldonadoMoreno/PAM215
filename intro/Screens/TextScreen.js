import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function  TextScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Proximamente por Dulce Ariadna</Text>
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

});

