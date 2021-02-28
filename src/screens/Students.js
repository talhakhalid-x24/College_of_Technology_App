import React, { Component } from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native';
import Firebase from '../config/firebase';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register : null
        }
    }
    componentDidMount() {
        console.log('mounted')
        Firebase.database().ref('register').on('value' ,(snapshot) =>{
            console.log(snapshot.toJSON());
            const register = [];
            snapshot.forEach( doc => {
                // register.push(doc)
                var key = doc.key;
                var name = snapshot.child(key + '/name').val();
                var email = snapshot.child(key + '/email').val();
                var name = snapshot.child(key + '/name').val();
                var gender = snapshot.child(key + '/gender').val();
                var phone = snapshot.child(key + '/phone').val();
                var age = snapshot.child(key + '/age').val();
                var degree = snapshot.child(key + '/degree').val();
                var facaulty = snapshot.child(key + '/facaulty').val();
                register.push({ 
                    _name: name,
                    _key: key,
                    _email:email,
                    _phone:phone,
                    _gender:gender,
                    _age:age,
                    _degree:degree,
                    _facaulty:facaulty,
                });
            })
            this.setState({register:register})
            console.log(this.state.register)
    })
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.mainHeading}>ALL Students</Text>
                </View>
                {
                    this.state.register &&
                    this.state.register.map( (register,i) => {
                        return(
                            <TouchableOpacity activeOpacity={0.8} key={i} onPress={() => this.props.navigation.navigate('Profile_Student',{
                                name: register._name,
                                phone:register._phone,
                                email:register._email,
                                gender:register._gender,
                                age:register._age,
                                degree:register._degree,
                                facaulty:register._facaulty,
                            })}>
                            <View style={styles.students}>
                                <View style={{width:'25%'}}>
                                    <ImageBackground style={styles.circle}>
                                        <Text style={styles.studentImage}>Img</Text>
                                    </ImageBackground>
                                </View>
                                <View style={styles.detail}>
                                    <Text style={styles.name}>{register._name}</Text>
                                    <Text style={styles.littleText}>{register._email}</Text>
                                    <Text style={styles.littleText}>{register._phone}</Text>
                                </View>
                            </View>   
                            </TouchableOpacity>
                        );
                    })
                } 
            </View>
        );
    }
}

export default Students;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        padding:10,
        backgroundColor:'#00ffff'
    },
    mainHeading: {
        fontSize: 25,
        marginBottom: 10,
        fontWeight:'bold',
    },
    searchBlood: {
        borderBottomWidth: 1,
        paddingBottom: 5,
        outlineColor: 'none',
        outlineStyle: 'none',
        outlineWidth: 'none'
    },
    students: {
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        backgroundColor:'#fff',
        borderRadius:10,
    },
    circle: {
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '70px'
        // alignItems: 'center',
    },
    studentImage: {
        fontSize:29,
        fontWeight:'bold',
        textAlign:'center',
        color:'#000',
        width:'100%',
    },
    detail: {
        marginVertical: 'auto',
        marginHorizontal: 15,
    },
    name : {
        fontWeight:'bold',
        fontSize:20
    },
    littleText : {
        color:'gray'
    }
});