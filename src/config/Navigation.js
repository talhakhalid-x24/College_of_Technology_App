import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Start from '../screens/Start';
import Login from '../screens/Login';
import Register from '../screens/Register';
import StdProfile from '../screens/StdProfile';
import Companies from '../screens/Companies';
import Company from '../screens/Company';
import Company_Register from '../screens/Company_Register';
import EmpProfile from '../screens/EmpProfile';
import Students from '../screens/Students';
import AdminLogin from '../screens/AdminLogin';
import AdminProfile from '../screens/AdminProfile';
import Profile_Student from '../screens/Profile_Student';
import Profile_Company from '../screens/Profile_Company';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{
          headerStyle: {
            backgroundColor: '#00ffff',
            borderColor: '#00ffff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          } }}
          />
          <Stack.Screen name="Start" component={Start} 
          options={{
            headerStyle: {
              backgroundColor: '#00ffff',
              borderColor: '#00ffff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            } }}
            />
          <Stack.Screen name="Register" component={Register} 
          options={{
            headerStyle: {
              backgroundColor: '#00ffff',
              borderColor: '#00ffff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            } }}
            />
            <Stack.Screen name="Login" component={Login} 
            options={{
              headerStyle: {
                backgroundColor: '#00ffff',
                borderColor: '#00ffff',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              } }}
              />
              <Stack.Screen name="StdProfile" component={StdProfile} 
              options={{
                headerStyle: {
                  backgroundColor: '#00ffff',
                  borderColor: '#00ffff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                } }}
                />
                <Stack.Screen name="Companies" component={Companies} 
                options={{
                  headerStyle: {
                    backgroundColor: '#00ffff',
                    borderColor: '#00ffff',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  } }}
                  />
                  <Stack.Screen name="Company" component={Company} 
                  options={{
                    headerStyle: {
                      backgroundColor: '#00ffff',
                      borderColor: '#00ffff',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    } }}
                    />
                    <Stack.Screen name="Company_Register" component={Company_Register} 
                    options={{
                      headerStyle: {
                        backgroundColor: '#00ffff',
                        borderColor: '#00ffff',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      } }}
                      />
                      <Stack.Screen name="EmpProfile" component={EmpProfile} 
                      options={{
                        headerStyle: {
                          backgroundColor: '#00ffff',
                          borderColor: '#00ffff',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        } }}
                        />
                        <Stack.Screen name="Students" component={Students} 
                        options={{
                          headerStyle: {
                            backgroundColor: '#00ffff',
                            borderColor: '#00ffff',
                          },
                          headerTintColor: '#fff',
                          headerTitleStyle: {
                            fontWeight: 'bold',
                          } }}
                          />
                          <Stack.Screen name="AdminLogin" component={AdminLogin} 
                          options={{
                            headerStyle: {
                              backgroundColor: '#00ffff',
                              borderColor: '#00ffff',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                            } }}
                            />
                            <Stack.Screen name="AdminProfile" component={AdminProfile} 
                            options={{
                              headerStyle: {
                                backgroundColor: '#00ffff',
                                borderColor: '#00ffff',
                              },
                              headerTintColor: '#fff',
                              headerTitleStyle: {
                                fontWeight: 'bold',
                              } }}
                              />
                              <Stack.Screen name="Profile_Student" component={Profile_Student} 
                              options={{
                                headerStyle: {
                                  backgroundColor: '#00ffff',
                                  borderColor: '#00ffff',
                                },
                                headerTintColor: '#fff',
                                headerTitleStyle: {
                                  fontWeight: 'bold',
                                } }}
                                />
                                <Stack.Screen name="Profile_Company" component={Profile_Company} 
                                options={{
                                  headerStyle: {
                                    backgroundColor: '#00ffff',
                                    borderColor: '#00ffff',
                                  },
                                  headerTintColor: '#fff',
                                  headerTitleStyle: {
                                    fontWeight: 'bold',
                                  } }}
                                  />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;