import React, { Component } from "react";
import { StyleSheet, TextInput, Image, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const TextInputDefault = ({iconName, textoTransparente, secureTextEntry}) => {
    return(
      <View style={styles.sectionStyle}>
        <Icon.Button
          name={iconName}
          backgroundColor="transparent"
          color="#616161"
          />
        <TextInput
          secureTextEntry={secureTextEntry}
          style={styles.input}
          placeholder={textoTransparente}
          underlineColorAndroid="transparent"
        />
      </View>
    );
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
    borderColor: '#999999',
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
    // fontFamily: 'Montserrat-Light',
    flex: 1,
    color: '#474747',
    paddingBottom: 10,
    paddingLeft: 10
  }
});

export default TextInputDefault;