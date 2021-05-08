import React, { useState } from 'react';
import {Button, TextInput, Text, StyleSheet, View} from 'react-native';

const Add = (props) => {

    const [text,setText]=useState('');
    const changeHandler=(e)=>{
        setText(e);
    }

    return (
        <View>
            <TextInput 
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button onPress={()=> props.submit(text)} title="add" color='coral'/>
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },  
})

export default Add
