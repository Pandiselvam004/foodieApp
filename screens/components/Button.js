import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import app from '../helpers/AppHelper';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: app.primaryColor,
        padding: 20,
        margin: 22,
        borderRadius: 30
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'JosefinSans-Bold',
        color: "white"
    },
})

export default Button;
