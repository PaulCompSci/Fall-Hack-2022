import { SafeAreaView } from "react-native";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskPage from "./components/TaskPage";
import { useState } from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState();

  const setDataInitial = () => {
    const todo = [
      "Drink a glass of water",
      "Stretch your body",
      "Stand up and take a walk",
      "Read a motivational quote",
      "Do 10 squats",
      "Check on your notifications",
      "Write down one strength about yourself",
      "Jot down an activity to do in your free time",
      "Do 10 jumping jacks",
      "Jot down one goal for the day",
      "Tidy up your workspace",
      "Learn a fact about Canada",
      "Learn a fun fact about your country of origin ",
      "Express your gratitude to your loved ones",
      "Do 5 pushups",
      "Do 5 situps",
      "Meditate for a minute",
      "Write down one weakness about yourself ",
      "Eat something healthy",
      "Make yourself a drink ",
      "Close your eyes for a minute",
      "Learn 5 life hacks",
      "Write down 3 things that you are grateful for",
      "Reply to 3 emails or messages",
      "Write down one fun fact about yourself",
      "Doze for a minute",
      "Run on the spot",
      "Wash your face",
    ];
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Task"
          options={{ headerShown: false }}
          component={TaskPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
