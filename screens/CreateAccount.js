import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextDefault from '../components/TextDefault';
import TextInputDefault from '../components/TextInputDefault';

export default function CreateAccount({navigation}){
    const criarConta = () => {
        navigation.reset({
            index:0,
            routes: [{name: "Home"}]
        })
    }
    {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TextDefault texto={'Primeira vez aqui?'} tamanho={27} fontWeight={'400'} color={'#1F1F1F'}/>
                    <TextDefault texto={'Crie sua conta'} tamanho={18} paddingTop={10} color={'#696969'} />
                </View>
                <View style={styles.input}> 
                    <TextInputDefault iconName={'person'} textoTransparente={'Nome Completo'} value={'name'}/>
                    <TextInputDefault iconName={'email'} textoTransparente={'E-mail'} value={'email'}/>
                    <TextInputDefault iconName={'lock'} textoTransparente={'Senha'} value={'password'} secureTextEntry={true}/>
                    <TextInputDefault iconName={'lock'} textoTransparente={'Confirmar Senha'} value={'confirmPassword'} secureTextEntry={true}/>
                </View>
                <View style={{paddingBottom:50, paddingLeft:30, paddingRight:30}}>
                <TouchableOpacity style={styles.buttonLogIn} onPress={() => criarConta()}>
                        <Text style={{color: "#fff", fontSize: 18 }}>CRIAR CONTA</Text>
                </TouchableOpacity> 
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({    
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    header:{
        flex: 1, 
        paddingLeft: 30, 
        paddingTop: 150,
    },
    input:{
        paddingBottom:100,
        paddingLeft:30,
        paddingRight:30
    },
    buttonLogIn: {
        alignItems: "center",
        backgroundColor: "#8A2BE2",
        padding: 10,
        borderRadius: 4,
      }
});

  
