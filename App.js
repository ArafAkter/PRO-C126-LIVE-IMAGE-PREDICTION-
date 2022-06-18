import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import PickImage from './pickImage';

export default class App extends React.component {
 render(){
   return<PickImage/>

 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaffcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
