import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface ConversationItem {
  company: string;
  date: string;
  duration: string;
}

const conversations: ConversationItem[] = [
  {
    company: 'Beli',
    date: '12 August 2024',
    duration: '10 mins'
  },
  {
    company: 'JP Morgan',
    date: '07 August 2024',
    duration: '5 mins'
  },
  {
    company: 'MDB',
    date: '07 August 2024',
    duration: '5 mins'
  }
];

export default function MobileAppScreen() {
  const handleStartChat = () => {
    router.push('/chat');
  };

  return (
    <View style={styles.screenBorder}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>~ Hi, Danica!</Text>
          <View style={styles.searchButtonContainer}>
            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name="search" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* New Invite Card */}
        <View style={styles.inviteCard}>
          <Text style={styles.newInviteText}>New Invite!</Text>
          <Text style={styles.companyName}>Daymi</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.startButton} onPress={handleStartChat}>
              <Text style={styles.startButtonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.withdrawButton}>
              <Text style={styles.withdrawButtonText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Conversations */}
        <View style={styles.conversationsContainer}>
          <View style={styles.conversationsHeader}>
            <Text style={styles.conversationsTitle}>Recent Conversations</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* Time Filter */}
          <View style={styles.timeFilter}>
            <TouchableOpacity style={styles.timeFilterButton}>
              <Text style={styles.timeFilterText}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeFilterButton}>
              <Text style={[styles.timeFilterText, styles.selectedTime]}>Month</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeFilterButton}>
              <Text style={styles.timeFilterText}>Year</Text>
            </TouchableOpacity>
          </View>

          {/* Conversation List */}
          <ScrollView style={styles.conversationsList} showsVerticalScrollIndicator={false}>
            {conversations.map((item, index) => (
              <TouchableOpacity key={index} style={styles.conversationItem}>
                <View>
                  <Text style={styles.companyNameText}>{item.company}</Text>
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <Text style={styles.durationText}>{item.duration}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenBorder: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#4F46E5',
    borderStyle: 'dashed',
    borderRadius: 20,
    margin: 16,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  searchButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    overflow: 'hidden',
  },
  searchButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inviteCard: {
    backgroundColor: '#F8F0FF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  newInviteText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 8,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  companyName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#5B21B6',
    marginBottom: 20,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  startButton: {
    backgroundColor: '#5B21B6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  withdrawButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  withdrawButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  conversationsContainer: {
    flex: 1,
  },
  conversationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  conversationsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  seeAllText: {
    fontSize: 14,
    color: '#5B21B6',
    fontWeight: '500',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  timeFilter: {
    flexDirection: 'row',
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  timeFilterButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  timeFilterText: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  selectedTime: {
    color: '#000',
    fontWeight: '600',
  },
  conversationsList: {
    flex: 1,
  },
  conversationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  companyNameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  dateText: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  durationText: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
}); 