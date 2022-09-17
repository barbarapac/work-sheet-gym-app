import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AvaliationDescription from '../screens/AvaliationDescription';
import Settings from '../screens/Settings';
import Workout from '../screens/Workout';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveBackgroundColor: "#8A2BE2",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#D3D3D3",
        tabBarActiveBackgroundColor: "#8A2BE2",
        tabBarStyle:{ height: 70}
      }}
    >
      <Tab.Screen
        name="Workout"
        component={Workout}
        options={{
          headerShown: false,
          tabBarLabel: 'Página Inicial',
          tabBarLabelStyle:{fontSize: 16, paddingBottom: 10},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AvaliationDescription"
        component={AvaliationDescription}
        options={{
          headerShown: false,
          tabBarLabel: 'Avaliações',
          tabBarLabelStyle:{fontSize: 16, paddingBottom: 10},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-text" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarLabel: 'Configurações',
          tabBarLabelStyle:{fontSize: 16, paddingBottom: 10},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


class Home extends Component{
    render(){
        return(
            <NavigationContainer independent={true}>
                <MyTabs />
            </NavigationContainer>
        );
    }
}

export default Home;
