import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SurveyCard } from "../components/SurveyCard";

const { width } = Dimensions.get("window");

export const SurveyHomeScreen = () => {
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerText}>
              <Text style={styles.greeting}>~ Hi, Noah from Daymi!</Text>
              <Text style={styles.date}>{monthYear}</Text>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Image source={require('../../assets/images/metric_daymiProfile.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/76859715bf8d373a6bca31bba7e53d0acf5fa3e0?placeholderIfAbsent=true" }} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.sectionTitle}>This month, April 2025</Text>

          <SurveyCard
            title="Tagging Feature"
            description="A sales presentation with a potential client. The meeting is set to take place in London, and the application has adjusted the time to the local time zone."
            surveyCount={128}
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4e4345ac9f365d659f21c62a22d67bd1b5ccd475?placeholderIfAbsent=true"
          />

          <Text style={styles.sectionTitle}>
            <Text style={styles.lightText}>Last month</Text>
            <Text style={styles.commaText}>,</Text> March 2025
          </Text>

          <SurveyCard
            title="Conversational Journaling Feature"
            description="A sales presentation with a potential client. The meeting is set to take place in London, and the application has adjusted the time to the local time zone."
            surveyCount={128}
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5b395c0de86bea4085eeadfacaf7a437cfb377c5?placeholderIfAbsent=true"
          />

          <SurveyCard
            title="Daily Summary Feature"
            description="A sales presentation with a potential client. The meeting is set to take place in London, and the application has adjusted the time to the local time zone."
            surveyCount={128}
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4e4345ac9f365d659f21c62a22d67bd1b5ccd475?placeholderIfAbsent=true"
          />

          <View style={styles.lastCard}>
            <SurveyCard
              title="Context-Aware Follow-Ups Feature"
              description="A sales presentation with a potential client. The meeting is set to take place in London, and the application has adjusted the time to the local time zone."
              surveyCount={128}
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4e4345ac9f365d659f21c62a22d67bd1b5ccd475?placeholderIfAbsent=true"
            />
            <View style={styles.surveySection}>
              <View style={styles.surveyHeader}>
                <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1f4d6d40317b0b8eb738acafab75ee96691f6e31?placeholderIfAbsent=true" }} style={styles.surveyIcon} />
                <Text style={styles.surveyText}>Surveys</Text>
              </View>
              <TouchableOpacity style={styles.metricsButton}>
                <Text style={styles.metricsText}>See Metrics</Text>
                <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/dddb5842f00d0aeaedcaf1b1fb21e376f737d5c5?placeholderIfAbsent=true" }} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    borderRadius: 33,
    paddingHorizontal: 16,
    paddingVertical: 30,
    maxWidth: 480,
    width: "100%",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    color: "rgba(40, 59, 81, 1)",
    fontFamily: Platform.select({
      ios: "System",
      android: "Roboto",
    }),
  },
  date: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333333",
    marginTop: 14,
    lineHeight: 32,
    fontFamily: Platform.select({
      ios: "System",
      android: "Roboto",
    }),
  },
  headerIcons: {
    marginTop: 38,
    gap: 11,
  },
  iconButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(40, 59, 81, 1)",
    padding: 8,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  sectionTitle: {
    fontSize: 16,
    color: "#585A66",
    marginTop: 22,
    marginBottom: 14,
    fontFamily: Platform.select({
      ios: "System",
      android: "Roboto",
    }),
  },
  lightText: {
    color: "rgba(182,182,183,1)",
  },
  commaText: {
    color: "rgba(151,151,151,1)",
  },
  lastCard: {
    marginBottom: 20,
  },
  surveySection: {
    paddingLeft: 66,
    paddingRight: 21,
    paddingTop: 8,
    paddingBottom: 27,
  },
  surveyHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingRight: 10,
    paddingVertical: 4,
  },
  surveyIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  surveyText: {
    fontSize: 16,
    color: "#111111",
    fontWeight: "700",
    fontFamily: Platform.select({
      ios: "System",
      android: "Roboto",
    }),
  },
  metricsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#446388",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#446388",
    paddingHorizontal: 9,
    marginTop: 15,
    gap: 4,
  },
  metricsText: {
    fontSize: 10,
    color: "#FFFFFF",
    fontFamily: Platform.select({
      ios: "System",
      android: "Roboto",
    }),
  },
  arrowIcon: {
    width: 24,
    height: 24 * 0.92,
    resizeMode: "contain",
  },
});
