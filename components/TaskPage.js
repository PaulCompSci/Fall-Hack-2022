import { useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native"

const TaskPage = ({navigation}) => {

    const [time, setTime] = useState(60);

    const secondToTime = (sec) =>{
        let hours = Math.floor(sec / (60 * 60));

        let divisor_for_minutes = sec % (60 *  60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h":hours,
            "m":minutes,
            "s":seconds
        };
        return obj;
    }

    useEffect(() => {
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
            <Text style={styles.text}>This is a Task Page</Text>
            <Text style={styles.timer}>You have {time} left</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        top: '28%',
    },
    text: {
        fontSize: 40,
    },
    timer: {
        fontSize: 20,
        color: 'red',
    }
})

export default TaskPage;