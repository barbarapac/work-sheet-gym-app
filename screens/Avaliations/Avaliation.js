import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ListaAvaliacao from '../../components/ListaAvaliacao';

export default function Avaliation({navigation}){
    return(
        <View style={styles.container}>
            <View style={{alignItems:'center', backgroundColor:'#8A2BE2'}}>
                <Text style={styles.text}>Avaliações</Text>            
            </View>
            <View style={styles.contentList}>
                <FlatList
                    data={[
                    {key: '1', name: 'AVALIAÇÃO 1', data: "05/05/2022"},
                    {key: '2', name: 'AVALIAÇÃO 2', data: "05/06/2022"},
                    {key: '3', name: 'AVALIAÇÃO 3', data: "05/07/2022"},
                    {key: '4', name: 'AVALIAÇÃO 4', data: "05/08/2022"}]}
                    renderItem={({item}) => <ListaAvaliacao data={item} navigation={navigation}/>}
                />
            </View>       
        </View>
    );
}


const styles = StyleSheet.create({   
    text:{
        fontSize:25, 
        marginBottom: 10, 
        marginTop:50,  
        color:'#ffff'
    },
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    contentList:{
        flex: 1.5,
        justifyContent: 'flex-start'
    }
});

  
