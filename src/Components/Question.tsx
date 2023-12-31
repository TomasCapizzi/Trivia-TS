import { Question } from '../Interfaces/Question';
import Results from './Results';
import styles from './Question.module.css'

type Props = {
    question: Question,
    changeQuestion: () => void,
    incrementScore: () => void,
}
export default function Question({question , changeQuestion, incrementScore}: Props){

    return(
        <>
            <h3 className={styles.h3} dangerouslySetInnerHTML={{__html: question.question}}/>
            <Results correct={question.correct_answer} incorrect={question.incorrect_answers} changeQuestion={changeQuestion}  incrementScore={incrementScore}/>
        </>
    )
}