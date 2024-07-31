import { Pressable, StyleSheet, Text } from "react-native";

type QuestionOptionProps = {
    index: number
    text: string,
    onPress: () => void;
}

export function QuestionOption({
    index,
    text,
    onPress
}: QuestionOptionProps) {
    return (
        <Pressable
            onPress={onPress}
            style={styles.container}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2e9d48',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
    },
    text: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',

    }
})