import { Pressable, StyleSheet, Text, View } from "react-native";

type ResultProps = {
    points: number;
    questionsAmount: number;
    restartQuiz: () => void;
}

export function Result({
    points,
    questionsAmount,
    restartQuiz
}: ResultProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Você acertou</Text>
            <Text style={styles.highlight}>{points}/{questionsAmount}</Text>

            <Pressable
                onPress={restartQuiz}
                style={styles.buttonContainer}
            >
                <Text style={styles.buttonText}>Reiniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 15,
    },
    text: {
        color: '#bbb',
        fontSize: 20,
    },
    highlight: {
        color: 'white',
        fontSize: 60,
        fontWeight: '900',
    },
    buttonContainer: {
        marginTop: 20,
        backgroundColor: '#2E9D48',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
    }
})