import { useState } from "react";
import { QuestionModel } from "../model/Question";
import allQuestions from '../constants/questions'

export function useQuestion() {
    const [quizQuestions, setQuizQuestions] = useState<QuestionModel[]>([])
    const [currentQuizQuestionIndex, setCurrentQuizQuestionIndex] = useState<number>(0);
    const [points, setPoints] = useState<number>(0)
    const [isDoneQuiz, setIsDoneQuiz] = useState<boolean>(true)

    function startQuiz() {
        setPoints(0)
        setIsDoneQuiz(false)
        const randomQuestions = allQuestions.sort(() => Math.random() - Math.random()).slice(0, 20)

        setQuizQuestions(randomQuestions);
        setCurrentQuizQuestionIndex(0)
    }

    return {
        startQuiz,
        isDoneQuiz,
        setIsDoneQuiz,
        points,
        quizQuestions,
        currentQuizQuestionIndex
    }
}