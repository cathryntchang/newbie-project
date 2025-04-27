import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { createNewSurvey } from "./firebase/firebase";

export default function CreateSurveyScreen() {
  const [title, setTitle] = useState("");
  const [invitedUsers, setInvitedUsers] = useState<string[]>([]);
  const [questions, setQuestions] = useState([
    { questionText: "", order: 1 },
    { questionText: "", order: 2 }, // For links/attachments
  ]);
  const [showAddPeople, setShowAddPeople] = useState(false);
  const [newInvitee, setNewInvitee] = useState("");

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: "", order: questions.length + 1 }
    ]);
  };

  const handleQuestionChange = (text: string, index: number) => {
    const newQuestions = [...questions];
    newQuestions[index].questionText = text;
    setQuestions(newQuestions);
  };

  const handleAddInvitee = () => {
    if (newInvitee.trim()) {
      setInvitedUsers([...invitedUsers, newInvitee.trim()]);
      setNewInvitee("");
    }
  };

  const handleRemoveInvitee = (index: number) => {
    const newInvitedUsers = [...invitedUsers];
    newInvitedUsers.splice(index, 1);
    setInvitedUsers(newInvitedUsers);
  };

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a project title");
      return;
    }

    if (questions.some(q => !q.questionText.trim())) {
      Alert.alert("Error", "Please fill in all questions");
      return;
    }

    try {
      // For now hardcoding Daymi's company ID - in real app would get from auth context
      const companyId = "LEyaRS2Mv7CLzP20K0Pe"; // TODO: Get from auth context
      await createNewSurvey(
        companyId,
        title.trim(),
        invitedUsers,
        questions.filter(q => q.questionText.trim()) // Only save non-empty questions
      );
      router.back();
    } catch (error: any) {
      console.error("Error saving survey:", error);
      const errorMessage = error.message === 'Company not found' 
        ? "Company not found. Please check your company ID."
        : "Failed to save survey. Please try again.";
      Alert.alert("Error", errorMessage);
    }
  };

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
          onPress={handleSave}
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
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <TouchableOpacity 
          style={styles.addPeopleButton}
          onPress={() => setShowAddPeople(!showAddPeople)}
        >
          <Text style={styles.addPeopleIcon}>👤</Text>
          <Text style={styles.addPeopleText}>
            {invitedUsers.length ? `${invitedUsers.length} people added` : "+ Add people"}
          </Text>
        </TouchableOpacity>

        {showAddPeople && (
          <View style={styles.inviteSection}>
            <View style={styles.addInviteeContainer}>
              <TextInput
                style={styles.inviteeInput}
                placeholder="Enter username"
                value={newInvitee}
                onChangeText={setNewInvitee}
                onSubmitEditing={handleAddInvitee}
              />
              <TouchableOpacity 
                style={styles.addInviteeButton}
                onPress={handleAddInvitee}
              >
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
            {invitedUsers.map((user, index) => (
              <View key={index} style={styles.inviteeItem}>
                <Text>{user}</Text>
                <TouchableOpacity onPress={() => handleRemoveInvitee(index)}>
                  <Text style={styles.removeInviteeButton}>×</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        {questions.map((question, index) => (
          <View key={index} style={styles.questionContainer}>
            <View style={styles.questionDot} />
            <TextInput
              style={styles.questionInput}
              placeholder={index === 1 ? "Insert Links to Figma, Presentation, jpg, png" : `Question ${index + 1}`}
              placeholderTextColor="#999"
              value={question.questionText}
              onChangeText={(text) => handleQuestionChange(text, index)}
              multiline
            />
          </View>
        ))}

        <TouchableOpacity 
          style={styles.addQuestionButton}
          onPress={handleAddQuestion}
        >
          <Text style={styles.addQuestionText}>+ Add Question</Text>
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
  inviteSection: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  addInviteeContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  inviteeInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 4,
  },
  addInviteeButton: {
    backgroundColor: '#446388',
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center',
  },
  inviteeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
  },
  removeInviteeButton: {
    color: '#ff4444',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 