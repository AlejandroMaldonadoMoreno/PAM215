import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function  FlatListScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Proximamente por Diego Espindola</Text>
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

