import React, { cloneElement, Component } from 'react';
import { FlatList, TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import WorkoutDescriptionList from "./WorkoutDescriptionList";
import ListaWorkout from '../../components/ListaWorkout';


export default function WorkoutDescription({navigation}){
    return(
        <View style={styles.container}>
             <View style={styles.infoBox}>
                <Text style={styles.textInfo}>i</Text>     
                <Text style={styles.textInfoMessage}>Alongue-se antes do treino</Text>            
            </View> 
            <View style={styles.contentList}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 90, paddingTop: 80 }}
                    data={WorkoutDescriptionList}
                    renderItem={({item}) => <ListaWorkout data={item}/>}
                />
            </View>  
            <View style={styles.footerButtonBox}> 
                <TouchableHighlight style={styles.submit} underlayColor='#fff' onPress={() => navigation.goBack()}> 
                    <Text style={styles.submitText}>FINALIZAR TREINO</Text>
                </TouchableHighlight>
            </View>     
        </View>
    );
} 

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    infoBox: {  
        zIndex:99,
        position:'absolute',
        top:0,
        width: '90%',
        alignSelf:'flex-start',
        flexDirection: 'row', 
        alignItems:'center',  
        padding: 20,
        marginTop: 15,
        backgroundColor: '#61D0F1',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20, 
    },
    textInfo: {
        backgroundColor: '#014F96',
        paddingTop:4,
        textAlign: 'center',
        color: '#61D0F1', 
        marginRight: 10,
        borderRadius: 20,
        height:30,
        width:30
    },
    textInfoMessage: { 
        fontSize: 16
    },
    contentList:{ 
        flex: 1.5,
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20, 
        
    },
    footerButtonBox: { 
        position:'absolute',
        bottom:10,  
        zIndex:99, 
        alignContent: 'flex-start',
        width: '90%',
        marginLeft:20,
        marginRight:20 
    },
    submit: {  
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#8524DC',
        borderRadius: 10, 
      },
      submitText: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
      }
});

  

  
