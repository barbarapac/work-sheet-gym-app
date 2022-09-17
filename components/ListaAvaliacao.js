import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListaAvaliacao = ({data}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.itemName}>{data.name}</Text>
              <Text style={styles.itemData}>{data.data}</Text>
            </View>
        </View>
    );
};

export default ListaAvaliacao;

const styles = StyleSheet.create({
  container: {
    borderColor: '#FF7F00', 
    borderWidth: 1.5, 
    margin: 10, 
    borderRadius: 15,
    height: 80,
    alignItems: 'center'
  },
  itemName: {    
    fontSize: 20,
    paddingRight: 100,
    height: 50,
    marginTop: 25,
    marginLeft: 10,
    color: "#363636", 
  },
  itemData:{
    color: "#363636", 
    marginTop: 25,
    fontSize: 20,
    marginRight: 15
  }
});