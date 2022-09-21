import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CreateAccount extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Página para criar conta</Text>      
            </View>
        );
    }
}

export default CreateAccount;

const styles = StyleSheet.create({    
    container:{
        flex: 1,
        backgroundColor: "#fff"
    }
});

  
