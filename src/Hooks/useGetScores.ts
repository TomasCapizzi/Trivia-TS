import { database } from "../Firebase/users";

type Props = {
  setScores: any
  setHandler: React.Dispatch<React.SetStateAction<boolean>>
  getUserScores: () => void
}

const useGetScores = ({setScores, setHandler, getUserScores}: Props) => {

    async function getScoreList(){
        const scoreData = await database.collection('scores');
        scoreData.get().then((query)=> setScores(query.docs.map((doc)=>{
            return {...doc.data()}
        })))        
        setHandler(true);
        getUserScores()
    }
  return {
    getScoreList,
  }
}

export default useGetScores