import React from "react"
import { Text as RNText, StyleSheet } from "react-native"
import { colors } from './colors'

export const Text = (props) => {
    const { text, title, font20, font16, color, children, style = {} } = props;

    return (
        <RNText
            style={[
                styles.heading,
                title && styles.title,
                font20 && styles.font20,
                font16 && styles.font16,
                color && { color: colors[color] },
                style && style
            ]}
        >
            {text ? text : children}
            {/* {text || children} */}
        </RNText>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 40,
        color: colors.secondary,
        // color:'white',
    },
    title: {
        fontSize: 15,
    },
    font20: {
        fontSize: 20
    },
    font10: {
        fontSize: 10
    },
    font13: {
        fontSize: 13
    },
    font16: {
        fontSize: 16
    },
});