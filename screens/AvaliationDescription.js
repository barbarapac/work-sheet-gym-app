import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AvaliationDescription extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Descrição das avaliações</Text>
            </View>
        );
    }
}

export default AvaliationDescription;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
  });