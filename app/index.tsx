import { Logo } from "@/components/Logo";
import { Page } from "@/components/Page";
import { View } from "react-native";
import { useQuestion } from "@/data/hooks/useQuestions";
import { Result } from "@/components/Result";
import { Question } from "@/components/Question";
import { useEffect } from "react";

export default function Index() {
  const {
    quizQuestions,
    currentQuizQuestionIndex,
    isDoneQuiz,
    points,
    startQuiz,
    setQuestionUserAnswer
  } = useQuestion();

  useEffect(() => {
    startQuiz();
  }, [])

  return (
    <Page>
      <View style={
        {
          gap: 40
        }
      }>
        <Logo />

        {isDoneQuiz ? (
          <Result points={points} restartQuiz={startQuiz} questionsAmount={quizQuestions.length} />
        ) : (
          <Question
            question={quizQuestions[currentQuizQuestionIndex]}
            setQuestionUserAnswer={setQuestionUserAnswer}
          />
        )}

      </View>
    </Page>
  );
}
