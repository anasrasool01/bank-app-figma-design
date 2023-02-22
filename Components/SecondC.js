import React, { Component } from "react"
import { View, StyleSheet, Image } from "react-native"
import { Text } from "./Text"

const SecondC = () => {
    return (
        <View style={styles.main}>

            <Text text="April 20,2021" font20 style={styles.Dt}/>
            
            <View style={styles.wrapper}>

                <Image style={[styles.pic, styles.body]} source={require('../Components/rec.jpg')} />

                <View style={[styles.body, { flex: 0, flexDirection: 'column' }]} >

                    <Text text="Recieve" font20 />
                    <Text text="0x656...90e" style={styles.colr} font20 />

                </View>

                <View style={[styles.body, { flex: 0, flexDirection: 'column',alignItems:'flex-end' }]} >
                    <Text text='+0.00986DAI' style={styles.colrg} font20 />
                    <Text text='$348.92' font20 />
                </View>

            </View>
        </View>
    )
}

export default SecondC;

const styles = StyleSheet.create({
    main: {
        // color: 'white',
    },
    pic: {
        borderRadius: 100,
        height: 60,
        width: 60,
    },
    wrapper: {
        padding : 10,
        flex: 0,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: 'rgba(134, 121, 121,0.6)',
    },
    body: {
        margin: 10,
        // color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    colr : {
        color : 'blue'
    },
    colrg : {
        color : 'green',
        fontWeight : 'bold',
    },
    Dt : {
        height : 40,
    }
})