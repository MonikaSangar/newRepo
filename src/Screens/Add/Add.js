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
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

// create a component
const Add = ({navigation}) => {
  const todo = useSelector(state => state.newData);
  console.log(todo, 'data in home.js');

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>name: {item.name}</Text>
        <Text>department: {item.department}</Text>
        <Text>age: {item.age}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          height: 48,
          width: 48,
          backgroundColor: 'pink',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 24,
        }}>
        <Text style={{fontSize: 24, color: 'white'}}>+</Text>
      </TouchableOpacity>

      <FlatList data={todo} renderItem={renderItem} />
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
export default Add;
