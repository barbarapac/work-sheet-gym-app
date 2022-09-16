import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import TextDefault from '../components/TextDefault';
import TextInputDefault from '../components/TextInputDefault';
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
            <View style={styles.header}>
                <TextDefault texto={'Olá, acesse sua conta!'} tamanho={27}/>
                <TextDefault texto={'Primeira vez aqui? Crie sua conta'} tamanho={17}/>
            </View>
            <View style={styles.content}>
                <View style={{padding: 30}}>
                    <TextInputDefault sourceIcon={EmailIcon} textoTransparente={'E-mail'}/>
                    <TextInputDefault sourceIcon={PassIcon} textoTransparente={'Senha'}/>  
                    <TouchableOpacity style={styles.buttonLogIn} onPress={() => entrar()}>
                        <Text style={{color: "#fff"}}>ENTRAR</Text>
                    </TouchableOpacity> 
                </View>
            </View>            
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonFooter} onPress={() => entrar()}>                    
                    <Text style={{color: "#8A2BE2", fontSize: 20}}>CRIAR CONTA</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        flex: 1, 
        paddingLeft: 30, 
        paddingTop: 200,
    },
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    buttonLogIn: {
        alignItems: "center",
        backgroundColor: "#8A2BE2",
        padding: 10
      },
    content:{
        flex: 5,
        // justifyContent: 'space-around', deixa tudo alinhado no centro com o mesmo espaço 
        justifyContent: 'flex-start'
    },
    footer:{
        justifyContent: 'center',
    },
    buttonFooter: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10
    }
  });

  
