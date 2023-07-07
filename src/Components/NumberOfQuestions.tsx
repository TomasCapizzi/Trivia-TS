import styles from './NumberOfQuestions.module.css'

type Props = {
  totalRef: React.RefObject<HTMLSelectElement>
}

function NumberOfQuestions({totalRef}: Props) {
  return (
    <select name="total" ref={totalRef} className={styles.select}>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
        <option value="20">20</option>
    </select>
  )
}

export default NumberOfQuestions