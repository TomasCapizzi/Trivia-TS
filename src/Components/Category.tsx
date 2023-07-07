import styles from './Category.module.css'

type Props = {
  categoryRef: React.RefObject<HTMLSelectElement>
}

function Category({categoryRef}: Props) {
  return (
    <select name="category" ref={categoryRef} className={styles.select}>
        <option value="">Choose a category</option>
        <option value="21">Sports</option>
        <option value="11">Film</option>
        <option value="23">History</option>
        <option value="12">Music</option>
        <option value="22">Geography</option>
        <option value="25">Art</option>
        <option value="17">Science and Nature</option>
    </select>
  )
}

export default Category