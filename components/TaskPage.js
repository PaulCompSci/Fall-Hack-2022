import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

const TaskPage = ({route, navigation}) => {

const[task, setTask] =useState(null);

const {todoItem} = route.params;

// setTask(todoItem[Math.floor(Math.random() * 30)]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.task}>{todoItem[Math.floor(Math.random() * 30)]}</Text>
        <CircularProgress
          value={0}
          radius={120}
          maxValue={60}
          initialValue={60}
          progressValueColor={"#fff"}
          activeStrokeWidth={15}
          inActiveStrokeWidth={15}
          duration={60000}
          onAnimationComplete={() => navigation.navigate("Home")}
          delay={1000}
          // valueSuffix="S"
          valueSuffixStyle={styles.suffix}
        />
      </ScrollView>
    </SafeAreaView>
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
    fontSize: 40,
    textAlign: 'center',
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
