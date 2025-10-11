import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

export default function App() {
  const[contador,setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Contador: </Text>
      <Text style={styles.texto2}> {contador} </Text>

      <View style={styles.contenedorBotones}>
      <Button color={"black"} title="Incrementar" onPress={() => setContador(contador + 1)}/>
      <Button color={"orange"} title="Quitar" onPress={() => setContador(contador - 1)}/>
      <Button color={"grey"} title="Reiniciar" onPress={() => setContador(0)}/>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//espacios
    backgroundColor: '#ffffffff',
    alignItems: 'center',//horizontal
    justifyContent: 'center',//vertical
  },  

  texto: {
    color: 'rgba(81, 0, 255, 0.46)',
    fontSize:30,
    fontFamily:'Times New Roman',// fuente
    fontWeight: '', //negritas(delineado)
    fontStyle:'italic',
    textDecorationLine:'line-through'//tachado

  },

  texto2:{
    color: 'rgba(255, 129, 129, 1)',
    fontSize:40,
    fontFamily:'Courier',// fuente
    fontWeight: '400', //negritas(delineado)
    textDecorationLine:'underline'//tachado
  },

  contenedorBotones:{
    marginTop:15, 
    flexDirection:'row',
    gap:15,


  },


});
