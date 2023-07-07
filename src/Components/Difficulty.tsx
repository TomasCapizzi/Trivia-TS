import styles from './Difficulty.module.css'

type Props = {
  modeRef: React.RefObject<HTMLSelectElement>
}

function Difficulty({modeRef}: Props) {
  return (
    <select name="difficulty" ref={modeRef} className={styles.select}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </select>
  )
}

export default Difficulty