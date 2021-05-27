import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Servico() {

    return (
        <View style={styles.container}>
            <Text style={styles.cor}>
                <h1 >Serviço</h1>
            </Text>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cor: {
        color: '#FF4500',
        fontSize: 20
    }
})
