'use strict';

import React from 'react';
import Firebase from '../config/firebase';
import { StyleSheet, Text, View , TouchableOpacity,TextInput} from 'react-native';

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            name : "", 
            email: "", 
            degree:"", 
            facaulty: "", 
            phone: "",
            gender: "",
            age: "",
            password: "",
            nameErr: "",
            emailErr: "",
            degreeErr: "",
            facaultyErr: "",
            phoneErr: "",
            genderErr: "",
            ageErr: "",
            passwordErr: "",
        };
    }
        onPressButton(name,email,degree,facaulty,phone,gender,age,password) {
            Firebase.database().ref('register/').push({
                name,
                email,
                degree,
                facaulty,
                phone,
                gender,
                age,
                password
            }).then((data)=>{
                console.log('data =>', data)
            }).catch((error)=> {
                console.log('error =>', error)
            })
            let rjx = /^[a-zA-Z]+$/;
            let isValid = rjx.test(this.state.name);
            if(this.state.name ==""){
                this.setState({nameErr:"Name field is required"})
            }
            else if(!isValid){
                this.setState({nameErr:"Name field always in alphabetic"})
                // console.warn("ye to chal rhi hy")
            }
            else{
                this.setState({nameErr:""})
            } 
            if(this.state.email ==""){
                this.setState({emailErr:"Email field is required"})
            }
            else{
                this.setState({emailErr:""})
            }
            if(this.state.degree ==""){
                this.setState({degreeErr:"Degree field is required"})
            }
            else {
                this.setState({degreeErr:""})
            }
            if(this.state.facaulty ==""){
                this.setState({facaultyErr:"Facaulty field is required"})
            }
            else {
                this.setState({facaultyErr:""})
            }
            if(this.state.phone ==""){
                this.setState({phoneErr:"Phone field is required"})
            }
            else {
                this.setState({phoneErr:""})
            }
            if(this.state.gender ==""){
                this.setState({genderErr:"Gender field is required"})
            }
            else {
                this.setState({genderErr:""})
            }
            if(this.state.age ==""){
                this.setState({ageErr:"Age field is required"})
            }
            else {
                this.setState({ageErr:""})
            }
            if(this.state.password ==""){
                this.setState({passwordErr:"Password field is required"})
            }
            else {
                this.setState({passwordErr:""})
                this.props.navigation.navigate('Login')
            }
        }
        render(){
        return(
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.heading}>Register</Text>
                    <View>
                        <Text style={styles.formText}>Name</Text>
                        <TextInput 
                            placeholder={'Enter Your Name'}
                            style={styles.formInput}
                            onChangeText={text => {this.setState({name:text})}}
                            minLength="3"
                        />
                    </View>
                    <Text style={{color:'red'}}>{this.state.nameErr}</Text>
                    <View>
                        <Text style={styles.formText}>Email</Text>
                        <TextInput 
                            placeholder={'Enter Your Email'}
                            style={styles.formInput}
                            onChangeText={text => {this.setState({email:text})}}
                        />
                    </View>
                    <Text style={{color:'red'}}>{this.state.emailErr}</Text>
                    <View>
                        <Text style={styles.formText}>Degree</Text>
                        <TextInput 
                            placeholder={'Enter Your Degree e.g. Bachelors'}
                            style={styles.formInput}
                            onChangeText={text => {this.setState({degree:text})}}
                        />
                    </View>
                    <Text style={{color:'red'}}>{this.state.degreeErr}</Text>
                    <View>
                        <Text style={styles.formText}>Facaulty</Text>
                        <TextInput 
                            placeholder={'Enter Your Facaulty'}
                            style={styles.formInput}
                            onChangeText={text => {this.setState({facaulty:text})}}
                            minLength="3"
                        />
                    </View>
                    <Text style={{color:'red'}}>{this.state.facaultyErr}</Text>
                    <View>
                        <Text style={styles.formText}>Phone</Text>
                        <TextInput 
                            placeholder={'Enter Your Phone'}
                            style={styles.formInput}
                            onChangeText={text => {this.setState({phone:text})}}
                            minLength="11"
                            keyboardType="numberic"
                        />
                    </View>
                    <Text style={{color:'red'}}>{this.state.phoneErr}</Text>
                    <View>
                        <Text style={styles.formText}>Gender</Text>
                        <TextInput 
                            placeholder={'Enter Your Gender e.g. Male'}
                            style={styles.formInput}
                            onChangeText={text => {this.setState({gender:text})}}
                        />
                    </View>
                    <Text style={{color:'red'}}>{this.state.genderErr}</Text>
                    <View>
                        <Text style={styles.formText}>Age</Text>
                        <TextInput 
                            placeholder={'Enter Your Age'}
                            style={styles.formInput}
                            onChangeText={text => {this.setState({age:text})}}
                            minLength="2"
                            maxLength="3"
                            keyboardType="numeric"
                        />
                        <Text style={{color:'red'}}>{this.state.ageErr}</Text>
                    </View>
                    <View>
                        <Text style={styles.formText}>Password</Text>
                        <TextInput 
                            placeholder={'Enter Your Password'}
                            style={styles.formInput}
                            onChangeText={text => {this.setState({password:text})}}
                            minLength="5"
                            maxLength="15"
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={{color:'red'}}>{this.state.passwordErr}</Text>
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.appButtonContainer}
                            
                            onPress={()=> {this.onPressButton(
                                this.state.name,
                                this.state.email,
                                this.state.degree,
                                this.state.facaulty,
                                this.state.phone,
                                this.state.gender,                        
                                this.state.age,
                                this.state.password,
                            )}}
                        >
                        <Text style={styles.appButtonText}> Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',marginVertical:20}}>
                        <Text>Already have an Account?</Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => this.props.navigation.navigate('Login')}
                            >
                            <Text style={{color:'#00ffff',fontWeight:'bold'}}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Register;

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
        color:'gray',
        fontWeight:'bold',
        fontSize:18,
        borderBottomStyle:'solid',
        borderTopStyle:'none',
        borderLeftStyle:'none',
        borderRightStyle:'none',
        borderWidth:1,
        borderColor:'gray',
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
  