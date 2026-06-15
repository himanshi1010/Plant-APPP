import React, { useState, useRef, useContext } from 'react';
// import { LanguageContext } from '../context/LanguageContext';
import { LanguageContext } from '../src/context/LanguageContext';
// import { translations } from '../translations';
import { translations } from '../src/translations';
import { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import axios from 'axios';

export default function ChatbotScreen() {
  useEffect(() => {
  scrollViewRef.current?.scrollToEnd({ animated: true });
}, [messages]);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const scrollViewRef = useRef(null);

  const askAI = async () => {

    if (!message.trim()) {
      return;
    }

    const currentMessage = message;

    setMessages(prev => [
      ...prev,
      {
        type: 'user',
        text: currentMessage,
      },
    ]);

    setMessage('');
    setLoading(true);

    try {

      const response = await axios.post(
        'http://10.112.85.196:5000/chat',
        {
          message: currentMessage,
        }
      );

      setMessages(prev => [
        ...prev,
        {
          type: 'bot',
          text: response.data.reply,
        },
      ]);

    } catch (error) {

      console.log(error);

      setMessages(prev => [
        ...prev,
        {
          type: 'bot',
          text: '❌ Failed to connect to AI server.',
        },
      ]);

    }

    setLoading(false);
  };


  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <Text style={styles.title}>
        {t.chatbotTitle}
      </Text>

      <ScrollView
        ref={scrollViewRef}
        style={styles.chatContainer}
        contentContainerStyle={{ paddingBottom: 20 }}
        onContentSizeChange={() =>
          scrollViewRef.current?.scrollToEnd({ animated: true })
        }
      >

        {messages.length === 0 && (

          <View style={styles.welcomeBox}>

            <Text style={styles.welcomeTitle}>
             {t.chatbotWelcome}
           </Text>
            <Text style={styles.welcomeText}>
           {t.chatbotAskAnything}
            </Text>

            <Text style={styles.welcomeText}>
                {t.disease}
            </Text>

            <Text style={styles.welcomeText}>
               {t.fertilizer}
            </Text>

            <Text style={styles.welcomeText}>
             {t.pest}
            </Text>

            <Text style={styles.welcomeText}>
              {t.farming}
            </Text>

          </View>

        )}

        {messages.map((msg, index) => (

          <View
            key={index}
            style={[
              styles.messageBubble,
              msg.type === 'user'
                ? styles.userBubble
                : styles.botBubble,
            ]}
          >

            <Text
              style={[
                styles.messageText,
                msg.type === 'user'
                  ? styles.userText
                  : styles.botText,
              ]}
            >
              {msg.text}
            </Text>

          </View>

        ))}

        {loading && (

          <View style={styles.botBubble}>

            <Text style={styles.botText}>
              AI is typing...
            </Text>

          </View>

        )}

      </ScrollView>

      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
placeholder={t.placeholder}
          placeholderTextColor="#777"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={askAI}
        >

          <Text style={styles.sendText}>
            ➤
          </Text>

        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F4F8F4',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 55,
    marginBottom: 10,
    color: '#14532D',
  },

  chatContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },

  welcomeBox: {
    backgroundColor: '#E8F5E9',
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#14532D',
    marginBottom: 10,
    textAlign: 'center',
  },

  welcomeText: {
    fontSize: 16,
    color: '#14532D',
    marginBottom: 5,
    textAlign: 'center',
  },

  messageBubble: {
    maxWidth: '80%',
    padding: 14,
    borderRadius: 18,
    marginBottom: 12,
  },

  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },

  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#166534',
  },

  messageText: {
    fontSize: 16,
    lineHeight: 24,
  },

  userText: {
    color: '#000',
  },

  botText: {
    color: '#FFF',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },

  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 16,
    maxHeight: 120,
  },

  sendButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#166534',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  sendText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

});






// import React, { useState } from 'react';

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   ActivityIndicator,
// } from 'react-native';
  
// import axios from 'axios';

// export default function ChatbotScreen() {

//   const [message, setMessage] = useState('');
//   const [reply, setReply] = useState('');
//   const [loading, setLoading] = useState(false);

//   const askAI = async () => {

//     if (!message.trim()) {
//       return;
//     }

//     setLoading(true);

//     try {

//       const response = await axios.post(
//         'http://10.112.85.196:5000/chat',
//         // 'http://172.16.1.185:5000/chat',
//         {
//           message: message,
//         }
//       );

//       setReply(response.data.reply);

//     } catch (error) {

//       console.log(error);

//       setReply('Failed to connect to AI server.');

//     }

//     setLoading(false);
//   };

//   return (

//     <ScrollView contentContainerStyle={styles.container}>

//       <Text style={styles.title}>
//         AI Plant Assistant
//       </Text>

//       <TextInput
//         style={styles.input}
//         placeholder='Ask plant related question...'
//         value={message}
//         onChangeText={setMessage}
//         multiline
//       />

//       <TouchableOpacity
//         style={styles.button}
//         onPress={askAI}
//       >
//         <Text style={styles.buttonText}>
//           Ask AI
//         </Text>
//       </TouchableOpacity>

//       {loading && (
//         <ActivityIndicator
//           size="large"
//           color="#166534"
//           style={{ marginTop: 20 }}
//         />
//       )}

//       {reply !== '' && (
//         <View style={styles.replyBox}>
//           <Text style={styles.replyText}>
//             {reply}
//           </Text>
//         </View>
//       )}

//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({

//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#d4f5d0',
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30,
//     color: '#14532D',
//   },

//   input: {
//     backgroundColor: 'white',
//     borderRadius: 15,
//     padding: 15,
//     height: 140,
//     fontSize: 16,
//     textAlignVertical: 'top',
//   },

//   button: {
//     backgroundColor: '#166534',
//     padding: 15,
//     borderRadius: 15,
//     marginTop: 20,
//   },

//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   replyBox: {
//     backgroundColor: 'white',
//     marginTop: 20,
//     padding: 20,
//     borderRadius: 15,
//   },

//   replyText: {
//     fontSize: 17,
//     color: '#000',
//   },
// });


