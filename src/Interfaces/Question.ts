export interface Question {
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    category: string,
    type: string,
    difficulty: string
}