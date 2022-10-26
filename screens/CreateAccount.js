import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import TextDefault from '../components/TextDefault';
import firebase from '../src/firebaseConfig';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CreateAccount({navigation}){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    async function criarConta(){
        if (!nome.trim()) {
            Alert.alert(
                "Atenção",
                "Nome obrigatório!",
                [{ text: "OK", style: "default",},]
            );
            return;
        }

        if (!email.trim()) {
            Alert.alert(
                "Atenção",
                "E-mail obrigatório!",
                [{ text: "OK", style: "default",},]
            );
            return;
        }

        if(password !== confirmaSenha)
        {            
            Alert.alert(
                "Atenção",
                "Senhas não correspondem!",
                [{ text: "OK", style: "default",},]
            );
        } else if(password.length < 6){
            Alert.alert(
                "Atenção",
                "Senha deve conter no minimo 6 caracteres!",
                [{ text: "OK", style: "default",},]
            );
        }
        else
        {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((value) => {
                firebase.database().ref('pefilusuario').child(value.user.uid).set({
                    nome: nome,
                    email: email
                });                
                
                Alert.alert(
                    "",
                    "Cadastro realizado com sucesso!",
                    [{ text: "OK", style: "default",},]
                );  

                setNome('');
                setEmail('');
                setPassword('');
                setConfirmaSenha('');

                navigation.reset({
                    index:0,
                    routes: [{name: "Login"}]
                });
                return;
            }).catch((error) => {
                Alert.alert(
                    "Erro",
                    "Ocorreu um erro ao cadastrar usuário. Tente novamente mais tarde.",
                    [{ text: "OK", style: "default",},]
                );
                return;
            });
        }
    }

    {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TextDefault texto={'Primeira vez aqui?'} tamanho={27} fontWeight={'400'} color={'#1F1F1F'}/>
                    <TextDefault texto={'Crie sua conta'} tamanho={18} paddingTop={10} color={'#696969'} />
                </View>
                <View style={{padding: 30}}>
                    <View style={styles.sectionStyle}>
                        <Icon.Button name={'person'} backgroundColor="transparent"color="#474747"/>
                        <TextInput style={styles.input} placeholder={'Nome Completo'} underlineColorAndroid="transparent" onChangeText={(texto) => setNome(texto)} value={nome}/>

                    </View>
                    <View style={styles.sectionStyle}>
                        <Icon.Button name={'email'} backgroundColor="transparent"color="#474747"/>
                        <TextInput style={styles.input} placeholder={'E-mail'} keyboardType={'email-address'} underlineColorAndroid="transparent" onChangeText={(texto) => setEmail(texto)} value={email}/>
                    </View>
                    <View style={styles.sectionStyle}>
                        <Icon.Button name={'lock'} backgroundColor="transparent"color="#474747"/>
                        <TextInput style={styles.input} placeholder={'Senha'} secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(texto) => setPassword(texto)} value={password}/>
                    </View>
                    <View style={styles.sectionStyle}>
                        <Icon.Button name={'lock'} backgroundColor="transparent"color="#474747"/>
                        <TextInput style={styles.input} placeholder={'Confirmar Senha'} secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(texto) => setConfirmaSenha(texto)} value={confirmaSenha}/>
                    </View>
                </View>
                <View style={{paddingBottom:50, paddingLeft:30, paddingRight:30}}>
                <TouchableOpacity style={styles.buttonLogIn} onPress={criarConta}>
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
        flex: 0.7, 
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

  
