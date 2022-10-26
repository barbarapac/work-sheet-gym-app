import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import TextDefault from '../components/TextDefault';
import firebase from '../src/firebaseConfig';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Login({navigation}){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function logar(){        
        await firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((value) => {
                alert("sucesso" + value.user.email);
                entrar();
                return;
            }).catch(() =>{
                alert("Login inválido!");
                return;
            });
    }

    function entrar(){
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
                    <View style={styles.sectionStyle}>
                        <Icon.Button name={'email'} backgroundColor="transparent"color="#474747"/>
                        <TextInput style={styles.input} placeholder={'E-mail'} keyboardType={'email-address'} underlineColorAndroid="transparent" onChangeText={(texto) => setEmail(texto)} value={email}/>
                    </View>
                    <View style={styles.sectionStyle}>
                        <Icon.Button name={'lock'} backgroundColor="transparent"color="#474747"/>
                        <TextInput style={styles.input} placeholder={'Senha'} secureTextEntry={true} underlineColorAndroid="transparent" onChangeText={(texto) => setSenha(texto)} value={senha}/>
                    </View>
                    <TouchableOpacity style={styles.buttonLogIn} onPress={() => logar()}>
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
                <TouchableOpacity style={styles.buttonFooter} onPress={criarConta}>                    
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

  
