import { QuestionModel } from "@/data/model/Question"
import { View } from "react-native"
import { QuestionTitle } from "./QuestionTitle"
import { QuestionOption } from "./QuestionOption"

type QuestionProps = {
    question: QuestionModel
}

export function Question({
    question
}: QuestionProps) {
    return (
        <View style={
            {
                gap: 25
            }
        }>
            <QuestionTitle title={question.title} />
            <View style={
                {
                    gap: 15
                }
            }>
                {question.options.map((option, index) => {
                    return <QuestionOption
                        key={index}
                        index={index}
                        text={option}
                        onPress={() => console.log('Option pressurized')}
                    />
                })}
            </View>
        </View>
    )
}