import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="survey-list" 
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="survey-chat" 
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
} 