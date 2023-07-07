import {BiLogOut} from 'react-icons/bi';
import {HiRefresh} from 'react-icons/hi';
import ScoreList from '../Components/ScoreList';
import styles from './Score.module.css'

type Props = {
  checkOut: () => void,
  actualUser: string,
  score: number,
  restartGame: () => void
}

function Score({checkOut, actualUser, score, restartGame}: Props) {
  return (
    <div className={styles.scoreScreen}>
        <BiLogOut className={styles.checkOut} onClick={checkOut}/>
        <h3 className={styles.scoreTitle}>{actualUser.toUpperCase()} your final score is: </h3>
        <p className={styles.points}>{score}</p>
        <HiRefresh onClick={restartGame}/>
        <ScoreList actualUser={actualUser}/>
    </div>
  )
}

export default Score
