import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function CreateSurveyScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={styles.closeButton}
        >
          <Text style={styles.closeIcon}>×</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Metric Survey</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={() => {
            // Handle save
            console.log("Save pressed");
            router.back();
          }}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Project Title*"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.contextInput}
            placeholder="Give context here..."
            placeholderTextColor="#999"
            multiline
          />
          <Text style={styles.helperText}>
            Include your goals, why you want this feature, etc
          </Text>
        </View>

        <TouchableOpacity style={styles.addPeopleButton}>
          <Text style={styles.addPeopleIcon}>👤</Text>
          <Text style={styles.addPeopleText}>+ Add people</Text>
        </TouchableOpacity>

        <View style={styles.timeInput}>
          <TextInput
            style={styles.durationInput}
            placeholder="10 or 20 minutes"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.dateContainer}>
          <TouchableOpacity style={styles.dateInput}>
            <Text style={styles.dateText}>Start date</Text>
            <Text style={styles.clockIcon}>🕐</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateInput}>
            <Text style={styles.dateText}>End date</Text>
            <Text style={styles.clockIcon}>🕐</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.questionContainer}>
          <View style={styles.questionDot} />
          <TextInput
            style={styles.questionInput}
            placeholder="Question 1"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.questionContainer}>
          <View style={styles.questionDot} />
          <TextInput
            style={styles.questionInput}
            placeholder="Insert Links to Figma, Presentation, jpg, png"
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity style={styles.addQuestionButton}>
          <Text style={styles.addQuestionText}>+ Add Question</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pasteQuestionsButton}>
          <Text style={styles.pasteIcon}>📋</Text>
          <Text style={styles.pasteText}>Paste Defined Questions</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  closeButton: {
    padding: 8,
  },
  closeIcon: {
    fontSize: 24,
    color: "#000",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  saveButton: {
    backgroundColor: "#446388",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 24,
  },
  titleInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: 8,
  },
  contextInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: 8,
    minHeight: 80,
  },
  helperText: {
    fontSize: 14,
    color: "#999",
    marginTop: 4,
  },
  addPeopleButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    marginBottom: 24,
  },
  addPeopleIcon: {
    fontSize: 20,
  },
  addPeopleText: {
    color: "#666",
    fontSize: 16,
  },
  timeInput: {
    marginBottom: 24,
  },
  durationInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: 8,
  },
  dateContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  dateInput: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: 8,
  },
  dateText: {
    fontSize: 16,
    color: "#999",
  },
  clockIcon: {
    fontSize: 18,
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 24,
  },
  questionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#446388",
  },
  questionInput: {
    flex: 1,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingVertical: 8,
  },
  addQuestionButton: {
    marginBottom: 24,
  },
  addQuestionText: {
    color: "#446388",
    fontSize: 16,
    fontWeight: "500",
  },
  pasteQuestionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 24,
  },
  pasteIcon: {
    fontSize: 20,
  },
  pasteText: {
    color: "#666",
    fontSize: 16,
  },
}); 