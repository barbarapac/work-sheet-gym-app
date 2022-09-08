import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import TextInputDefault from '../components/TextInputDefault';
import PersonIcon from '../images/iconPerson.png';
import EmailIcon from '../images/iconEmail.png';
import PassIcon from '../images/iconPass.png';

export default function Login({navigation}){
    const entrar = () => {
        navigation.reset({
            index:0,
            routes: [{name: "Home"}]
        })
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{padding: 30}}>
                    <TextInputDefault sourceIcon={PersonIcon} textoTransparente={'Nome'}/>
                    <TextInputDefault sourceIcon={EmailIcon} textoTransparente={'E-mail'}/>
                    <TextInputDefault sourceIcon={PassIcon} textoTransparente={'Senha'}/>  
                    {/* questionar prof porque não ta pegando o stilo do botão */}
                    <Button title='LOGIN' color={'#3c78d8'} onPress={() => entrar()}/>      
                </View>
            </View>            
            {/* <View style={styles.footer}>
                <Button title='LOGIN' color={'#6495ED'} />      
            </View> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    botao:{
        textAlign: 'center',
        fontSize: 100
    },
    content:{
        flex: 1,
        justifyContent: 'space-around', 
    },
    footer:{
        backgroundColor: 'red',
        justifyContent: 'center'
    }
  });

  
