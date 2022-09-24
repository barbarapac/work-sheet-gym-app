import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Perfil from './Perfil';
import Settings from './Settings';
import Sobre from './Abount';
import Politica from './Politica';

const Stack = createStackNavigator();

function MyStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Settings'component={Settings} options={{headerShown: false}}/>
        <Stack.Screen name='Perfil'component={Perfil}  
          options={{
            headerShown: true,
            headerTitle: 'MEU PERFIL',
            headerTitleStyle:{fontSize: 20},
            headerTitleAlign:'center'
          }}/>
        <Stack.Screen name='Sobre'component={Sobre} 
          options={{
            headerShown: true,
            headerTitle: 'SOBRE',
            headerTitleStyle:{fontSize: 20},
            headerTitleAlign:'center'
          }}/>        
          <Stack.Screen name='Politica'component={Politica} 
            options={{
              headerShown: true,
              headerTitle: 'POLÍTICA DE PRIVACIDADE',
              headerStyle:{backgroundColor: "#8A2BE2"},
              headerTitleStyle:{fontSize: 20, color:"#fff"},
              headerTitleAlign:'center'
            }}/>
      </Stack.Navigator>
    );
  }
  

export default function SettingsNavigator({navigation}){
    return(
        <NavigationContainer independent={true}>
            <MyStack/>
        </NavigationContainer>            
    );
}

const styles = StyleSheet.create({
    container: {
      borderColor: '#FF7F00', 
      margin: 20,
      marginBottom: 5,
      backgroundColor: "#FFDAB9",
      borderRadius: 2
    },
    itemName: {    
      fontSize: 20,
      height: 40,
      marginTop: 20,
      color: "#FF9900", 
    },
    viewIcon:{
        margin:15
    },
    content:{
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        height: 70,
    }
  });