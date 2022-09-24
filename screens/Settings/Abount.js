import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Abount({navigation}){
    const politicaPrivacidade = () => {
        navigation.navigate('Politica');
    }

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.textoPrincipal}>Razão social</Text>      
                <Text style={styles.textoSecundario}>Workout LTDA</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.textoPrincipal}>CNPJ</Text>
                <Text style={styles.textoSecundario}>00.000.000/0000-00</Text>
            </View>
            
            <View style={styles.content}>
                <Text style={styles.textoPrincipal}>Endereço</Text>
                <Text style={styles.textoSecundario}>Rua do Comécio, 556</Text>
                <Text style={styles.textoSecundario}>1° andar, Centro Norte</Text>
                <Text style={styles.textoSecundario}>Pato Branco - PR</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.textoPrincipal}>Versão</Text>
                <Text style={styles.textoSecundario}>1.0.0</Text>
            </View>   

            <TouchableOpacity onPress={() => politicaPrivacidade()}>
                <View style={styles.politicaContent}>
                    <View style={styles.viewIcon}>
                        <View style={{marginTop: 15}}>
                            <MaterialCommunityIcons name="alert" color={'#FF9900'} size={25} />
                        </View>
                    </View>   
                    <View>
                        <Text style={styles.textPolitica}>Politica de privacidade</Text>                
                        <Text style={styles.textSaibaMais}>Clique e saiba mais</Text>                                        
                    </View> 
                </View>
            </TouchableOpacity>             
        </View>
    );
}

const styles = StyleSheet.create({    
    container:{
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
    },
    content:{
        marginBottom: 40
    },
    textoPrincipal:{
        fontSize: 18,
        color: "#999998",
        fontWeight: 'bold'
    },
    textoSecundario:{
        fontSize: 17,
        color: "#999998"
    },
    politicaContent:{
        flexDirection: 'row', 
        justifyContent: 'flex-start'
    },
    viewIcon:{
        backgroundColor:"#FFDAB9", 
        width: 60, 
        height:60, 
        alignItems: 'center', 
        borderRadius: 10
    },
    textPolitica:{
        fontSize: 17, 
        color: "#999998", 
        fontWeight: 'bold', 
        marginTop: 9, 
        marginLeft: 20
    },
    textSaibaMais:{
        fontSize: 15, 
        color: "#999998", 
        marginTop: 2, 
        marginLeft: 20
    }
});

  

