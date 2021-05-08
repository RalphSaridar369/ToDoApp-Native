import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#FFFFFF',
    },
    container:{
        height:80,
        paddingTop:38,
        backgroundColor:'coral',
    },
});

export default Header
