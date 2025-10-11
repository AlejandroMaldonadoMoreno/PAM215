
//1. imports: Zonas de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

//2. Main: Zona de componentes
export default function App() {
  const[contador, setContador]=useState(0);

  return (

    <View style={styles.container}>
      <Text>Contador: {contador}</Text>
        <Button title={'Incrementar'} onPress={()=>setContador(contador+1)}> </Button>
        <Button title={'Reiniciar'} onPress={()=>setContador(contador-contador)}></Button>
        <Button title={'Decrementar'} onPress={()=>setContador(contador-1)}></Button>

      <StatusBar style="auto" />
    </View>


  );
}

//3. Estilos: Zona de los estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
