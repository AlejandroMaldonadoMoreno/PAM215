import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalles() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Detalles De Usuario</Text>
        <Text style={styles.subtitulo}>Usando Navegación Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,

    },
    subtitulo: {
    fontSize: 18,
    color: '#0055ff',
    },
});
