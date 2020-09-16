import React, { useEffect, useState } from 'react';
import './../App.css';
import { getQuiz } from "./../services/quizApiService";
import { usedParams } from './../types/apiTypes'
import QuestionCard from './QuestionCard'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Quiz() {
  let {type} = useParams();
  let history = useHistory();
  // console.log(type)
  let [quiz, setQuiz] = useState<usedParams[]>([])
  let [currentStep, setCurrentStep] = useState(0)

  const handleSubmit = (submitted: boolean) => {
    const currentQuestion: usedParams = quiz[currentStep];

    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep);
    else {
      alert("Quiz Completed");
      history.push("/result");
    }
  }

  useEffect(() => {
    async function getResponse() {
      const response: usedParams[] = await getQuiz(15, type);
      console.log(response)
      setQuiz(response)
      console.log(quiz)
    }
    getResponse();
  }, [])

  if (!quiz.length)
    return (<h3>Loading..................</h3>)
  return (
    <div className="App">
      <h1>{type} Quiz</h1>
      <h2>Question No. {currentStep+1}</h2>
      <QuestionCard
        question={quiz[currentStep].question}
        answers={quiz[currentStep].answers}
        correct_answer={quiz[currentStep].correct_answer}
        callback={handleSubmit} />
    </div>
  );
}

export default Quiz;
