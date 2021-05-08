import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';

const Todo = (props) => {
    return (
            <TouchableOpacity onPress={()=>props.pr(props.item.key)}>
                <View style={styles.item}>
                    <MaterialIcons name='delete'size={18} color='#333'/>
                    <Text style={styles.text}>
                        {props.item.text}
                    </Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
    },
    text:{
        marginLeft:10,
    }
});

export default Todo
