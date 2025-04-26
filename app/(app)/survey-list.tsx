import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface Survey {
  id: string;
  title: string;
  company: string;
  description: string;
  reward: string;
  estimatedTime: string;
}

// Temporary mock data for surveys
const mockSurveys: Survey[] = [
  {
    id: '1',
    title: 'Customer Satisfaction Survey',
    company: 'TechCorp Inc.',
    description: 'Help us improve our services by sharing your experience',
    reward: '5 points',
    estimatedTime: '5 min',
  },
  {
    id: '2',
    title: 'Product Feedback',
    company: 'Innovate Solutions',
    description: 'Share your thoughts about our latest product',
    reward: '10 points',
    estimatedTime: '8 min',
  },
  {
    id: '3',
    title: 'Market Research',
    company: 'Global Insights',
    description: 'Participate in our market research study',
    reward: '15 points',
    estimatedTime: '10 min',
  },
];

export default function SurveyList() {
  const [surveys] = useState<Survey[]>(mockSurveys);

  const renderSurveyItem = ({ item }: { item: Survey }) => (
    <TouchableOpacity 
      style={styles.surveyCard}
      onPress={() => {
        // TODO: Navigate to survey details or start survey
        console.log('Selected survey:', item.id);
      }}
    >
      <View style={styles.surveyHeader}>
        <Text style={styles.surveyTitle}>{item.title}</Text>
        <Text style={styles.rewardText}>{item.reward}</Text>
      </View>
      
      <Text style={styles.companyText}>{item.company}</Text>
      
      <Text style={styles.descriptionText}>{item.description}</Text>
      
      <View style={styles.surveyFooter}>
        <View style={styles.timeContainer}>
          <Ionicons 
            name="time-outline" 
            size={16} 
            color="#666" 
            style={styles.icon}
          />
          <Text style={styles.timeText}>{item.estimatedTime}</Text>
        </View>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Survey</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Available Surveys</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons 
            name="person-circle-outline" 
            size={24} 
            color="#333" 
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={surveys}
        renderItem={renderSurveyItem}
        keyExtractor={(item: Survey) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileButton: {
    padding: 8,
  },
  listContainer: {
    padding: 20,
  },
  surveyCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  surveyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  surveyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  rewardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  companyText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  surveyFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#666',
  },
  startButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
}); 