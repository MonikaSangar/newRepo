//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { useSelector } from 'react-redux';
import { addTodo } from '../../redux/action/addTodo';
import { addTask } from '../../redux/reducer/addTodo';



// create a component
const Home = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');

   const todo=useSelector(state=>state.newData)
   console.log(todo ,"data in home")


  const creds = () => {

    if (name == '') {
      alert('please name');
      return false;
    } else if (department == '') {
      alert('plese FILL the department');
      return false;
    } else if (age == '') {
      alert('oops');
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = () => {
    const validation = creds();
    if (!!validation) {
      const newData = [{name: name, age: age, department: department}];
      console.log('data', todo.concat(newData));

      addTodo(todo.concat(newData))
       
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        placeholder="Enter the Name"
        value={name}
        onChangeText={e => setName(e)}
      />

      <Text style={{marginTop: 24}} value={age} onChangeText={e => setAge(e)}>
        Age
      </Text>
      <TextInput
        placeholder="Enter the department"
        value={department}
        onChangeText={e => setDepartment(e)}
      />
      <Text style={{marginTop: 24}}>Department</Text>
      <TextInput
        placeholder="Enter the age"
        value={age}
        onChangeText={e => setAge(e)}
      />

      <Button onPress={onSubmit} title="Submit" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
