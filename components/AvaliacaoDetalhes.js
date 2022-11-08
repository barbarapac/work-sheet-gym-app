import { StyleSheet, Text, View } from 'react-native'
import { TextoAvaliacao } from './TextoAvaliacao';

export const AvaliacaoDetalhes = () => {

  return(
    <View>
        <View style={styles.container}>
          <Text style={{fontSize:20, textAlign: 'center', paddingTop: 60, color:'white', fontWeight: 'bold'}}>
            Avaliação 1
          </Text>
        </View>
        <View>
            <TextoAvaliacao></TextoAvaliacao>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({container: {
  backgroundColor: '#8524DC',  
  height: 110,
  alignItems: 'center'
}
});
