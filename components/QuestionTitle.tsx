import { LinearGradient } from "expo-linear-gradient"
import { Text, View, StyleSheet } from "react-native"

type QuestionTitleProps = {
    title: string
}

export function QuestionTitle({
    title
}: QuestionTitleProps) {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)']}
                style={styles.background}
            />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#852e9c',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        textAlign: 'center',
        marginHorizontal: 20
    },
    title: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold',
        opacity: 0.8
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
})