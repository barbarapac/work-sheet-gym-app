import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import TextInputDefault from '../../components/TextInputDefault';

class Perfil extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <TextInputDefault iconName={'person'} textoTransparente={'Nome'} value={'nome'}/>
                    <TextInputDefault iconName={'email'} textoTransparente={'E-mail'} value={'email'} tipoCampo='email-address'/>
                    <TextInputDefault iconName={'lock'} textoTransparente={'Senha'} value={'senha'} secureTextEntry={true}/>
                    <TextInputDefault iconName={'lock'} textoTransparente={'Confirmar senha'} secureTextEntry={true} value={'confirmaSenha'}/>
                    <TouchableOpacity style={styles.buttonSalvar}>
                        <Text style={{color: "#fff", fontSize: 18 }}>SALVAR</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        );
    }
}

export default Perfil;

const styles = StyleSheet.create({   
    content:{
        justifyContent: 'flex-start',
        padding: 25
    }, 
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    buttonSalvar: {
        alignItems: "center",
        backgroundColor: "#FF7F00",
        padding: 10,
        borderRadius: 4,
      },
});

  
