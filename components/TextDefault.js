import React, { Component } from "react";
import { Text, TouchableWithoutFeedbackComponent, View} from "react-native";

const TextDefault = ({tamanho,paddingTop, texto, fontWeight, textDecorationStyle, color}) => {
    return(
      <View>
        <Text style={{fontSize: tamanho, color: color, paddingTop: paddingTop, fontWeight: fontWeight, textDecorationLine: textDecorationStyle}}>{texto}</Text>
      </View>
    );
  }


export default TextDefault;