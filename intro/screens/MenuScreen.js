import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import { Button } from 'react-native';
import TextInputScreen from './TextScreen';
import ImageScreen from './ImageScreen';
import ScrollScreen from './ScrollScreen';
import ActivityScreen from './ActivityScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import FlatScreen from './FlatScreen';


export default function MenuScreen () {
    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'TextInput':
            return <TextInputScreen/>
        case 'image':
            return <ImageScreen/>
        case 'scroll':
            return <ScrollScreen/>
        case 'activity':
            return <ActivityScreen/>
        case 'flatlist':
            return <FlatScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottomsheet':
            return <BottomSheetScreen/>
        case 'menu':
            default: 
                return (
                    <View>
                        <Text style={styles.header}> Menu de Prácticas </Text>
                        <Button onPress={() => setScreen('contador')} title="Pract: Contador"/>
                        <Button onPress={() => setScreen('botones')} title="Pract: Botones"/>
                        <Button onPress={() => setScreen('TextInput')} title="Pract: TextInput"/>
                        <Button onPress={() => setScreen('image')} title="Pract: Image"/>
                        <Button onPress={() => setScreen('scroll')} title="Pract: ScrollView"/>
                        <Button onPress={() => setScreen('activity')} title="Pract: ActivityIndicator"/>
                        <Button onPress={() => setScreen('modal')} title="Pract: Modal"/>
                        <Button onPress={() => setScreen('bottomsheet')} title="Pract: BottomSheet"/>
                        <Button onPress={() => setScreen('flatlist')} title="Pract: FlatList"/>
                    </View>
                )

    }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffffff", // Color de fondo de toda la pantalla
    alignItems: "center",        // Centra horizontalmente los elementos dentro del container
    justifyContent: "flex-start",// Alinea verticalmente los elementos desde arriba
    padding: 20,                 // Espacio interno alrededor del contenido
    paddingTop: 50,              // Espacio extra en la parte superior
  },
  header: {
    fontSize: 22,                // Tamaño de letra del encabezado
    fontWeight: "bold",          // Pone el texto en negrita
    marginBottom: 20,            // Espacio debajo del encabezado
    color: "#333",               // Color del texto
    textAlign: "center",         // Centra el texto horizontalmente
  },
  title: {
    fontWeight: "bold",          // Título de cada sección en negrita
    marginTop: 20,               // Espacio arriba del título
    marginBottom: 5,             // Espacio debajo del título
    color: "#333",               // Color del texto
  },
  text: {
    color: "white",              // Color del texto dentro de los botones
    fontWeight: "600", 
}
});