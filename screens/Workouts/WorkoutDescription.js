import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import ListItem from "./WorkoutDescriptionList";

export default function WorkoutDescription ({navigation}){
    return(
            <SafeAreaView style={styles.container}>
                <WorkoutDescriptionHeader/>
                <FlatList>
                    style={style.list}
                    keyExtractor={(item) => item.id}
                    data={WorkoutDescriptionList}
                    renderItem={({item}) => <ListItem data={item} />}
                </FlatList>
            </SafeAreaView>
        );
    }

const styles = StyleSheet.create({    
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },
});

  

  
