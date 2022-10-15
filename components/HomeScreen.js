import { Text, View, Button, StyleSheet, Pressable } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}> OneMinAct</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Task');
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
