import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Workout extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Treinos</Text>
            </View>
        );
    }
}

export default Workout;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
  });