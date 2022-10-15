import { useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native"

const TaskPage = ({route, navigation}) => {
    const [task, setTask] = useState(null);
    const [time, setTime] = useState(60);
    
    const {todoItem} = route.params;

    useEffect(() => {

        // console.log(todoItem[Math.floor(Math.random() * 30)]);
        if (task === null){
            setTask(todoItem[Math.floor(Math.random() * 30)])
            // console.log(task)
        }

        setTimeout(() => {
            console.log('1 sec.');
            setTime(time - 1);
        }, 1000);

        // if (time <= 0){
        //     navigation.navigate("Home");
        // }
    }, [time])

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{task}</Text>
        <Text style={styles.timer}>You have {time} left</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        top: '28%',
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 40,
    },
    timer: {
        fontSize: 20,
        color: 'red',
    }
})

export default TaskPage;