import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import TextInputDefault from '../../components/TextInputDefault';
import firebase from '../../src/firebaseConfig';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Perfil({idUsuario = 1}){
    
    const [nomeInput, setNome] = useState('');
    const [emailInput, setEmail] = useState('');
    const [senhaInput, setSenha] = useState('');
    const [confimarSenhaInput, setConfirmarSenha] = useState('');

    useEffect(() => {

        async function carregaDados(){
          // Leitura de dados
          await firebase.database().ref('pefilusuario/' + idUsuario).on('value', (snapshot) => {
            setNome(snapshot.val().nome)
            setEmail(snapshot.val().email)
            setSenha(snapshot.val().senha)
          });
        }
    
        carregaDados();
    
      }, []);
        
    async function atualizarPerfil(){        
       if(senhaInput !== confimarSenhaInput){
            alert('Senhas não correspondem')
       }else{
            await firebase.database().ref('pefilusuario/' + idUsuario).update({
                nome: nomeInput,
                email: emailInput,
                senha: senhaInput
            });
       }
      }

    return(
        <View style={styles.container}>
            <View style={styles.content}>

            <View style={styles.sectionStyle}>
                <Icon.Button name={'person'} backgroundColor="transparent"color="#474747"/>
                <TextInput style={styles.input} placeholder={'Nome'} underlineColorAndroid="transparent" onChangeText={(texto) => setNome(texto)}>{nomeInput}</TextInput>
            </View>

            <View style={styles.sectionStyle}>
                <Icon.Button name={'email'} backgroundColor="transparent"color="#474747"/>
                <TextInput style={styles.input} placeholder={'E-mail'} keyboardType={'email-address'} underlineColorAndroid="transparent" onChangeText={(texto) => setEmail(texto)}>{emailInput}</TextInput>
            </View>

            <View style={styles.sectionStyle}>
                <Icon.Button name={'lock'} backgroundColor="transparent"color="#474747"/>
                <TextInput style={styles.input} placeholder={'Senha'} secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(texto) => setSenha(texto)}>{senhaInput}</TextInput>
            </View>

            <View style={styles.sectionStyle}>
                <Icon.Button name={'lock'} backgroundColor="transparent"color="#474747"/>
                <TextInput style={styles.input} placeholder={'Confirmar senha'} secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(texto) => setConfirmarSenha(texto)}>{confimarSenhaInput}</TextInput>
            </View>
            <TouchableOpacity style={styles.buttonSalvar} onPress={() => atualizarPerfil()}>
                <Text style={{color: "#fff", fontSize: 18 }}>SALVAR</Text>
            </TouchableOpacity> 
            </View>
        </View>
    );

}

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
    sectionStyle: {
        height: 40,
        borderRadius: 5,
        margin: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#999999',
        marginBottom: 30
      },
      imageStyle: {
        padding: 5,
        margin: 5,
        height: 25,
        width: 25,
        alignItems: 'center'
      },
      input:{
        fontSize: 20,
        // fontFamily: 'Montserrat-Light',
        flex: 1,
        color: '#474747',
        paddingBottom: 10,
        paddingLeft: 10,
      }
});

  
