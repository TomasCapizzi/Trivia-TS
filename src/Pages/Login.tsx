import {useEffect, useRef, useState} from "react";

import { User } from "../Interfaces/User";
import { database } from "../Firebase/users";
import styles from './login.module.css'

type Props = {
    setIsLog: React.Dispatch<React.SetStateAction<boolean>>,
    setActualUser: React.Dispatch<React.SetStateAction<string>>
}

export default function Login({setIsLog, setActualUser}: Props){
    const [users, setUsers] = useState<User[]>([])
    const [errorState, setErrorState] = useState(false);
    const [error, setError] = useState('');

    const usernameRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);


    const getUsers = ()=> {
        const listOfUsers = database.collection('users');
        //console.log(listOfUsers)
        listOfUsers.get().then((query)=> setUsers(query.docs.map((doc)=>{
            return {...doc.data()}
        })))
    }


    function validateUser(){
        let username = ''
        let password = ''

       // setIsLog(true)
       if(usernameRef.current != null){
        username = usernameRef.current.value;
       }
        
       if(passRef.current != null){
        password = passRef.current.value;
       }

        const loginUser = users.filter(user => user.user === username)
        //const longinKey = users.filter(user => user.key === password)
        if(loginUser.length){
            if(password === loginUser[0].key){
                setActualUser(username)
                setIsLog(true)
            }else{
                setError('Password incorrect')
                setErrorState(true)
            }
        } else{
            setError('User doesn´t exist')
            setErrorState(true)
        }


    }

    function createUser(){
        let username = ''
        let password = ''

       // setIsLog(true)
       if(usernameRef.current != null){
        username = usernameRef.current.value;
       }
        
       if(passRef.current != null){
        password = passRef.current.value;
       }

        const loginUser = users.filter(user => user.user === username)
        if(loginUser.length){
            setError('Username is already taken')
            setErrorState(true)
        }else if(username==='' || password === ''){
            setError('Fill the blanks')
            setErrorState(true)
        }else {
            const newUser ={
                user: username,
                key: password
            }
            const colecctionUsers = database.collection('users')
            colecctionUsers.add(newUser)
            setErrorState(false)
            setError('')
            setActualUser(username)
            setIsLog(true)
        }

    }

    useEffect(()=>{
        getUsers()
        setErrorState(false)
    },[])

    return(
        <div className={styles.loginContainer}>

            <div className={styles.login}>
            <h3 className={styles.title}>Quiz App!</h3>
            {
                errorState ? 
                <p className={styles.error}>Error: {error}</p>
                : <></>
            }
            <div className={styles.loginData}>
                <label htmlFor="">Username</label>
                <input type="text" ref={usernameRef}/>
                <label htmlFor="">Password</label>
                <input type="password"  ref={passRef}/>
            </div>
            <div className={styles.loginBtn}>
                <button onClick={validateUser}>Login</button>
                <button onClick={createUser}>Create User</button>
            </div>
            </div>
        </div>
    )
}