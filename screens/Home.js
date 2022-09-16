import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AvaliationDescription from '../screens/AvaliationDescription';
import Settings from '../screens/Settings';
import Workout from '../screens/Workout';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AvaliationDescription" component={AvaliationDescription} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Workout" component={Workout} />
    </Tab.Navigator>
  );
}


class Home extends Component{
    render(){
        return(
            <NavigationContainer independent={true}>
                <MyTabs />
            </NavigationContainer>
            // <View style={styles.container}>
            //     <View style={styles.content}>
            //         <View style={{padding: 30}}>
            //         </View>
            //     </View>            
            //     <View style={styles.footer}>
            //         <Text>Footer</Text>
            //     </View>
            // </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    content:{
        flex: 1,
        justifyContent: 'space-around', 
    },
    footer:{
        backgroundColor: '#3c78d8',
        justifyContent: 'center',
        height: 70
    }
  });