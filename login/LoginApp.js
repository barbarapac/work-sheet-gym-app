import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Button, View } from 'react-native';
import TextInputDefault from '../components/TextInputDefault';
import PersonIcon from '../images/iconPerson.png'

class LoginApp extends Component{
    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <TextInputDefault sourceIcon={PersonIcon} textoTransparente={'Nome'}/>
                    <TextInputDefault sourceIcon={PersonIcon} textoTransparente={'E-mail'}/>
                    <TextInputDefault sourceIcon={PersonIcon} textoTransparente={'Senha'}/>        

                    <Button title='CONTINUE' color={'#3c78d8'} style={styles.botao}/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 1,
        marginTop: 150
    },
    botao:{
        textAlign: 'center',        
        height: 25,
        width: 25
    }
  });

export default LoginApp;


  
