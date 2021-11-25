import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from '@expo/vector-icons' 
import * as Animatable from 'react-native-animatable';

export default function TaskList({data, handleDelete}){
    return(
        
        <Animatable.View 
        
            style = {styles.container} 
            animation = "bounceIn"
            useNativeDriver
        >

            <TouchableOpacity onPress = {()=>handleDelete(data)}>
                <Ionicons name = "md-checkmark-circle" size={30} color="#3A4582"/>
            </TouchableOpacity>
        <View>
            <Text styles = {styles.task}> {data.task} </Text>
        </View>
        </Animatable.View>
)
}


const styles = StyleSheet.create({

    container:{

        flex: 1,
        marginTop: 20,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF738E',
        borderRadius: 8,
        padding: 17,
        elevation:1.5,
        shadowColor: '#FFF',
        shadowOpacity: 0.2,
        shadowOffset:{

            width:1,
            height: 3,
       }
    },
    task:{
            color:'#121212',
            fontSize: 20,
            paddingLeft: 10,
            paddingRight: 20,
    }

});
