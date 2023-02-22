import React from "react"
import { View, StyleSheet, Button } from "react-native"
import { Text } from "./Text"

const MiddleC = () => {
    return (
        <View style={styles.Card}>
            <View style={styles.bnk}>
                <Text text='Tokens' font20 />
                <Text text='History' font20 />
            </View>
        </View>
    )
}

export default MiddleC;

const styles = StyleSheet.create({
    Card: {
        width:250,
        height:40,
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: 'rgba(134, 121, 121,0.6)',
    },
    bnk: {
        flex:1,
        flexDirection:'row',
        marginTop:5,
        justifyContent: 'space-around',
    }
})