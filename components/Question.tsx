import { QuestionModel } from "@/data/model/Question"
import { View } from "react-native"
import { QuestionTitle } from "./QuestionTitle"
import { QuestionOption } from "./QuestionOption"

type QuestionProps = {
    question: QuestionModel,
    setQuestionUserAnswer: (index: number) => void;
}

export function Question({
    question,
    setQuestionUserAnswer
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
                        onPress={() => setQuestionUserAnswer(index)}
                    />
                })}
            </View>
        </View>
    )
}