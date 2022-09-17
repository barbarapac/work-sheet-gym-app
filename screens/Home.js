import React, { Component } from 'react';
import Avaliation from '../screens/Avaliation';
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
          name="Avaliações"
          component={Avaliation}
          options={{
            headerStyle:{backgroundColor: "#8A2BE2"},
            headerTitleStyle:{fontSize: 25, color:"#fff"},
            headerTitleAlign:'center',
            tabBarLabel: 'Avaliações',
            tabBarLabelStyle:{fontSize: 16, paddingBottom: 10},
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clipboard-text" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen
          name="Configurações"
          component={Settings}
          options={{       
            headerStyle:{backgroundColor: "#fff"},   
            headerTitleStyle:{fontSize: 25},
            headerTitleAlign:'center',
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
