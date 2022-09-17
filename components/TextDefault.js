import React, { Component } from "react";
import { Text, View} from "react-native";

class TextDefault extends Component{
  render(){
    return(
      <View>
        <Text 
            style={{fontSize: this.props.tamanho, color: "#666666"}} 
        >{this.props.texto}</Text>
      </View>
    );
  }
}

export default TextDefault;