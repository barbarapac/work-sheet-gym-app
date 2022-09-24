import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Workout from './Workout';
import WorkoutDescription from './WorkoutDescription';

const Stack = createStackNavigator();

function MyStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Workout'component={Workout} options={{headerShown: false}}/>
        <Stack.Screen name='WorkoutDescription'component={WorkoutDescription} 
          options={{
            headerShown: true, 
            headerTitle: 'TREINO',
            headerStyle:{backgroundColor: "#8A2BE2"},
            headerTitleStyle:{fontSize: 20, color:"#fff"},
            headerTitleAlign:'center',
          }}/>
      </Stack.Navigator>
    );
  }
  

export default function WorkoutNavigator({navigation}){
    return(
        <NavigationContainer independent={true}>
            <MyStack/>
        </NavigationContainer>            
    );
}