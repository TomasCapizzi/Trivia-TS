type Props = {
  modeRef: React.RefObject<HTMLSelectElement>
  categoryRef: React.RefObject<HTMLSelectElement>
  totalRef: React.RefObject<HTMLSelectElement>
  totalQuestions: (total: number) => void
  getQuestions: (url: string) => Promise<void>
  setHandler: React.Dispatch<React.SetStateAction<boolean>>
}
const useStartGame = ({modeRef, categoryRef, totalRef, totalQuestions, getQuestions, setHandler}: Props) => {

    function startGame(){
        const mode = modeRef.current.value;
        const category = categoryRef.current.value;
        const total = Number(totalRef.current.value);
        totalQuestions(total);
        const url = `https://opentdb.com/api.php?amount=${total}&category=${category}&difficulty=${mode}&type=multiple`
        getQuestions(url);
        setHandler(true)
      }
  return {
    startGame,
  }
}

export default useStartGame