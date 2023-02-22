import React from "react"
import { View, StyleSheet, ImageBackground } from "react-native"
import { Text } from "./Text"
import IconsC from "./IconsC"

const FirstC = () => {
    return (
        <View>
            <ImageBackground source={require('./Image4.png')}>
                <View style={styles.Card}>
                    <View style={styles.bnk}>
                        <Text text='Total Balance' title />
                    </View>
                    <View style={styles.bal}>
                        <Text text='$96,783.47' heading />
                    </View>
                    <View style={styles.bnl}>
                    <Text text='.' font20 />
                        <Text text='0x28dd09addk...9833as' title />
                    </View>

                    <IconsC />
                </View>
            </ImageBackground>
        </View>

    )
}

export default FirstC;

const styles = StyleSheet.create({
    Card: {
        padding : 30,
        borderRadius: 8,
        flex: 0,
        alignItems: 'center',
        paddingBottom: 20,
    },
    bal: {
        paddingTop:20,
        fontSize: 30,
        color: 'white',
        paddingBottom:10,
    },
    bnk: {
        fontSize: 30,
        color: 'white',
    },
    bnl : {
        // paddingBottom:30,
        backgroundColor : 'rgba(134, 121, 121,0.6)',
        height:25,
        borderRadius:50,
        width:180,
        alignItems: 'center',
        flexDirection:'row',
    }
})