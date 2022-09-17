import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Avaliation extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Avaliações</Text>
            </View>
        );
    }
}

export default Avaliation;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
  });