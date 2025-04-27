import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { StyledInput } from "./StyledInput";
import { StyledButton } from "./StyledButton";
import { router } from "expo-router";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const { width } = Dimensions.get("window");
const isSmallDevice = width < 375;

export const CompanyLoginScreen = () => {
  const [companyName, setCompanyName] = useState("");

  const handleContinue = async () => {
    if (!companyName.trim()) {
      Alert.alert(
        "Missing Information",
        "Please enter a company name.",
        [{ text: "OK" }]
      );
      return;
    }

    try {
      const companiesRef = collection(db, 'companies');
      const q = query(companiesRef, where("name", "==", companyName.trim()));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        router.push("/survey-home");
      } else {
        Alert.alert(
          "Invalid Company Name",
          "Please enter the correct company name.",
          [{ text: "OK" }]
        );
      }
    } catch (error) {
      console.error("Error checking company name:", error);
      Alert.alert(
        "Error",
        "An error occurred while checking the company name. Please try again.",
        [{ text: "OK" }]
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b16b1e43faf415579184dcf15bcdce63dd7c87e?placeholderIfAbsent=true",
              }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>Company Login</Text>
            <Text style={styles.subtitle}>Sign in to your company account</Text>
            
            <StyledInput
              placeholder="Company Name"
              value={companyName}
              onChangeText={setCompanyName}
            />

            <View style={styles.buttonContainer}>
              <StyledButton title="Continue" onPress={handleContinue} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logo: {
    width: 104,
    height: 104,
    marginBottom: 20,
  },
  title: {
    fontSize: isSmallDevice ? 32 : 36,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 8,
    fontFamily: Platform.select({
      ios: "System",
      android: "Roboto",
    }),
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
    fontFamily: Platform.select({
      ios: "System",
      android: "Roboto",
    }),
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
  },
});
