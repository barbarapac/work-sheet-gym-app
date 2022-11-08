import { StyleSheet } from 'react-native';

const InputView = ({ }) => {

  return (
    <View style={styles.content}>
      <View style={{ padding: 30 }}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'flex-start'
  }
})

export default InputView;