import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

class Start extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: true,
            IsAuthReady: false,
            isAuth: false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.state.isAuth ? this.props.navigation.navigate('StdProfile') : this.props.navigation.navigate('Login')}
                        style={styles.appButtonContainer}
                    >
                        <Text style={styles.appButtonText}>Student</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => this.state.isAuth ? this.props.navigation.navigate('AdminProfile') : this.props.navigation.navigate('AdminLogin')}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>Admin</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => this.state.isAuth ? this.props.navigation.navigate('EmpProfile') : this.props.navigation.navigate('Company')}
                        style={styles.appButtonContainer}
                    >
                        <Text style={styles.appButtonText}>Company</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Start;

const styles = StyleSheet.create({
    container:{
        flex:1,
        // flexDirection:'row',
        // flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00ffff'
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#000",
      borderRadius: 50,
    //   top:'12%',
      marginBottom:32
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
})