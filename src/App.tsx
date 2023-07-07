import Login from './Pages/Login';
import Trivia from './Pages/Trivia';
import styles from './App.module.css'
import {useState} from 'react';

function App() {

  const [isLog, setIsLog] = useState<boolean>(false);
  const [actualUser, setActualUser] = useState('')

  return (
    <div className={styles.App}>
      {
        isLog ? 
        <Trivia actualUser={actualUser} setIsLog={setIsLog}/>
        :
        <Login setIsLog={setIsLog} setActualUser={setActualUser}/>
      }

    </div>
  );
}

export default App;
