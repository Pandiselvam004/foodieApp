import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import app from '../../helpers/AppHelper';

const SearchSection = () => {
    return (
        <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="search" size={20} color="#6B6B6B" />
            <TextInput
                placeholder="Search for resturant, item or more"
                placeholderTextColor="#6B6B6B"
                style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    searchSection: {
        margin: 10,
        borderRadius: 20,
        backgroundColor: "#E2E2E2",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        fontFamily: app.fontFamily,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#6B6B6B',
    },
})

export default SearchSection;
