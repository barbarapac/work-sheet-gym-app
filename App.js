import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import CreateAccount from './screens/CreateAccount';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator style={styles.container} initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name='Home'component={Home} options={{headerShown: false}}/>
      <Stack.Screen name='CreateAccount'component={CreateAccount} options={{headerShown: true}}/>
    </Stack.Navigator>
  );
}

class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
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
