import React, { Component } from 'react';
import { StyleSheet, FlatList, View,Image } from 'react-native';
import ListaAvaliacao from '../components/ListaAvaliacao';

class Avaliation extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.contentList}>
                    <FlatList
                        data={[
                        {key: '1', name: 'AVALIAÇÃO 1', data: "05/05/2022"},
                        {key: '2', name: 'AVALIAÇÃO 2', data: "05/06/2022"},
                        {key: '3', name: 'AVALIAÇÃO 3', data: "05/07/2022"},
                        {key: '4', name: 'AVALIAÇÃO 4', data: "05/08/2022"}]}
                        renderItem={({item}) => <ListaAvaliacao data={item}/>}
                    />
                </View>       
            </View>
        );
    }
}

export default Avaliation;

const styles = StyleSheet.create({    
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    contentList:{
        flex: 1.5,
        justifyContent: 'flex-start'
    }
});

  
