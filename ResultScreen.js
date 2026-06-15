import React, { useContext } from 'react';
import { useLocalSearchParams } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import { LanguageContext } from '../src/context/LanguageContext';
import { translations } from '../src/translations';
export default function ResultScreen({ route }) {

  // const { result, image } = route.params;

  const { language } = useContext(LanguageContext);
  const t = translations[language];

const params = useLocalSearchParams();

const result = JSON.parse(params.result);
const image = params.image;
if (result.prediction === "Not a leaf image") {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4f5d0',
        padding: 25,
      }}
    >
      <Text style={{ fontSize: 60 }}>🍂</Text>
 <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#B91C1C',
          textAlign: 'center',
          marginTop: 15,
        }}
      >
        Invalid Image Detected
      </Text>
<Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          marginTop: 15,
          color: '#374151',
          lineHeight: 28,
        }}
      >
        The uploaded image does not appear to be a plant leaf.
        {"\n\n"}
        Please upload a clear plant leaf image for accurate disease detection.
      </Text>
    </View>
  );
}

  return (

    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>
        {t.resultTitle}
      </Text>
 <Image
        source={{ uri: image }}
        style={styles.image}
      />

      <View style={styles.card}>

        <Text style={styles.label}>
          {t.resultDisease}:
        </Text>

        <Text style={styles.value}>
          {result.prediction}
        </Text>
        <Text style={styles.label}>
          {t.resultConfidence}:
        </Text>

        <Text style={styles.value}>
          {(result.confidence * 100).toFixed(2)}%
        </Text>

        <Text style={styles.label}>
          {t.resultTreatment}:
        </Text>
        <Text style={styles.value}>
          {result.treatment}
        </Text>

        <Text style={styles.label}>
          {t.resultWatering}:
        </Text>

        <Text style={styles.value}>
          {result.watering}
        </Text>
<Text style={styles.label}>
          {t.resultPrevention}:
        </Text>

        <Text style={styles.value}>
          {result.prevention}
        </Text>

        <Text style={styles.label}>
          {t.resultFertilizer}:
        </Text>

        <Text style={styles.value}>
          {result.fertilizer}
        </Text>
         </View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#d4f5d0',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#14532D',
    marginBottom: 20,
  },
image: {
    width: 280,
    height: 280,
    borderRadius: 20,
    marginBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#166534',
    marginTop: 10,
  },
  value: {
    fontSize: 17,
    color: '#000',
    marginTop: 5,
  },
});