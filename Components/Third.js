import React from "react"
import { View, StyleSheet, Image } from "react-native"
import { Text } from "./Text"

const Third = () => {

    return (
        <View style={styles.main}>

            <View style={styles.wrapper}>


                <Image style={[styles.pic, styles.body]} source={require('../Components/Profile.jpg')} />

                <View style={[styles.body, { flex: 0, flexDirection: 'column' }]} >

                    <Text text="Send" font20 />
                    <Text text="00x475...472" font20 />
                </View>

                <View style={[styles.body, { flex: 0, flexDirection: 'column',alignItems:'flex-end' }]} >
                    <Text text='-0.0589USDT' font20 />
                    <Text text='$212.23' font20 />
                </View>

            </View>
        </View>
    )
}

export default Third;

const styles = StyleSheet.create({
    main: {
        color: 'white',
        flex: 0,

    },
    wrapper: {
        padding : 10,
        flex: 0,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: 'rgba(134, 121, 121,0.6)',
    },
    body: {
        margin: 8,
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pic: {
        borderRadius: 100,
        height: 60,
        width: 60,
    },
})