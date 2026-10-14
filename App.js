import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button,View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>

      <TextInput  style= {styles.input} placeholder='Zadaj úlohu ...'/>
      <Button title = "ADD"/>

      </View>

      <View style={styles.taskContainer}>

        <Text>UDALOSTI :::::</Text>

      </View>
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
