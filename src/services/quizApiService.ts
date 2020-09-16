import { ResponseType,usedParams } from './../types/apiTypes'

const API_KEY = Your Key Here;
export const getQuiz = async (questions: number, category: string) => {
    const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=${questions}&tag=${category}`);
    const result = await response.json();
    // console.log(result);
    const res:usedParams[] = result.map((questionObj: ResponseType) => {
        // if (questionObj.correct_answer !== null) {
            return {
                question: questionObj.question,
                answers: questionObj.answers,
                correct_answer: questionObj.correct_answer
            }
        // }

    })
    return res;
}