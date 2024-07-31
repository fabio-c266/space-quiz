import { ReactNode } from "react"
import { View, StyleSheet, ImageBackground } from "react-native"

type PageProps = {
    children: ReactNode
}

export function Page({ children }: PageProps) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('@/assets/images/background.jpg')}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{
                    opacity: 0.4
                }}
            >
                {children}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});