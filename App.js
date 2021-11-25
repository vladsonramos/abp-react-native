
import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TaskList from './src/components/TaskList';
import * as Animatable from 'react-native-animatable';



const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const[task, setTask]= useState([]);
  const [open ,setOpen] = useState(false);
  const [input , setInput] = useState('');



  function handleAdd(){
    if(input ==='') return;

    const data = {
      key: input,
      task: input
    };

    setTask([...task, data]);
    setOpen(false);
    setInput('');
  }

  const handleDelete = useCallback((data) =>{
    const find = task.filter(r => r.key !== data.key);
    setTask(find);
  })

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor = '#fff' barStyle = "light-content"/>

      <View style={styles.content}>
      <Text style={styles.title}>MyNotes</Text>
      </View>
     <FlatList
      marginHozontal = {10}
      showsHorizontalScrollIndicator={false}
      data = {task}
      keyExtractor={(item) =>String(item.key)}
      renderItem={({item}) => <TaskList data = {item} handleDelete = {handleDelete}/>}
     />

    <Modal animationType = "slide" transparent={false} visible={open}>
      <SafeAreaView style = {styles.modal}>
        <View style={styles.modelHeader}>
          <TouchableOpacity onPress ={() => setOpen(false)}>
            <Ionicons style = {{marginLeft:5, marginRight: 5}}name ="md-arrow-back" size={30} color= "#3A4582"/>
          </TouchableOpacity>
          <Text style = {styles.modalTitle}>Nova Anotação</Text>
        </View>
          <Animatable.View style={styles.modalBody} animation="fadeInUp" useNativeDriver>
            <TextInput
              multiline={true}
              placeholderTextColor="#A6ACC7"
              autoCorrect={false}
              placeholder = "Titulo da Anotação"
              
              styles = {styles.input}
              value={input}
              onChangeText={(texto)=> setInput(texto)}
            />
            <TouchableOpacity style = {styles.handleAdd} onPress={handleAdd}>
              <Text style = {styles.handleAddText}> Salvar </Text>
            </TouchableOpacity>
        </Animatable.View>
      </SafeAreaView>
    </Modal>

    <AnimatedBtn 
      style = {styles.fab}
      useNativeDriver
      animation = "bounceInUp"
      duration = {1500}
      onPress={() => setOpen (true)}
    >
    
    <Ionicons name = "ios-add" size ={35} color = '#FFF'/>
    </AnimatedBtn >
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    
  },
  title:{
    marginTop: 10,
    paddingBottom:10,
    fontSize: 20,
    color: '#3A4582',
    textAlign: 'center'
  },

fab:{

  position:'absolute',
  width:60,
  height:60,
  backgroundColor:'#3A4582',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
  right: 25,
  bottom: 25,
  elevation: 2,
  zIndex: 9,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset:{
    width: 1,
    height: 3,
  }
  },

  modal:{
    flex: 1,
    backgroundColor: '#FFF'
  },
  modelHeader:{
    marginLeft: 10,
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  modalTitle:{
    marginLeft: 15,
    fontSize:20,
    color:"#3A4582",
    
  },

  modalBody:{
    marginTop: 15,
    
  },

  input:{
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#A6ACC7',
    padding: 9,
    height: 90,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5
    
  },

  handleAdd:{
    backgroundColor:'#3A4582',
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 10,
    marginRight: 10,
    height:40,
    borderRadius: 5
  },
  handleAddText:{
    fontSize: 20
  }

});
