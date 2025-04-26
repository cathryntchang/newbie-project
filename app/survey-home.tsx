import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

export default function SurveyHomeScreen() {
  const surveys = [
    {
      id: 1,
      title: "Tagging Feature",
      description: "A sales presentation with a potential client. The meeting is set to take place in London, and the appli...",
      peopleCount: 128,
      date: "This month, April 2025"
    },
    {
      id: 2,
      title: "Conversational Journaling Feature",
      description: "A sales presentation with a potential client. The meeting is set to take place in London, and the appli...",
      peopleCount: 128,
      date: "Last month, March 2025"
    },
    {
      id: 3,
      title: "Daily Summary Feature",
      description: "A sales presentation with a potential client. The meeting is set to take place in London, and the appli...",
      peopleCount: 128,
      date: ""
    },
    {
      id: 4,
      title: "Context-Aware Follow-Ups Feature",
      description: "A sales presentation with a potential client. The meeting is set to take place in London, and the appli...",
      peopleCount: 128,
      date: ""
    }
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.welcomeText}>~ Hi, Noah from Daymi!</Text>
            <Text style={styles.title}>Jan 2024</Text>
            <View style={styles.headerButtons}>
              <TouchableOpacity style={styles.iconButton}>
                <Text style={styles.iconText}>≡</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Text style={styles.iconText}>🔍</Text>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {surveys.map((survey, index) => (
              <View key={survey.id} style={[styles.surveyCard, index > 0 && { marginTop: 16 }]}>
                <View style={styles.surveyHeader}>
                  <View style={styles.peopleCount}>
                    <Text style={styles.peopleIcon}>👥</Text>
                    <Text style={styles.peopleText}>{survey.peopleCount} people surveyed</Text>
                  </View>
                  <TouchableOpacity style={styles.moreButton}>
                    <Text style={styles.iconText}>⋮</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.surveyTitle}>{survey.title}</Text>
                <Text style={styles.surveyDescription}>{survey.description}</Text>

                <TouchableOpacity 
                  style={styles.metricsButton}
                  onPress={() => router.push("/survey-summary")}
                >
                  <Text style={styles.metricsButtonText}>See Metrics</Text>
                  <Text style={styles.metricsIcon}>+</Text>
                </TouchableOpacity>

                {survey.date && (
                  <Text style={styles.dateText}>{survey.date}</Text>
                )}
              </View>
            ))}
          </ScrollView>

          <View style={styles.bottomNav}>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navIcon}>🏷️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navIcon}>📊</Text>
              <Text style={styles.navText}>Surveys</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => {
                router.push("/create-survey");
              }}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 16,
    color: "#666666",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000000",
    marginTop: 24,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 8,
  },
  iconText: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  surveyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  surveyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  peopleCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  peopleIcon: {
    fontSize: 16,
  },
  peopleText: {
    fontSize: 14,
    color: "#666666",
  },
  moreButton: {
    padding: 4,
  },
  surveyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  surveyDescription: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },
  metricsButton: {
    backgroundColor: "#446388",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  metricsButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
    marginRight: 4,
  },
  metricsIcon: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  dateText: {
    fontSize: 14,
    color: "#666666",
    marginTop: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    backgroundColor: "#FFFFFF",
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
  },
  navText: {
    fontSize: 12,
    color: "#000000",
    marginTop: 4,
  },
  addButton: {
    backgroundColor: "#000000",
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
}); 