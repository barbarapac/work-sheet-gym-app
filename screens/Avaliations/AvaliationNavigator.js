import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AvaliationDescription from './AvaliationDescription';
import Avaliation from './Avaliation';

const Stack = createStackNavigator();

function MyStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Avaliation'component={Avaliation} options={{headerShown: false}}/>
        <Stack.Screen name='AvaliationDescription'component={AvaliationDescription} 
          options={{
            headerShown: true, 
            headerTitle: 'AVALIAÇÃO',
            headerStyle:{backgroundColor: "#8A2BE2"},
            headerTitleStyle:{fontSize: 20, color:"#fff"},
            headerTitleAlign:'center',
          }}/>
      </Stack.Navigator>
    );
  }
  

export default function AvaliationNavigator({navigation}){
    return(
        <NavigationContainer independent={true}>
            <MyStack/>
        </NavigationContainer>            
    );
}