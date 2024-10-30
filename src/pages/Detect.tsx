import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Dimensions, View, TouchableOpacity, Image, Alert } from 'react-native';
import { Asset, ImageLibraryOptions, launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const { width, height } = Dimensions.get('window');

const DetectPage = ({ navigation }: any) => {
  const [photo, setPhoto] = useState<Asset | null>(null);
  const [recognitions, setRecognitions] = useState<any>([]);


  const handleImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };
    launchImageLibrary(options, (response) => { 
      if (response.assets && response.assets.length > 0) {
        setPhoto(response.assets[0]); 
      } 
    });
  };

  const handleCamera = async () => {
    const cameraPermission = await check(PERMISSIONS.ANDROID.CAMERA);
  
    if (cameraPermission === RESULTS.DENIED) {
      const cameraRequest = await request(PERMISSIONS.ANDROID.CAMERA);
      if (cameraRequest !== RESULTS.GRANTED) {
        Alert.alert(
          'Permissão Necessária',
          'Permissão de câmera necessária para tirar foto. Se a solicitação não aparecer, acesse as configurações do aplicativo e conceda a permissão.',
        );
        return;
      }
    }

    const storagePermission = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
  
    launchCamera({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.didCancel) {
        return;
      }
      if (response.errorMessage) {
        Alert.alert('Erro', response.errorMessage);
        return;
      }
      if (response.assets && response.assets.length > 0) {
        setPhoto(response.assets[0]); 
      }});
  };

  const handleDetect = async () => { 
    console.log('alo')
  };


  const handleRemovePhoto = () => {
    setPhoto(null); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.dottedCard} onPress={!photo ? handleImagePicker : undefined}>
          {!photo ? (
            <>
              <Icon name="camera-alt" size={30} color="#678F7C" style={styles.icon}/>
              <Text style={styles.clickText}>Clique aqui para navegar pelos arquivos</Text>
              <Text style={styles.extensionsText}>Extensões Suportadas: PNG, JPG, JPEG, WEBP</Text>
            </>
          ) : (
            <View style={styles.imageContainer}>
              <Image source={{ uri: photo.uri }} style={styles.image} resizeMode="contain" />
              <TouchableOpacity style={styles.closeButton} onPress={handleRemovePhoto}>
                <Icon name="close" size={15} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.dividerContainer}> 
          <View style={styles.line} /> 
          <Text style={styles.dividerText}>ou</Text> 
          <View style={styles.line} /> 
        </View>
        <TouchableOpacity style={styles.buttonPhoto} onPress={handleCamera}> 
          <Icon name="camera-alt" size={20} color="white" style={styles.buttonIcon} /> 
          <Text style={styles.buttonText}>Tirar Foto</Text> 
        </TouchableOpacity>
        <View style={styles.buttonContainer}> 
        <TouchableOpacity style={styles.buttonDetect}  onPress={handleDetect}> 
          <Text style={styles.buttonText}>Detectar</Text> 
        </TouchableOpacity>
        </View>
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
  icon: { marginBottom: 10 },
  card: {
    width: width * 0.9, 
    height: height * 0.75, 
    backgroundColor: 'white',
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dottedCard: {
    width: width * 0.7, 
    height: height * 0.30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#678F7C',
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    position: 'relative'
  },
  clickText: {
    fontSize: 12,
    color: 'black',
  },
  extensionsText: {
    fontSize: 10,
    color: 'gray',
  },
  imageContainer: {
    position: 'relative',
    width: width * 0.77,
    height: height * 0.34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { 
    width: width * 0.6, 
    height: height * 0.26, 
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#678F7C',
    borderRadius: 10,
    padding: 3,
  },
  dividerContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 20, 
    paddingHorizontal: width * 0.1,
  }, 
  line: { 
    flex: 0.5, 
    height: 1, 
    backgroundColor: '#ccc', 
  }, 
  dividerText: { 
    marginHorizontal: 10, 
    fontSize: 14, 
    color: '#888', 
  },
  buttonPhoto: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#678F7C', 
    padding: height * 0.015, 
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    borderRadius: 5, 
    marginTop: height * 0.005, 
  }, 
  buttonIcon: { 
    marginRight: 5, 
  }, 
  buttonText: { 
    fontSize: 13, 
    color: 'white', 
  },
  buttonContainer: {
    position: 'relative',
    width: '100%',
    height: height * 0.12,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonDetect: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#06502D', 
    padding: height * 0.015, 
    paddingLeft: width * 0.28,
    paddingRight: width * 0.28,
    borderRadius: 5, 
    marginTop: height * 0.005,
     
  }, 
});

export default DetectPage;




