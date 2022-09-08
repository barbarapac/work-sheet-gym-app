import React, { Component } from "react";
import { StyleSheet, TextInput, Image, View} from "react-native";


class TextInputDefault extends Component{
  render(){
    return(
      <View style={styles.sectionStyle}>
        <Image
          source={{ uri: Image.resolveAssetSource(this.props.sourceIcon).uri }}
          style={styles.imageStyle}
        />
        <TextInput
          style={styles.input}
          placeholder={this.props.textoTransparente}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionStyle: {
    height: 40,
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#3c78d8',
    marginBottom: 30
  },
  imageStyle: {
    padding: 5,
    margin: 5,
    height: 25,
    width: 25,
    alignItems: 'center'
  },
  input:{
    fontSize: 20,
    flex: 1,
    color: '#3c78d8',
    paddingBottom: 10,
    paddingLeft: 10
  }
});

export default TextInputDefault;