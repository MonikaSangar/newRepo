//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

// create a component
const profile = () => {

    const todo =useSelector(state=>state.newData)

    const renderItem =(item)=>{
        return(
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>

            <Text>profile</Text>

            <FlatList 
            data ={todo}
            renderItem={renderItem}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default profile;
