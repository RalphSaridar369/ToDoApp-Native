import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, List, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './Components/Header';
import Todo from './Components/Todo';
import Add from './Components/Add';

export default function App() {

  const [number,setNumber] = useState(0);
  const [info,setInfo] = useState({name:'',age:''});
  const [people, SetPeople] = useState([
    {name:'Ralph',age:31, key:1},
    {name:'Samir',age:32, key:2},
    {name:'Ali',age:36, key:3},
    {name:'Ahmad',age:36, key:4},
    {name:'Batata',age:36, key:5},
    {name:'Batenjen',age:36, key:6},
  ])
  const [test,setTest]=useState([1,2,3,4,5,6,7,8,9,0])
  const clickHandler =()=>{
    setNumber(number+1);
    setInfo({name:'Ralph',age:'21'});
  };

  const [todo,setTodo] = useState([
    {text:'Buy coffee', key:'1'},
    {text:'Create an app', key:'2'},
    {text:'Play on the switch', key:'3'},
  ]);


  const pressHandler =(key)=>{
    setTodo((prev)=>{
      return prev.filter(todo => todo.key != key);
    })
  }


  const submitHandler =(text)=>{
    if(text.length>3){
    setTodo((prev)=>{
      return [
        {text:text ,key: Math.random().toString() },
        ...prev
      ]
    })
    }
    else{
      Alert.alert('Oops','todos must be over 3 characters long',[
        {text:'ok', onPress:()=>console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <Add submit={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={todo}
          renderItem ={({ item })=>(
            <Todo item={item} pr={pressHandler}/>
          )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    flex:1,
  },
  list:{
    marginTop: 20,
    flex:1,
  },
  ImageBitmap:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  item:{
    margin:20,
    paddingTop: 20,
    fontSize:40,
    backgroundColor:'pink',
    color:'red',
    textAlign:'center',
    display:'flex',
    alignItems:'center',

  },
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  oldText:{
    fontSize:30,
    fontWeight:'bold',
    color:'blue',
  },
  ti:{
    marginTop:11,
    borderWidth: 1,
    borderColor: '#777',
    width:200,
    height:40
  }
});
