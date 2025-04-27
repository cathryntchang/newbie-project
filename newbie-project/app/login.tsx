import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>+</Text>
          </View>
          <Text style={styles.title}>Login to Metric</Text>
        </View>

        <View style={styles.form}>
          <TouchableOpacity style={styles.countrySelector}>
            <Text style={styles.countryText}>United States</Text>
            <Text style={styles.chevronRight}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.phoneInput}>
            <Text style={styles.phonePrefix}>+ 1</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => {
              // Navigate to survey home after login
              router.push("/survey-home");
            }}
          >
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: "#1E7F2C",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "300",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000000",
  },
  form: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },
  countrySelector: {
    width: "100%",
    backgroundColor: "#F0F2F0",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  countryText: {
    fontSize: 16,
    color: "#000000",
  },
  chevronRight: {
    fontSize: 20,
    color: "#666666",
  },
  phoneInput: {
    width: "100%",
    backgroundColor: "#F0F2F0",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  phonePrefix: {
    fontSize: 16,
    color: "#666666",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#000000",
    borderRadius: 100,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  signUpButton: {
    marginBottom: 16,
  },
  signUpText: {
    fontSize: 16,
    color: "#000000",
  },
  forgotPasswordButton: {
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: "#666666",
  },
}); 