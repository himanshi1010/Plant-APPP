


import React, { useState, useContext } from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { LanguageContext } from '../src/context/LanguageContext';
import { translations } from '../src/translations';
export default function CameraScreen() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {

    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
      Alert.alert(t.cameraSelectFirst);
      return;
    }

     let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {

    const permission =
      await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(t.cameraPermissionRequired);
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const predictDisease = async () => {

    // if (!image) {
    //   Alert.alert('Please select an image first');
    //   return;
    // }
if (!image) {
  Alert.alert(
    'No Image',
    'Please upload a plant leaf image first.'
  );
  return;
}
    setLoading(true);

    let formData = new FormData();

    formData.append('image', {
      uri: image,
      name: 'plant.jpg',
      type: 'image/jpeg',
    });

    try {

      const response = await axios.post(
  'http://10.112.85.196:5000/predict',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log("Backend Response:", response.data);

      router.push({
        pathname: '/result',
        params: {
          result: JSON.stringify(response.data),
          image: image,
        },
      });

    } catch (error) {

      console.log(error);

      Alert.alert(
        'Backend connection failed',
        'Make sure backend is running and mobile + laptop are on same WiFi'
      );

    } finally {
      setLoading(false);
    }
  };

  return (

    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.heading}>
        🌿 {t.cameraTitle}
      </Text>

      <Text style={styles.subheading}>
        {t.cameraSubtitle}
      </Text>

      <View style={styles.card}>

        <Image
          source={{
            uri:
              image ||
              'https://cdn-icons-png.flaticon.com/512/628/628324.png',
          }}
          style={styles.image}
        />

        <TouchableOpacity
          style={styles.galleryButton}
          onPress={pickImage}
        >
          <Text style={styles.buttonText}>
            {t.cameraGallery}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cameraButton}
          onPress={openCamera}
        >
          <Text style={styles.buttonText}>
            {t.cameraOpenCamera}
          </Text>
        </TouchableOpacity>

        {image && (
          <TouchableOpacity
            style={styles.predictButton}
            onPress={predictDisease}
          >

            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                {t.cameraPredict}
              </Text>
            )}

          </TouchableOpacity>
        )}

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#E8FCEB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#14532D',
    marginBottom: 10,
    textAlign: 'center',
  },

  subheading: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    elevation: 8,
  },

  image: {
    width: 260,
    height: 260,
    borderRadius: 25,
    marginBottom: 25,
    resizeMode: 'cover',
  },

  galleryButton: {
    width: '100%',
    backgroundColor: '#16A34A',
    paddingVertical: 16,
    borderRadius: 18,
    marginBottom: 15,
    elevation: 3,
  },

  cameraButton: {
    width: '100%',
    backgroundColor: '#15803D',
    paddingVertical: 16,
    borderRadius: 18,
    marginBottom: 15,
    elevation: 3,
  },

  predictButton: {
    width: '100%',
    backgroundColor: '#14532D',
    paddingVertical: 18,
    borderRadius: 18,
    marginTop: 10,
    elevation: 3,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});