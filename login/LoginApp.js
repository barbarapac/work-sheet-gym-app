import React, { Component } from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';
import TextInputDefault from '../components/TextInputDefault';
import PersonIcon from '../images/iconPerson.png';
import EmailIcon from '../images/iconEmail.png';
import PassIcon from '../images/iconPass.png';

class LoginApp extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={{padding: 30}}>
                        <TextInputDefault sourceIcon={PersonIcon} textoTransparente={'Nome'}/>
                        <TextInputDefault sourceIcon={EmailIcon} textoTransparente={'E-mail'}/>
                        <TextInputDefault sourceIcon={PassIcon} textoTransparente={'Senha'}/>  
                        {/* questionar prof porque não ta pegando o stilo do botão */}
                        <Button title='CONTINUE' color={'#3c78d8'}/>      
                    </View>
                </View>            
                <View style={styles.footer}>
                    <Button title='LOGIN' color={'#6495ED'} />      
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    botao:{
        textAlign: 'center',
        fontSize: 100
        // ver como trocar cor do botão
    },
    content:{
        flex: 1,
        justifyContent: 'space-around', // flex-start(default), flex-end, center, space-beteween
    },
    footer:{
        backgroundColor: 'red',
        justifyContent: 'center'
    }
  });

export default LoginApp;


  
