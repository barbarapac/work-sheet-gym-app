import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Avaliation from './screens/Avaliation';
import AvaliationDescription from './screens/AvaliationDescription';
import Settings from './screens/Settings';
import Workout from './screens/Workout';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator style={styles.container}>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name='Home'component={Home} options={{headerShown: false}}/>
      <Stack.Screen name='Avaliation'component={Avaliation} options={{headerShown: false}}/>
      <Stack.Screen name='AvaliationDescription'component={AvaliationDescription} options={{headerShown: false}}/>
      <Stack.Screen name='Settings'component={Settings} options={{headerShown: false}}/>
      <Stack.Screen name='Workout'component={Workout} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <MyStack></MyStack>
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
