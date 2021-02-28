'use strict';

import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity,TextInput } from 'react-native';
import Firebase from '../config/firebase';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            password: "", 
            emailErr: "", 
            passwordErr: "", 
        }
    }
    onPress(){
        if(this.state.email ==""){
            this.setState({emailErr:"Email field is required"})
        }
        else{
            this.setState({emailErr:""})
        }
        if(this.state.password ==""){
            this.setState({passwordErr:"Password field is required"})
        }
        else {
            this.setState({passwordErr:""})
        }
        Firebase.database().ref('register').orderByChild('email').equalTo(this.state.email).once('value' ,(snapshot) =>{
            // console.log(snapshot.toJSON());
            snapshot.forEach( doc => {
                var key = doc.key;
                var email = snapshot.child(key + '/email').val();
                var password = snapshot.child(key + '/password').val();
                var name = snapshot.child(key + '/name').val();
                var phone = snapshot.child(key + '/phone').val();
                var gender = snapshot.child(key + '/gender').val();
                var age = snapshot.child(key + '/age').val();
                var degree = snapshot.child(key + '/degree').val();
                var facaulty = snapshot.child(key + '/facaulty').val();
        
        // console.log(email)
                if(email == this.state.email){
                    if(password == this.state.password){
                        this.props.navigation.navigate('StdProfile',{
                            name:name,
                            email:email,
                            gender:gender,
                            phone:phone,
                            age:age,
                            degree:degree,
                            facaulty:facaulty,
                        })
                    }
                    else if(this.state.password ==""){
                        this.setState({passwordErr:"Your Password is not matched"})
                    }
                }
                else if(this.state.email ==""){
                    this.setState({emailErr:"This Email is not in use"})
                }
            })
        })
}

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.heading}>Sign In</Text>
                    <View>
                        <Text style={styles.formText}>Email</Text>
                        <TextInput 
                            placeholder={'Enter Your Email'}
                            style={styles.formInput}
                            onChangeText={email => {this.setState({email:email})}}
                        />
                    </View>
                    <Text style={{color:'red'}}>{this.state.emailErr}</Text>
                    <View>
                        <Text style={styles.formText}>Password</Text>
                        <TextInput 
                            placeholder={'Enter Your Password'}
                            style={styles.formInput}
                            onChangeText={password => {this.setState({password:password})}}
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={{color:'red'}}>{this.state.passwordErr}</Text>
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.appButtonContainer}
                            onPress={() => this.onPress(
                                this.state.email,
                                this.state.password
                            )}
                        >
                            <Text style={styles.appButtonText}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',marginVertical:20}}>
                        <Text>Have not an Account?</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => this.props.navigation.navigate('Register')}
                        >
                            <Text style={{color:'#00ffff',fontWeight:'bold'}}> Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading:{
        fontSize:36,
        fontWeight:'bold',
        color:'#00ffff',
        textAlign:'center',
        marginBottom:20
    },
    form:{
        marginTop:24,
        backgroundColor:'#fff',
        borderRadius:12,
        padding:20
    },
    formText:{
        marginVertical:10,
        color:'#00ffff',
        fontWeight:'bold',
        fontSize:18,
    },
    formInput:{
        marginVertical:10,
        color:'#00ffff',
        fontWeight:'bold',
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        paddingBottom:10,
        outlineColor: 'none',
        outlineStyle: 'none',
        outlineWidth: 'none'
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
  