import React, { useEffect } from "react";
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import * as Animatable from "react-native-animatable";

export default function Splash({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Main');
        }, 4000); // Ajusta el tiempo de espera según lo necesario

        // Limpia el temporizador cuando el componente se desmonta
        return () => clearTimeout(timer);
    }, [navigation]);


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#7071AF' />
            <Animatable.Image
                animation="pulse"
                easing="ease-Out"
                iterationCount="infinite"
                style={styles.logo}
                source={require('../../Recursos/image/logo-uce.webp')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Cambia al color de fondo deseado
        paddingHorizontal: 20, // Espaciado horizontal para los bordes izquierdo y derecho
    },
    logo: {
        width: 300,
        height: 200,
        marginBottom: 30, // Espacio inferior para separar del texto grande
    },
});

