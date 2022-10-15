import { SafeAreaView } from "react-native";
import HomeScreen from "./components/HomeScreen";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TaskPage from './components/TaskPage'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Task" component={TaskPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}