import { Text, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {

    return (
      <View>
        <Text>This is HomeScreen</Text>
        <Button title = "Are you ready?" onPress={() => {
            navigation.navigate('Task');
        }}/>
      </View>
    );
}

export default HomeScreen;