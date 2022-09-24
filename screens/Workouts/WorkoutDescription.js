import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class WorkoutDescription extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Página de descrição treino</Text>      
            </View>
        );
    }
}

export default WorkoutDescription;

const styles = StyleSheet.create({    
    container:{
        flex: 1,
        backgroundColor: "#fff"
    }
});

  

  
