import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import TextDefault from '../components/TextDefault';
import TextInputDefault from '../components/TextInputDefault';
import EmailIcon from '../images/iconEmail.png';
import PassIcon from '../images/iconPass.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}){
    const entrar = () => {
        navigation.reset({
            index:0,
            routes: [{name: "Home"}]
        })
    }
    
    const criarConta = () => {
        navigation.navigate('CreateAccount')
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TextDefault texto={'Olá, acesse sua conta!'} tamanho={27} fontWeight={'400'} color={'#1F1F1F'}/>
                <TextDefault texto={'Primeira vez aqui? Crie sua conta'} tamanho={18} paddingTop={10} textDecorationStyle={'underline'} color={'#696969'}/>
            </View>
            <View style={styles.content}>
                <View style={{padding: 30}}>
                    <TextInputDefault iconName={'email'} textoTransparente={'E-mail'} value={'email'}/>
                    <TextInputDefault iconName={'lock'} textoTransparente={'Senha'} secureTextEntry={true}/>  
                    <TouchableOpacity style={styles.buttonLogIn} onPress={() => entrar()}>
                        <Text style={{color: "#fff", fontSize: 18 }}>ENTRAR</Text>
                    </TouchableOpacity> 
                </View>
            </View>       
            <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingBottom:90, padding: 50}}>
                <TouchableOpacity style={styles.buttonSocialLogin}>
                    <Image source={require('../images/iconFacebook.png')} style={styles.buttonImageIconStyle} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSocialLogin}>
                    <Image source={require('../images/iconTwitter.png')} style={styles.buttonImageIconStyle} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSocialLogin}>
                    <Image source={require('../images/iconGoogle.png')} style={styles.buttonImageIconStyle} /> 
                </TouchableOpacity>
                
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonFooter} onPress={() => criarConta()}>                    
                    <Text style={{color: "#8A2BE2", fontSize: 20, fontWeight: 'bold'}}>CRIAR CONTA</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        flex: 1, 
        paddingLeft: 30, 
        paddingTop: 150,
        paddingBottom: 25
    },
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    buttonLogIn: {
        alignItems: "center",
        backgroundColor: "#8A2BE2",
        padding: 10,
        borderRadius: 4,
      },
    content:{
        justifyContent: 'flex-start'
    },
    footer:{
        justifyContent: 'center',
    },
    buttonFooter: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10
    },
    buttonSocialLogin:{
        borderWidth:1,
        borderColor:'#FF7F00',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        height:70,
        backgroundColor:'#FFFFFF',
        borderRadius:50
    },
    buttonImageIconStyle:{
        width: 30,
        height: 23,
        backgroundColor: 'black',
    }
  });

  
