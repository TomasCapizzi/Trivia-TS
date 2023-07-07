import {useEffect, useState} from "react";

import styles from './Results.module.css';

type Props = {
    correct: string
    incorrect: string[]
    changeQuestion: () => void
    incrementScore: () => void
    score: number
    listOfQuestions: number
}

export default function Results({correct, incorrect, changeQuestion, incrementScore,score, listOfQuestions}: Props){

    const [results, setResults] = useState<string[]>([])


    function compareResult(res: EventTarget){
        const target = res as HTMLButtonElement
        if(target.innerText === correct){
            incrementScore()
        } 

    }

    useEffect(()=>{
        setResults([correct, incorrect[0], incorrect[1], incorrect[2]])
    },[correct, incorrect])


    return(
        <div className={styles.questionOptions}>
            {
                results.length ? 
                results.sort(item => Math.random()-0.5).map(res => <button onClick={(e)=> {
                    changeQuestion()
                    compareResult(e.target)
                }} key={res} className={styles.btn} >{res}</button>)
                : <></>
            }
        </div>
    )
}