// import {View, Text, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';
// import store from '../../redux/store';
// import {DECREMENT, decrementNumber, INCREMENT, incrementNumber} from '../../redux/action';
// import {useSelector} from 'react-redux';

// const Add = () => {
//   const myReducerData = useSelector(state => state.count);

//   console.log('myReducerData', myReducerData);

//   const Inc = () => {
//     incrementNumber(myReducerData);
//   };

//   const Dec = () => {
//     decrementNumber(myReducerData);
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <TouchableOpacity onPress={Inc}>
//         <Text>Add</Text>
//       </TouchableOpacity>
//       <Text>{myReducerData}</Text>
//       <TouchableOpacity onPress={Dec}>
//         <Text>Dec</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Add;

//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { deleteData } from "../../redux/action/addTodo";
import Home from "../Home/Home";


// create a component
const Add = ({ navigation,route }) => {
  const [toggle,setToggle]=useState(false)
  const todo = useSelector((state) => state.newData);
  console.log(todo, "data in home.js");

const _onDelete=(item)=>{

  const data = todo.filter((item) =>item.name!==item.name)
  console.log(item.name,"item")
     alert(item.name)
     deleteData(data)
  }
  const _editItem=(item)=>{
    console.log(">>>>>>>",item)
   
    navigation.navigate('Home',{name:item.name,age:item.age,department:item.department})
 
  //   let data =todo.find((item)=>{item== item})
  //  console.log("dataaaaaaa",data)
  }

  const renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: "pink", padding: 18, marginTop: 8 }}>
        <Text>name: {item.name}</Text>
        <Text>department: {item.department}</Text>
        <Text>age: {item.age}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:14}}>
          <TouchableOpacity onPress={()=>_editItem(item)} >
        <Image style={{height:20,width:20}}
        source={require('../../assets/edit.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>_onDelete(item)}>
         <Image style={{height:20,width:20}}
        source={require('../../assets/delete.png')}/>
        </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home",{isEdit:true})}
        style={{
          height: 48,
          width: 48,
          backgroundColor: "pink",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 24,
        }}
      >
        <Text style={{ fontSize: 24, color: "white" }}>+</Text>
      </TouchableOpacity>

      <FlatList data={todo} renderItem={renderItem} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default Add;
