import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

export default function Settings({navigation}){
    const meuPerfil = () => {
        navigation.navigate('Perfil');
    }

    const sobreOSistema = () => {
        navigation.navigate('Sobre');
    }

    const sair = (navigation) => {
        navigation.reset({
            index:0,
            routes: [{name: "Login"}]
        })
    }

    return(
        <NavigationContainer independent={true}>
            <View style={{marginTop: 55}}>    
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:25, marginBottom: 20}}>Configurações</Text>            
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.content} onPress={() => meuPerfil()}>
                        <View style={styles.viewIcon}> 
                            <MaterialCommunityIcons name="account" color={'#FF9900'} size={35} />
                        </View>
                        <Text style={styles.itemName}>Meu perfil</Text>
                    </TouchableOpacity>    
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.content} onPress={() => sobreOSistema()}>
                        <View style={styles.viewIcon}>
                            <MaterialCommunityIcons name="help-circle" color={'#FF9900'} size={35} />
                        </View>
                        <Text style={styles.itemName}>Sobre</Text>
                    </TouchableOpacity>    
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.content} //onPress={() => sair(navigation)}
                    >
                        <View style={styles.viewIcon}>
                            <MaterialCommunityIcons name="home-export-outline" color={'#FF9900'} size={35} />
                        </View>
                        <Text style={styles.itemName}>Sair</Text>
                    </TouchableOpacity>    
                </View>
            </View>
        </NavigationContainer>            
    );
}

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