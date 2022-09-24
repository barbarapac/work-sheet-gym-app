import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Perfil extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Página de perfil</Text>      
            </View>
        );
    }
}

export default Perfil;

const styles = StyleSheet.create({    
    container:{
        flex: 1,
        backgroundColor: "#fff"
    }
});

  
