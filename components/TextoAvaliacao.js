import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
const [dado, setDado] = useState('');



export const TextoAvaliacao = () => {
  const dados = {
    key: '1', data: "31/10/2022", peso: '75kg', estatura: '169cm', idade: '24 anos', ombro: '102,3cm', cintura: '72cm', torax: '80cm', abdomen: '74,5cm', quadril: '94cm',
    bracoEsquerdo: '32,4cm', bracoDireito: '32,4cm', coxaEsquerda: '56,7', coxaDireita: '56,7', tricipital: '19mm', abdominal: '13,5mm', axilarMedia: '8,5mm',
    peitoral: '4,5mm', subEscapular: '10,5mm', supraLiaca: '9,5mm', coxa: '23mm'
  }
  return (<>
    <View style={{ paddingBottom: 100 }} >
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#474747', padding: 15 }}> Pulldock 7 dobras </Text>
            <Text style={styles.texto} >Data: <Text style={styles.data}>{dados.data}</Text></Text>
            <Text style={styles.texto} >Peso: <Text style={styles.data}>{dados.peso}</Text></Text>
            <Text style={styles.texto} >Estatura: <Text style={styles.data}>{dados.estatura}</Text></Text>
            <Text style={styles.texto} >Idade: <Text style={styles.data}>{dados.estatura}</Text></Text>
          </View>
          <View style={styles.categoria}>
            <Text style={styles.textoCategoria}>Perimetria</Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.texto} >Ombro: <Text style={styles.data}>{dados.ombro}</Text></Text>
            <Text style={styles.texto} >Tórax: <Text style={styles.data}>{dados.torax}</Text></Text>
            <Text style={styles.texto} >Abdômen: <Text style={styles.data}>{dados.abdomen}</Text></Text>
            <Text style={styles.texto} >Cintura: <Text style={styles.data}>{dados.cintura}</Text></Text>
            <Text style={styles.texto} >Quadril: <Text style={styles.data}>{dados.quadril}</Text></Text>
            <Text style={styles.texto} >Braço esquerdo: <Text style={styles.data}>{dados.bracoEsquerdo}</Text></Text>
            <Text style={styles.texto} >Braço direito: <Text style={styles.data}>{dados.bracoDireito}</Text></Text>
            <Text style={styles.texto} >Coxa esquerda: <Text style={styles.data}>{dados.coxaEsquerda}</Text></Text>
            <Text style={styles.texto} >Coxa direita: <Text style={styles.data}>{dados.coxaDireita}</Text></Text>
          </View>
          <View style={styles.categoria}>
            <Text style={styles.textoCategoria}>Antropometria</Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.texto} >Tricipital: <Text style={styles.data}>{dados.tricipital}</Text></Text>
            <Text style={styles.texto} >Abdominal: <Text style={styles.data}>{dados.abdominal}</Text></Text>
            <Text style={styles.texto} >Axilar média: <Text style={styles.data}>{dados.axilarMedia}</Text></Text>
            <Text style={styles.texto} >Peitoral: <Text style={styles.data}>{dados.peitoral}</Text></Text>
            <Text style={styles.texto} >Subescapular: <Text style={styles.data}>{dados.subEscapular}</Text></Text>
            <Text style={styles.texto} >Supra-llíaca: <Text style={styles.data}>{dados.supraLiaca}</Text></Text>
            <Text style={styles.texto} >Coxa: <Text style={styles.data}>{dados.coxa}</Text></Text>
          </View>
          <View style={styles.categoria}>
            <Text style={styles.textoCategoria}>Resultado</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  texto: {
    paddingLeft: 20,
    fontSize: 17,
    paddingBottom: 20,
    fontWeight: 'bold',
    color: '#474747'
  },
  data: {
    fontWeight: 'normal'
  },
  container: {
    paddingTop: 20,
    height: 610
  },
  scrollView: {
    marginHorizontal: 0,
  },
  categoria: {
    height: 50,
    backgroundColor: '#EEEEEE',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textoCategoria: {
    color: '#FB6F37',
    fontSize: 17,
    paddingTop: 14,
    paddingLeft: 25
  }
});