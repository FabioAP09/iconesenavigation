import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.cor}>
                <h1 >Home</h1>
            </Text>
            <Button
                color='#000'
                title="Informacao"
                onPress={() => navigation.navigate('Informacao')}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cor: {
        color: '#FF4500',
        fontSize: 20
    }


})
