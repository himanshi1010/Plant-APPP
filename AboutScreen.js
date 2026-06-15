// // import AboutScreen from '../../screens/AboutScreen';

// // export default AboutScreen;

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image,
// } from 'react-native';

// export default function AboutScreen() {

//   return (

//     <ScrollView
//       contentContainerStyle={styles.container}
//       showsVerticalScrollIndicator={false}
//     >

//       <Text style={styles.heading}>
//         🌿 About Plant Disease Detection App
//       </Text>

//       <Image
//         source={{
//           uri: 'https://cdn-icons-png.flaticon.com/512/2909/2909768.png',
//         }}
//         style={styles.image}
//       />

//       <View style={styles.card}>

//         <Text style={styles.sectionTitle}>
//           📱 About App
//         </Text>

//         <Text style={styles.text}>
//           Plant Disease Detection App is an AI-powered mobile application
//           developed to identify plant leaf diseases using image processing
//           and deep learning techniques.
//         </Text>

//         <Text style={styles.text}>
//           The app helps farmers, students, and researchers quickly detect
//           diseases by simply uploading or capturing a plant leaf image.
//         </Text>

//       </View>

//       <View style={styles.card}>

//         <Text style={styles.sectionTitle}>
//           🤖 Technologies Used
//         </Text>

//         <Text style={styles.text}>
//           • React Native + Expo
//         </Text>

//         <Text style={styles.text}>
//           • Flask Backend
//         </Text>

//         <Text style={styles.text}>
//           • CNN (Convolutional Neural Network)
//         </Text>

//         <Text style={styles.text}>
//           • TensorFlow / Keras
//         </Text>

//         <Text style={styles.text}>
//           • Image Processing
//         </Text>

//       </View>

//       <View style={styles.card}>

//         <Text style={styles.sectionTitle}>
//           🌱 About Dataset
//         </Text>

//         <Text style={styles.text}>
//           This dataset is recreated using offline augmentation from the
//           original dataset.
//         </Text>

//         <Text style={styles.text}>
//           The dataset contains around 87,000 RGB images of healthy and
//           diseased crop leaves categorized into 38 different classes.
//         </Text>

//         <Text style={styles.text}>
//           The dataset is divided into 80/20 ratio for training and
//           validation while preserving directory structure.
//         </Text>

//         <Text style={styles.text}>
//           A separate test directory with 33 images is also created for
//           prediction purposes.
//         </Text>

//         <Text style={styles.subHeading}>
//           📂 Dataset Content
//         </Text>

//         <Text style={styles.text}>
//           • Train: 70,295 images
//         </Text>

//         <Text style={styles.text}>
//           • Validation: 17,572 images
//         </Text>

//         <Text style={styles.text}>
//           • Test: 33 images
//         </Text>

//       </View>

//       <View style={styles.card}>

//         <Text style={styles.sectionTitle}>
//           📖 How To Use App
//         </Text>

//         <Text style={styles.text}>
//           1. Open the Plant Disease Detection App
//         </Text>

//         <Text style={styles.text}>
//           2. Click on Upload Plant Image
//         </Text>

//         <Text style={styles.text}>
//           3. Choose image from gallery or open camera
//         </Text>

//         <Text style={styles.text}>
//           4. Upload clear leaf image
//         </Text>

//         <Text style={styles.text}>
//           5. Click Predict Disease
//         </Text>

//         <Text style={styles.text}>
//           6. View disease prediction, confidence score, treatment,
//           prevention and fertilizer suggestions
//         </Text>

//       </View>

//       <View style={styles.footer}>

//         <Text style={styles.footerText}>
//           🌿 Smart Farming With AI
//         </Text>

//       </View>

//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({

//   container: {
//     padding: 20,
//     backgroundColor: '#E8FCEB',
//     paddingBottom: 40,
//   },

//   heading: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#14532D',
//     marginBottom: 20,
//   },

//   image: {
//     width: 180,
//     height: 180,
//     alignSelf: 'center',
//     marginBottom: 25,
//   },

//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 25,
//     padding: 20,
//     marginBottom: 20,
//     elevation: 5,
//   },

//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#166534',
//     marginBottom: 15,
//   },

//   subHeading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#15803D',
//     marginTop: 15,
//     marginBottom: 10,
//   },

//   text: {
//     fontSize: 17,
//     color: '#374151',
//     lineHeight: 28,
//     marginBottom: 8,
//   },

//   footer: {
//     marginTop: 10,
//     alignItems: 'center',
//   },

//   footerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#14532D',
//   },

// });




import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { LanguageContext } from '../src/context/LanguageContext';
import { translations } from '../src/translations';

export default function AboutScreen() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      // showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>
        {t.aboutTitle}
      </Text>

      <Text style={styles.subTitle}>
        {t.aboutSubtitle}
      </Text>

      <Image
        source={{
          // uri: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800',
          // uri: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1200',
          // uri: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200',
           uri: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200',
        }}
        style={styles.heroImage}
      />

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          📱 {t.aboutAppTitle}
        </Text>

       <Text style={styles.text}>
          {t.aboutAppText1}
        </Text>


         <Text style={styles.text}>
          {t.aboutAppText2}
        </Text>
      </View>

      <View style={styles.card}>
         <Text style={styles.sectionTitle}>
          🤖 {t.techTitle}
        </Text>

        <Text style={styles.text}>• React Native + Expo</Text>
        <Text style={styles.text}>• Flask Backend</Text>
        <Text style={styles.text}>• CNN (Convolutional Neural Network)</Text>
        <Text style={styles.text}>• TensorFlow / Keras</Text>
        <Text style={styles.text}>• Image Processing</Text>
        <Text style={styles.text}>• AI-based Disease Prediction</Text>
      </View>

      <View style={styles.card}>
      <Text style={styles.sectionTitle}>
          🌱 {t.datasetTitle}
        </Text>

        <Text style={styles.text}>
          The dataset was created using offline augmentation from the original
          PlantVillage dataset.
        </Text>

        <Text style={styles.text}>
          It contains approximately 87,000 RGB images of healthy and diseased
          crop leaves categorized into 38 classes.
        </Text>

        <Text style={styles.subHeading}>
          📂 Dataset Statistics
        </Text>

        <Text style={styles.text}>• Training Images: 70,295</Text>
        <Text style={styles.text}>• Validation Images: 17,572</Text>
        <Text style={styles.text}>• Test Images: 33</Text>
        <Text style={styles.text}>• Total Classes: 38</Text>
      </View>

      <View style={styles.card}>
       <Text style={styles.sectionTitle}>
          📖 {t.howToUse}
        </Text>

        <Text style={styles.text}>
          1️⃣ Open the Plant Disease Detection App
        </Text>

        <Text style={styles.text}>
          2️⃣ Click "Upload Plant Image"
        </Text>

        <Text style={styles.text}>
          3️⃣ Select image from gallery or capture using camera
        </Text>

        <Text style={styles.text}>
          4️⃣ Upload a clear image of the plant leaf
        </Text>

        <Text style={styles.text}>
          5️⃣ Click Predict Disease
        </Text>

        <Text style={styles.text}>
          6️⃣ View disease prediction, confidence score, treatment,
          prevention methods and fertilizer recommendations
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          🎓 {t.finalProject}
        </Text>

        <Text style={styles.text}>
          This project was developed as a B.Tech Computer Science final year
          project to support smart farming through Artificial Intelligence and
          Deep Learning technologies.
        </Text>

        <Text style={styles.text}>
          The CNN model analyzes plant leaf images and predicts diseases with
          high accuracy, helping users take preventive actions quickly.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          🌿 Smart Farming • Healthy Plants • Better Harvest 🌿
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F0FFF4',
    paddingBottom: 40,
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#14532D',
    marginTop: 10,
  },

  subTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#15803D',
    marginBottom: 20,
    marginTop: 8,
    fontWeight: '600',
  },

  heroImage: {
    width: '100%',
    height: 220,
    borderRadius: 25,
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 22,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 8,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 15,
  },

  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#15803D',
    marginTop: 15,
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 28,
    marginBottom: 8,
  },

  footer: {
    backgroundColor: '#166534',
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
  },

  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});