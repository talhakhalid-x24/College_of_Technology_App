import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import logo from '../../assets/images/logo.png';
import books from '../../assets/images/books.jpg';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.header}>
            <Image source={books} style={styles.books} />
        </View>
      <View>
      <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Start')}
              style={styles.appButtonContainer}
          >
              <Text style={styles.appButtonText}>Let's Start</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header : {
      top:'-8%',
    width:'100%',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom:30,
    marginTop:30
},
logo:{
    width: "50%",
    resizeMode: 'stretch',
    height: 120,
},
books:{
    width: "100%",
    resizeMode: 'stretch',
    height: 200,
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
