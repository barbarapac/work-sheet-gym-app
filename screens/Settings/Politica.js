import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Politica extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.textoPrincipal}>Termo de uso</Text>
                    <Text style={styles.textoSecundario}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </Text>
                </View>                
            </View>
        );
    }
}

export default Politica;

const styles = StyleSheet.create({    
    container:{
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
    },
    content:{
        marginBottom: 40
    },
    textoPrincipal:{
        fontSize: 18,
        color: "#999998",
        fontWeight: 'bold',
        marginBottom: 15
    },
    textoSecundario:{
        fontSize: 17,
        color: "#999998"
    }
});

  

