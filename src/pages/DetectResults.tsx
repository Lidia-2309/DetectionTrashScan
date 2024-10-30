// screens/DetectResultsPage.js
import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, Dimensions, TouchableOpacity, View, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window');

//const DetectResultsPage = ({ route, navigation }: any) => {
  const DetectResultsPage = () => {
  //const { photo, recognitions } = route.params;

  // const renderRecognition = ({ item }: any) => (
  //   <View style={styles.recognitionItem}>
  //     <Text style={styles.labelText}>Objeto: {item.label}</Text>
  //     <Text style={styles.confidenceText}>Confiança: {(item.confidence * 100).toFixed(2)}%</Text>
  //   </View>
  // );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Resultado da Detecção</Text>

        {/* <Image source={{ uri: photo }} style={styles.image} resizeMode="contain" />

        <FlatList
          data={recognitions}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderRecognition}
          style={styles.list}
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity> */}
      </View>
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
  card: {
    width: width * 0.9,
    height: height * 0.85,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 10,
    marginBottom: 15,
  },
  list: {
    width: '100%',
    marginTop: 10,
  },
  recognitionItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    elevation: 1,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  confidenceText: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#678F7C',
    padding: 10,
    borderRadius: 5,
    width: width * 0.5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetectResultsPage;
