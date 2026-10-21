import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, FlatList,TextInput, Button,View } from 'react-native';
import Item from './src/components/Item';

export default function App() {
  const [text,setText] = useState("");
  const [taskList,setTaskList] = useState([]);

  function handleInputText(text){
    setText(text);
  }

  function hadnleAddItem() {
    setTaskList([...taskList,text]);
  }



  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>

      <TextInput  onChangeText={handleInputText} style= {styles.input} placeholder='Zadaj úlohu ...'/>
      <Button onPress = {hadnleAddItem}  title = "ADD"/>

      </View>

       <FlatList
        data={taskList}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
 
    
  inputContainer:{
    paddingHorizontal:10,
    flex:1,
    backgroundColor:"#A3B18A",
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row"
    },

  taskContainer:{margin:4, flex:3,backgroundColor:"#FFF3D6",borderTopWidth:3,padding:24},

  input: { 
    borderWidth: 3,
    borderColor: "#0326d3",
    borderRadius: 8,
    width:"80%"
  },
});
