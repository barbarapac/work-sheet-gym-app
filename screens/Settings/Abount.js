import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Abount extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Página sobre o sistema</Text>      
            </View>
        );
    }
}

export default Abount;

const styles = StyleSheet.create({    
    container:{
        flex: 1,
        backgroundColor: "#fff"
    }
});

  
