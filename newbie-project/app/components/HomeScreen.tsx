import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import { StyledButton } from "./StyledButton";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");
const isSmallDevice = width < 375;
const isIOS = Platform.OS === "ios";

export const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.headerContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>
                    Let's start new chat with our{"\n"}
                    <Text style={styles.highlightText}>Metric!</Text>
                  </Text>
                </View>
                <Image
                  source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c43b59697c5bc5debdddd8071886fb16931a5e3?placeholderIfAbsent=true",
                  }}
                  style={styles.smallIcon}
                />
              </View>

              <Text style={styles.subtitleText}>
                Surveys beyond yes/no s. Talk with a real{"\n"}
                product team. Help shape what comes next.
              </Text>

              <View style={styles.buttonContainer}>
                <StyledButton 
                  title="Login as a User" 
                  onPress={() => router.push("/login")}
                />
                <StyledButton 
                  title="Company" 
                  onPress={() => router.push("/company-login")}
                />
              </View>
            </View>

            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/dae65b7efabecccdb016dd8ffed4fee4fa06ba6b?placeholderIfAbsent=true",
              }}
              style={styles.bottomImage}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    borderRadius: 33,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingTop: isIOS ? 20 : 60,
    overflow: "hidden",
    alignItems: "center",
  },
  content: {
    width: "100%",
    paddingHorizontal: 25,
    paddingRight: 57,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: 15,
  },
  titleContainer: {
    flex: 1,
    flexBasis: "auto",
    flexGrow: 1,
    flexShrink: 1,
  },
  titleText: {
    fontSize: isSmallDevice ? 32 : 38,
    fontWeight: "700",
    color: "#000000",
    fontFamily: Platform.select({
      ios: "System",
      android: "Roboto",
    }),
    lineHeight: isSmallDevice ? 38 : 44,
    letterSpacing: isIOS ? -0.5 : 0,
  },
  highlightText: {
    color: "rgba(68,99,136,1)",
  },
  smallIcon: {
    aspectRatio: 1,
    width: isSmallDevice ? 16 : 19,
    height: undefined,
    flexShrink: 0,
  },
  subtitleText: {
    marginTop: 11,
    fontSize: isSmallDevice ? 14 : 15,
    lineHeight: 25,
    color: "rgba(111, 107, 107, 1)",
    alignSelf: "stretch",
    fontFamily: Platform.select({
      ios: "System",
      android: "Roboto",
    }),
  },
  buttonContainer: {
    marginTop: 15,
    width: "100%",
    gap: 14,
  },
  button: {
    borderRadius: 15,
    paddingHorizontal: 24,
    paddingVertical: isIOS ? 15 : 16, // Slight adjustment for iOS
    fontSize: 16,
    color: "#FFFFFF",
  },
  bottomImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 0.83,
    marginTop: 21,
    marginBottom: isIOS ? 30 : 21, // Extra bottom margin for iOS
  },
});
