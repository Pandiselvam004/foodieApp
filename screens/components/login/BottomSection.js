import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BottomSection = (props) => {
    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 22 }}>
            <View
                style={styles.starigtLine}
            />
            <Text style={{ fontFamily: 'JosefinSans-Regular' }}>{props.text}</Text>
            <View
                style={styles.starigtLine}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    starigtLine: {
        borderBottomColor: 'black',
        width: "38%",
        marginBottom: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
})

export default BottomSection;
