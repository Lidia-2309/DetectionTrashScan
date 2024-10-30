// screens/HomeScreen.js
import React from 'react';
import { SafeAreaView, Button, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

const { width, height } = Dimensions.get('window');

const HomePage = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode="contain"/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Detect')}> 
        <Text style={styles.buttonText}>Detector de Residuos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: width * 0.7, 
    height: height * 0.15, 
    marginBottom: 20,
  },
  button: { backgroundColor: '#06502D', padding: height * 0.02, paddingLeft:width * 0.07, paddingRight:width * 0.07, borderRadius: 15, alignItems: 'center', }, 
  buttonText: { fontSize: 15, color: 'white', fontFamily: 'Montserrat', fontWeight: '600'},
});

export default HomePage;
