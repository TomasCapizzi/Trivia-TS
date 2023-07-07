import {useRef, useState} from "react";

import Category from "../Components/Category";
import Difficulty from "../Components/Difficulty";
import {FaPlay} from "react-icons/fa";
import NumberOfQuestions from "../Components/NumberOfQuestions";
import Question from "../Components/Question";
import Score from "./Score";
import Spinner from "../Components/Spinner";
import { database } from "../Firebase/users";
import styles from './Trivia.module.css'
import useRestartGame from "../Hooks/useRestartGame";
import useScore from "../Hooks/useScore";
import useStartGame from "../Hooks/useStartGame";
import useTriviaQuestions from "../Hooks/useTriviaQuestions";

type Props = {
  actualUser: string
  setIsLog: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Trivia({actualUser, setIsLog}: Props){

    const {trivia,currentQuestion, getQuestions, changeQuestion, reset, listOfQuestions, totalQuestions} = useTriviaQuestions();
    const {score, incrementScore, resetScore} = useScore();
    const [handler, setHandler] = useState<boolean>(false)


    const modeRef = useRef<HTMLSelectElement>(null);
    const categoryRef = useRef<HTMLSelectElement>(null);
    const totalRef = useRef<HTMLSelectElement>(null);

    const {startGame} = useStartGame({modeRef, categoryRef, totalRef, totalQuestions, getQuestions, setHandler})
    const {restartGame, checkOut} = useRestartGame({addScoreData, setHandler, resetScore, reset});

    async function addScoreData(log?: boolean){
      const scoreData = await database.collection('scores');
      const scoreItem = {
        score: score,
        user: actualUser,
        mode: modeRef.current.value,
        date: new Date()
      }
      scoreData.add(scoreItem);
      log && setIsLog(false) 
    }
    return(
        <div className={styles.triviaContainer}>
          {
            !handler ? 
          <div className={styles.startScreen}>
            <div className={styles.menu}>
              <Category categoryRef={categoryRef} />
              <Difficulty modeRef={modeRef} />
              <NumberOfQuestions totalRef={totalRef} />
              <FaPlay onClick={startGame} className={styles.startScreenSvg} />
            </div>
            <h3 className={styles.startScreenH3}>Quiz<span className={styles.spanH3}>!</span></h3>
            <p className={styles.startScreenP}>Good luck <span className={styles.spanP}>{actualUser}</span></p>
          </div>
          :
          <div className={styles.questionContainer}>
            {
              currentQuestion < listOfQuestions ?
                <div className={styles.question}>   
                  {
                    trivia.length ? 
                    <Question question={trivia[currentQuestion]} changeQuestion={changeQuestion}  incrementScore={incrementScore} score={score}  listOfQuestions={listOfQuestions}/>
                    : <Spinner/>
                  }
                </div>
              : <Score checkOut={checkOut} actualUser={actualUser} score={score} restartGame={restartGame}  />
            }
          </div>
          }
        </div>
    )
}