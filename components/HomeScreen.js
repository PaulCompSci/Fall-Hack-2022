import { useEffect } from 'react';
import { Text, View, Button, StyleSheet, Pressable } from 'react-native';
import { useState } from "react";

const HomeScreen = ({ navigation }) => {

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
    setData(todo);
    };

    useEffect(() => {
        setDataInitial();
    }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.logo}> OneMinAct</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Task', {todoItem: data});
        }}
      >
        <Text>click me</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 30,
    bottom: 100,
  },
  button: {
    backgroundColor: '#9F8772',
    borderRadius: 20,
    paddingHorizontal: 70,
    paddingVertical: 30,
    elevation: 3,
    top: 140,
    // fontFamily: 
  }
});

export default HomeScreen;
