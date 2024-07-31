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

            <Pressable onPress={restartQuiz}>
                <Text>Reiniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    text: {},
    highlight: {},
    buttonContainer: {},
    buttonText: {}
})