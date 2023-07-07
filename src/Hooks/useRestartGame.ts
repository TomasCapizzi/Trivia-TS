type Props = {
  addScoreData: (log?: boolean) => Promise<void>
  setHandler: React.Dispatch<React.SetStateAction<boolean>>
  resetScore: () => void
  reset: () => void
}

const useRestartGame = ({addScoreData, setHandler, resetScore, reset}: Props) => {
    function restartGame(){
        addScoreData()
        setHandler(false);
        resetScore()
        reset();
      }
      function checkOut(){
        addScoreData(true)
        setHandler(false);
        reset();
        resetScore();
      }
  return {
    restartGame,
    checkOut
  }
}

export default useRestartGame