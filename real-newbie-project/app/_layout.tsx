import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="user-login" />
      <Stack.Screen name="company-login" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="create-survey" />
    </Stack>
  );
}
