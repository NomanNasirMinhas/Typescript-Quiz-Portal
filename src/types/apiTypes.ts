export type ResponseType = {
    answers: { [key: string]: any[] }
    category: string
    correct_answer: string
    correct_answers: string[]
    description: string
    difficulty: string
    explanation: string
    id: number
    multiple_correct_answers: string
    question: string
    tags: string[]
    tip: string
}

export type usedParams = {
    question: string
    answers: { [key: string]: any[] }
    correct_answer: string
}

export type quizParam= {
    question: string
    answers: { [key: string]: any[] }
    correct_answer: string
    callback: (submitted:boolean) => void
}