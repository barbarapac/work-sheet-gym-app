import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import TextDefault from '../components/TextDefault';
import ListaTreino from '../components/ListaTreino';
import iconPosteriores from '../images/iconPosteriores.png';
import iconSuperiores from '../images/iconSuperiores.png';

class Workout extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.fotoPerfil} source={require('../images/fotoPerfil.png')}/>  
                    <View style={{paddingTop: 10, alignItems: 'center'}}>
                        <TextDefault texto={'Joana Banana'} tamanho={20}/>
                        <TextDefault texto={'Santa Catarina, SC'} tamanho={17} paddingTop={3}/>
                        <TextDefault texto={'Hipertrofia * Intermediário'} tamanho={18} paddingTop={20}/>
                    </View>
                </View>
                <View style={styles.contentList}>
                    <FlatList
                        data={[
                        {key: '1', name: 'TREINO A', tipo: 'Posterior',  detalhes: 'Posterior | glúteos', sourceIcon: iconPosteriores },
                        {key: '2', name: 'TREINO B', tipo: 'Superiores', detalhes: 'Costas | peito | abdômen', sourceIcon: iconSuperiores},
                        {key: '3', name: 'TREINO A', tipo: 'Posterior',  detalhes: 'Posterior | glúteos', sourceIcon: iconPosteriores},
                        {key: '4', name: 'TREINO B', tipo: 'Superiores', detalhes: 'Costas | peito | abdômen', sourceIcon: iconSuperiores}]}
                        renderItem={({item}) => <ListaTreino data={item}/>}
                    />
                </View>       
            </View>
        );
    }
}

export default Workout;


const styles = StyleSheet.create({    
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    header:{
        flex: 1, 
        alignItems: 'center',
        paddingTop: 100
    },
    fotoPerfil: {
      width: 100,
      height: 100,
      backgroundColor:'#66666',
      borderRadius:50
    },
    contentCenter:{
        flexDirection: 'row', 
        justifyContent: 'center',
        flex: 0.2,
    },
    contentList:{
        flex: 1.5,
        justifyContent: 'flex-start'
    }
});

  
