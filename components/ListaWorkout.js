import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ListaTreino = ({data}) => { 
  return (
      <View style={styles.container}> 
          <View style={{flexDirection: 'row'}}>
            <View style={styles.imageView}>
              <Image source={data.image} style={styles.imageStyle}/> 
            </View>   
            <View style={styles.viewTipoDetalhe}>
              <Text style={styles.itemName}>{data.name}</Text> 
              <Text style={styles.itemTipoDetalhe}>{data.description}</Text> 
            </View>   
          </View>       
      </View>
  );
};

export default ListaTreino; 
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 15, 
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15
  },
  itemName: {     
    fontSize: 18,  
    paddingTop: 5,
    paddingBottom: 5,
    color: "#363636", 
  }, 
  itemTipoDetalhe: {
    fontSize: 18, 
    color: "#363636", 
    flex: 1, flexWrap: 'wrap', 
  },
  imageView: {
    marginLeft: 5, 
    marginRight: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#FBA48280',
    padding: 10
  }, 
  imageStyle: { 
    height: 70,
    width: 70,
  },
  viewTipoDetalhe:{
    flexDirection: 'column', 
    paddingLeft: 10, 
    width: 220, 
  }, 
});