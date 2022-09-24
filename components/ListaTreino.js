import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ListaTreino = ({data, navigation}) => {
  const descricao = () => {
    navigation.navigate('WorkoutDescription')
  }

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => descricao()}>
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.itemName}>{data.name}</Text>
              <Text style={styles.itemSaibaMais}>Saiba mais</Text>
            </View>
            <View style={styles.viewImagem}>
              <Image
                source={{ uri: Image.resolveAssetSource(data.sourceIcon).uri }}
                style={styles.imageStyle}
              />
              <View style={styles.viewTipoDetalhe}>
                <Text style={styles.itemTipoDetalhe}>{data.tipo}</Text>
                <Text style={styles.itemTipoDetalhe}>{data.detalhes}</Text>
              </View>              
            </View>
          </TouchableOpacity>
      </View>
  );
};

export default ListaTreino;

const styles = StyleSheet.create({
  container: {
    borderColor: '#FF7F00', 
    borderWidth: 1.5, 
    margin: 10, 
    borderRadius: 15
  },
  itemName: {    
    fontWeight: 'bold',
    padding: 10,
    fontSize: 18,
    paddingRight: 190,
    height: 45,
    color: "#363636", 
  },
  itemSaibaMais:{
    color: "#FF7F00", 
    paddingTop:10
  },
  itemTipoDetalhe: {
    fontSize: 18,
    height: 27,
    paddingLeft: 25,   
    color: "#363636"
  },
  imageStyle: {
    marginLeft: 5,
    height: 50,
    width: 50,
    alignItems: 'center'
  },
  viewTipoDetalhe:{
    flexDirection: 'column', 
    paddingBottom: 10
  },
  viewImagem:{
    flexDirection: 'row', 
    paddingLeft: 10
  }
});