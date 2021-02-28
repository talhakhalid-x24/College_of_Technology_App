'use strict';

import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity } from 'react-native';

function StdProfile({route,navigation}){
    return(
            <View style={styles.container}>
            <View style={styles.detail}>
                <View style={styles.image}>
                    {/* <Image source={picture} style={styles.serviceImage} /> */}
                </View>
                <Text style={styles.name}>{route.params.name}</Text>
                <View style={styles.info}>
                    <Text style={styles.infoHead}>Phone</Text>
                    <Text style={styles.infoFoot}>{route.params.phone}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoHead}>Email</Text>
                    <Text style={styles.infoFoot}>{route.params.email}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoHead}>Gender</Text>
                    <Text style={styles.infoFoot}>{route.params.gender}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoHead}>Age</Text>
                    <Text style={styles.infoFoot}>{route.params.age}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoHead}>Degree</Text>
                    <Text style={styles.infoFoot}>{route.params.degree} in {route.params.facaulty}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.appButtonContainer}
                        onPress={() => navigation.navigate('Companies')}
                    >
                        <Text style={styles.appButtonText}> List of Companies</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default StdProfile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    detail:{
        width:'90%',
        marginHorizontal:'auto',
        marginVertical: 10,
    },
    image: {
        backgroundColor:'#ffffff',
        width:'50%',
        justifyContent:'center',
        borderRadius:'50%',
        height:165,
        alignSelf:'center',
    },
    serviceImage : {
        height: '165px',
        width: '100%',
        borderRadius: '100%',
        resizeMode: 'stretch',
    },
    name: {
        fontSize:48,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:20,
    },
    info: {
        backgroundColor: '#eee',
        borderRadius:10,
        borderColor:'gray',
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:5
    },
    infoHead:{
        color:'lightgray',
        marginBottom:5,
    },
    infoFoot: {
        fontWeight:'bold',
        fontSize:20,
    },
    
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#000",
      borderRadius: 50,
      top:'12%'
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      paddingVertical: 10,
      paddingHorizontal: 48
    },
});

