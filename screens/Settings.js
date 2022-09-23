import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Settings extends Component{
    render(){
        return(
            <View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.content}>
                        <View style={styles.viewIcon}>
                            <MaterialCommunityIcons name="account" color={'#FF9900'} size={35} />
                        </View>
                        <Text style={styles.itemName}>Meu perfil</Text>
                    </TouchableOpacity>    
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.content}>
                        <View style={styles.viewIcon}>
                          <MaterialCommunityIcons name="help-circle" color={'#FF9900'} size={35} />
                        </View>
                        <Text style={styles.itemName}>Meu Sobre</Text>
                    </TouchableOpacity>    
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.content}>
                        <View style={styles.viewIcon}>
                            <MaterialCommunityIcons name="home-export-outline" color={'#FF9900'} size={35} />
                        </View>
                        <Text style={styles.itemName}>Sair</Text>
                    </TouchableOpacity>    
                </View>
            </View>
            
        );
    }
}

export default Settings;


const styles = StyleSheet.create({
    container: {
      borderColor: '#FF7F00', 
      margin: 20,
      marginBottom: 5,
      backgroundColor: "#FFDAB9",
      borderRadius: 2
    },
    itemName: {    
      fontSize: 20,
      height: 40,
      marginTop: 20,
      color: "#FF9900", 
    },
    viewIcon:{
        margin:15
    },
    content:{
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        height: 70,
    }
  });