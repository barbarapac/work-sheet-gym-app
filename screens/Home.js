import React, { Component } from 'react';
import Avaliation from '../screens/Avaliations/AvaliationNavigator';
import Settings from '../screens/Settings/SettingsNavigator';
import Workout from '../screens/Workouts/WorkoutNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

//onPress={() => navigation.jumpTo('Profile', { owner: 'Michaś' })}

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
            headerShown: false,
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
            headerShown: false,
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
                <MyTabs/>
            </NavigationContainer>
        );
    }
}

export default Home;
