import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import LoginApp from './login/LoginApp';

class App extends Component {
  render(){
    return(
      <View style={styles.container}>
          <LoginApp/>
      </View>    
    );  
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
