import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class Home extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={{padding: 30}}>
                    </View>
                </View>            
                <View style={styles.footer}>
                    <Text>Footer</Text>
                </View>
            </View>
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