import React,{useState} from "react";
import{View, Text, TextInput, Alert, Button, StyleSheet} from "react";
export default function TextScreen(){
    const[nombre, SetNombre] = useState('');
    const[contrasenia,SetContrasenia]  = useState('');
    const[comentario,SetComentario]  = useState('');
    const[mensaje,SetMensaje]  = useState('');

    const enviarDatos = () => {
        if(nombre,trim() === '' || contrasenia.trim() === '' || comentario.trim() === ''){
            Alert.alert('Error' ,'Por favor Completa todos los campos');
            alert('Error: Por favor Completa todos los campos');
            SetMensaje('Faltan campos por llenar');

        }else{
            Alert.alert('¡Éxito!','Datos enviados correctamente');
            alert('¡Éxito!, Datos enviados correctamente');
            SetMensaje('Datos enviados correctamente');
        }
    }

    return(
        <View style = {StyleSheet.container}>
            <Text style={style.title}>Formulario de ejemplo</Text>

            <TextInput
                style={style.TextInput}
                placeholder = 'Escribe tu nombre'
                value = {nombre}
                onChangeText = {setNombre}
              />

            <TextInput
                style={style.TextInput}
                placeholder = 'Escribe tu Contraseña'
                value = {contrasenia}
                onChangeText = {SetContrasenia}
              />              

            <TextInput
                style={[style.Input,{height: 100, textAlignVertica: 'top'}]}
                placeholder = 'Escribe un comentario'
                value = {comentario}
                onChangeText = {SetComentario}
                multiline = {true}
                numberOfLines = {4}
              />

     {/* Botón para enviar los datos */}
      <Button title="Enviar" onPress={enviarDatos} />

      {/* Mensaje que cambia dinámicamente */}
      <Text style={styles.mensaje}>{mensaje}</Text>
    </View>

    ) 
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    gap:10
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  input:{
    width:'80%',
    borderWidth:3,
    borderColor:'#a47bf7ff',
    padding:12,
    borderRadius:9
  },
  mensaje:{
    marginTop:20,
    fontSize:18,
    color:'#e431f1ff',
    textAlign:'center'
  }
});