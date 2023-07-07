import {useEffect, useState} from "react";

import { UserScore } from "../Interfaces/User";
import styles from './ScoreList.module.css'
import useGetScores from "../Hooks/useGetScores";

type Props = {
    actualUser: string
}

export default function ScoreList({actualUser}: Props){

    const [scores, setScores] = useState<UserScore[]>([]);
    const [userScore, setUserScore] = useState<UserScore[]>([])
    const [handler, setHandler] = useState<boolean>(false)

    const {getScoreList} = useGetScores({setScores, setHandler, getUserScores})

    function getUserScores(){
        setUserScore(scores.filter((item: UserScore) => item.user === actualUser))
        console.log(scores.filter((item: UserScore) => item.user === actualUser));
    }

    useEffect(()=>{
        getScoreList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[handler])

    return(
        <div className={styles.scoreList}>
            <p className={styles.scoreListTitle}>Scores</p>
            <article className={styles.scores}>
                { userScore.length ?
                    userScore.map(
                        item => <p key={item.date}>{item.score}</p>
                    )
                    :
                    null
                }
            </article>
        </div>
    )
}