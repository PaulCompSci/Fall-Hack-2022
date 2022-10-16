import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";

const TaskPage = ({ route, navigation }) => {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(require("./music.mp3"));
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  const { todoItem } = route.params;
  // console.log(navigation.goBack());

  useEffect(() => {
    playSound();
  }, []);

  // setTask(todoItem[Math.floor(Math.random() * 30)]);

  return (
    <LinearGradient
      style={styles.container}
      colors={["#fdfcfb", "#e2d1c3"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      locations={[0.2, 0.8]}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.task}>
          {todoItem[Math.floor(Math.random() * 27)]}
        </Text>
        <CircularProgress
          value={0}
          radius={120}
          maxValue={60}
          initialValue={60}
          progressValueColor={"black"}
          activeStrokeWidth={20}
          inActiveStrokeWidth={15}
          duration={60000}
          onAnimationComplete={() => {
            navigation.navigate("Home",{
                onGoBack: () => console.log('go back')
            });
          }}
          delay={1000}
          progressValueFontSize={80}
          progressValueStyle={{ fontWeight: "325" }}
          strokeColorConfig={[
            { color: "#7E0306", value: 10 },
            { color: "#FA8743", value: 30 },
            { color: "#FFDECD", value: 60 },
          ]}
          // valueSuffix="S"
          valueSuffixStyle={styles.suffix}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#181818",
  },
  task: {
    bottom: 50,
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
  },
  scrollContainer: {
    minWidth: "100%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  suffix: {
    fontSize: 45,
    color: "yellowgreen",
  },
});

export default TaskPage;
