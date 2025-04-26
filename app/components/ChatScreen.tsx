import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'other';
  timestamp?: string;
}

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey Danica!',
      sender: 'other',
    },
    {
      id: '2',
      text: "This won't take long, your feedback will help!",
      sender: 'other',
    },
    {
      id: '3',
      text: 'hi noah! sure, happy to help',
      sender: 'user',
    },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          text: message.trim(),
          sender: 'user',
        },
      ]);
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.headerProfile}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
          <View style={styles.headerInfo}>
            <Text style={styles.headerName}>Noah</Text>
            <Text style={styles.headerCompany}>Daymi</Text>
          </View>
        </View>
        <Text style={styles.headerTime}>10:00</Text>
      </View>

      {/* Chat Messages */}
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageWrapper,
              msg.sender === 'user' ? styles.userMessageWrapper : null,
            ]}
          >
            {msg.sender === 'other' && (
              <Image
                source={require('../../assets/images/avatar.png')}
                style={styles.messageAvatar}
              />
            )}
            <View
              style={[
                styles.messageBubble,
                msg.sender === 'user' ? styles.userMessageBubble : styles.otherMessageBubble,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  msg.sender === 'user' ? styles.userMessageText : styles.otherMessageText,
                ]}
              >
                {msg.text}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Quick Replies */}
      <View style={styles.quickReplies}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.quickReplyButton}>
            <Text style={styles.quickReplyText}>I like it!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickReplyButton}>
            <Text style={styles.quickReplyText}>Hm, not the best.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickReplyButton}>
            <Text style={styles.quickReplyText}>Idk.</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Input Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        style={styles.inputContainer}
      >
        <TouchableOpacity style={styles.emojiButton}>
          <Ionicons name="happy-outline" size={24} color="#666" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 12,
  },
  headerProfile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  headerCompany: {
    fontSize: 14,
    color: '#6B7280',
  },
  headerTime: {
    fontSize: 14,
    color: '#6B7280',
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-end',
  },
  userMessageWrapper: {
    justifyContent: 'flex-end',
  },
  messageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 20,
  },
  userMessageBubble: {
    backgroundColor: '#6366F1',
    borderBottomRightRadius: 4,
  },
  otherMessageBubble: {
    backgroundColor: '#F3F4F6',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#fff',
  },
  otherMessageText: {
    color: '#000',
  },
  quickReplies: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  quickReplyButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  quickReplyText: {
    color: '#374151',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#fff',
  },
  emojiButton: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 