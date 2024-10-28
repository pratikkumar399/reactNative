import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
    return (
        // div in web is replaced by View in react native
        <View style={styles.container}>
            <Text style={styles.red}>just red</Text>
            <Text style={styles.bigBlue}>just bigBlue</Text>
            <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
            <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
            {/* /inline css */}
            <Text style={{ color: 'green' }}>just green</Text>
        </View>
    );
};

// this  is how we style in react native -> internal styling
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default Index;