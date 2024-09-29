import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.headingStyle}>ElevatedCard</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elevatedCard]}>

                    <Text style={{ color: "black" }}>Tap</Text>

                </View>
                <View style={[styles.card, styles.elevatedCard]}>

                    <Text style={{ color: "black" }}>here</Text>

                </View>
                <View style={[styles.card, styles.elevatedCard]}>

                    <Text style={{ color: "black" }}>to</Text>

                </View>
                <View style={[styles.card, styles.elevatedCard]}>

                    <Text style={{ color: "black" }}>scroll</Text>

                </View>
                <View style={[styles.card, styles.elevatedCard]}>

                    <Text style={{ color: "black" }}>little</Text>

                </View>
                <View style={[styles.card, styles.elevatedCard]}>

                    <Text style={{ color: "black" }}>more...</Text>

                </View>
                <View style={[styles.card, styles.elevatedCard]}>

                    <Text style={{ color: "black" }}>😉</Text>

                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 4,
    },
    elevatedCard:
    {
        backgroundColor: 'white',
        elevation: 4,
    }
})