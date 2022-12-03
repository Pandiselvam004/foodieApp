import {StyleSheet, Text, TextInput} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  label: {
    marginTop: 15,
    fontSize: 20,
    marginLeft: 25,
    color: 'grey',
    fontFamily: 'JosefinSans-Regular',
  },
  input: {
    height: 30,
    marginRight: 25,
    marginLeft: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#adadad',
    padding: 0,
    paddingTop:10,
    paddingHorizontal: 0
  },
});

export default function AuthInput(props) {
  return (
    <>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} />
    </>
  );
}
