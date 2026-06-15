

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';

// import { LinearGradient } from 'expo-linear-gradient';
// import { router } from 'expo-router';

// export default function HomeScreen() {

//   return (

//     <LinearGradient
//       colors={['#d4fc79', '#96e6a1', '#56ab2f']}
//       style={styles.container}
//     >

//       <StatusBar barStyle="dark-content" />

//       <View style={styles.topSection}>

//         <Text style={styles.emoji}>
//           🌿
//         </Text>

//         <Text style={styles.title}>
//           Plant Disease Detection
//         </Text>

//         <Text style={styles.subtitle}>
//           Detect plant diseases instantly using AI and keep your plants healthy.
//         </Text>

//       </View>

//       <View style={styles.card}>
// {/* 
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => router.push('/camera')}
//         >
//           <Text style={styles.buttonIcon}>
//             📸
//           </Text>

//           <Text style={styles.buttonText}>
//             Upload Plant Image
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.chatButton}
//           onPress={() => router.push('/chatbot')}
//         >
//           <Text style={styles.buttonIcon}>
//             🤖
//           </Text>

//           <Text style={styles.buttonText}>
//             AI Plant Assistant
//           </Text>
//         </TouchableOpacity>
// <TouchableOpacity
//   style={styles.aboutButton}
//   onPress={() => router.push('/about')}
// >
//   <Text style={styles.buttonText}>
//     ℹ️ About App
//   </Text>
// </TouchableOpacity> */}
        


// <TouchableOpacity
//   style={styles.actionButton}
//   onPress={() => router.push('/camera')}
// >
//   <Text style={styles.buttonIcon}>📸</Text>
//   <Text style={styles.buttonText}>Upload Plant Image</Text>
// </TouchableOpacity>

// <TouchableOpacity
//   style={styles.actionButton}
//   onPress={() => router.push('/chatbot')}
// >
//   <Text style={styles.buttonIcon}>🤖</Text>
//   <Text style={styles.buttonText}>AI Plant Assistant</Text>
// </TouchableOpacity>

// <TouchableOpacity
//   style={styles.actionButton}
//   onPress={() => router.push('/about')}
// >
//   <Text style={styles.buttonIcon}>ℹ️</Text>
//   <Text style={styles.buttonText}>About</Text>
// </TouchableOpacity>
//       </View>

      

//       <Text style={styles.footer}>
//         Smart Farming • Healthy Plants • Better Harvest
//       </Text>

//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
// actionButton: {
//   backgroundColor: '#166534',
//   paddingVertical: 18,
//   paddingHorizontal: 20,
//   borderRadius: 18,
//   flexDirection: 'row',
//   alignItems: 'center',
//   // justifyContent: 'center','
//   justifyContent: 'flex-start',
//   marginBottom: 18,
//   elevation: 5,
// },




//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     paddingVertical: 80,
//     paddingHorizontal: 25,
//   },

//   topSection: {
//     alignItems: 'center',
//     marginTop: 40,
//   },

//   emoji: {
//     fontSize: 90,
//     marginBottom: 20,
//   },

//   title: {
//     fontSize: 34,
//     fontWeight: 'bold',
//     color: '#14532D',
//     textAlign: 'center',
//   },

//   subtitle: {
//     fontSize: 17,
//     color: '#1b4332',
//     textAlign: 'center',
//     marginTop: 15,
//     lineHeight: 25,
//     paddingHorizontal: 10,
//   },

//   card: {
//     backgroundColor: 'rgba(255,255,255,0.25)',
//     borderRadius: 30,
//     padding: 25,
//     backdropFilter: 'blur(10px)',
//   },

//   button: {
//     backgroundColor: '#166534',
//     paddingVertical: 18,
//     borderRadius: 18,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//     elevation: 5,
//   },

//   chatButton: {
//     backgroundColor: '#2d6a4f',
//     paddingVertical: 18,
//     borderRadius: 18,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 5,
//   },

//   buttonIcon: {
//     fontSize: 22,
//     marginRight: 10,
//   },

//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   footer: {
//     textAlign: 'center',
//     color: '#14532D',
//     fontSize: 15,
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   aboutButton: {
//   backgroundColor: '#0F766E',
//   padding: 15,
//   width: '90%',
//   borderRadius: 15,
//   marginTop: 20,
// },
// });






import React, { useContext } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { LanguageContext } from '../context/LanguageContext';
// import { translations } from '../translations';

import { LanguageContext } from '../src/context/LanguageContext';
// import { translations } from '../translations';
import { translations } from '../src/translations';


import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function HomeScreen() {
 const { language, toggleLanguage } = useContext(LanguageContext);
  const t = translations[language];
  return (

    <LinearGradient
      colors={['#d4fc79', '#96e6a1', '#56ab2f']}
      style={styles.container}
    >

      <StatusBar barStyle="dark-content" />

      <View style={styles.topSection}>

        <Text style={styles.emoji}>
          🌿
        </Text>

        <Text style={styles.title}>
  {t.title}
</Text>

<Text style={styles.subtitle}>
  {t.subtitle}
</Text>

      </View>

      <View style={styles.card}>

        
{/* <TouchableOpacity
  onPress={toggleLanguage}
  style={styles.langButton}
>
  <Text style={{ fontSize: 18 }}>
    {language === 'en' ? '🇮🇳' : '🇬🇧'}
  </Text>
</TouchableOpacity> */}

<TouchableOpacity
  style={styles.actionButton}
  onPress={() => router.push('/camera')}
>
  <Text style={styles.buttonIcon}>📸</Text>
  <Text style={styles.buttonText}>{t.upload}</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.actionButton}
  onPress={() => router.push('/chatbot')}
>
  <Text style={styles.buttonIcon}>🤖</Text>
  <Text style={styles.buttonText}>{t.assistant}</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.actionButton}
  onPress={() => router.push('/about')}
>
  <Text style={styles.buttonIcon}>ℹ️</Text>
<Text style={styles.buttonText}>{t.about}</Text>
</TouchableOpacity>
      </View>
<TouchableOpacity
  onPress={toggleLanguage}
  style={{
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#14532D',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  }}
>
  <Text style={{ color: '#fff', fontWeight: 'bold' }}>
    {language === 'en' ? 'हिंदी' : 'English'}
  </Text>
</TouchableOpacity>
      

      <Text style={styles.footer}>
        Smart Farming • Healthy Plants • Better Harvest
      </Text>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
actionButton: {
  backgroundColor: '#166534',
  paddingVertical: 18,
  paddingHorizontal: 20,
  borderRadius: 18,
  flexDirection: 'row',
  alignItems: 'center',
  // justifyContent: 'center','
  justifyContent: 'flex-start',
  marginBottom: 18,
  elevation: 5,
},




  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 80,
    paddingHorizontal: 25,
  },

  topSection: {
    alignItems: 'center',
    marginTop: 40,
  },

  emoji: {
    fontSize: 90,
    marginBottom: 20,
  },
  langButton: {
  position: 'absolute',
  top: 50,
  right: 20,
  backgroundColor: '#14532D',
  padding: 10,
  borderRadius: 30,
  elevation: 5,
},

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#14532D',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 17,
    color: '#1b4332',
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 25,
    paddingHorizontal: 10,
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 30,
    padding: 25,
    backdropFilter: 'blur(10px)',
  },

  button: {
    backgroundColor: '#166534',
    paddingVertical: 18,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 5,
  },

  chatButton: {
    backgroundColor: '#2d6a4f',
    paddingVertical: 18,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  buttonIcon: {
    fontSize: 22,
    marginRight: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footer: {
    textAlign: 'center',
    color: '#14532D',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },
  aboutButton: {
  backgroundColor: '#0F766E',
  padding: 15,
  width: '90%',
  borderRadius: 15,
  marginTop: 20,
},
});





