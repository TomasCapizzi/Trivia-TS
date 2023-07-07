import { Question } from '../Interfaces/Question';
import {useState} from 'react'

const useTriviaQuestions = () => {

    const [trivia, setTrivia] = useState<Question[]>([])
    const [listOfQuestions, setListOfQuestions] = useState<number>(0);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    
    async function getQuestions(url: string){
        const answer = await fetch(url);
        const ans = await answer.json();
        setTrivia(ans.results)
      }

    function changeQuestion(){
        setCurrentQuestion(currentQuestion + 1);
    }

    function totalQuestions(value: number){
        setListOfQuestions(value);
    }
    function reset(){
        setTrivia([]);
        setCurrentQuestion(0);
    }

    
    

    return {
        trivia,
        currentQuestion,
        getQuestions,
        changeQuestion,
        reset,
        listOfQuestions,
        totalQuestions
    }
}

export default useTriviaQuestions