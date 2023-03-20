import { useState, useEffect } from 'react'
import { Container } from "@mui/material"
import Searcher from './components/Searcher/Searcher'
import UserCard from './containers/UserCard/UserCard'
import './App.css'
import {getGitHubUser} from './services/users'

function App() {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);

  const gettingUser = async (user) => {
      const userResponse = await getGitHubUser(user)
      
      if(userState==='octocat'){
        localStorage.setItem('octocat', userResponse.stringify)
      }

      if(userResponse.message === 'Not Found'){
        const octocat  = localStorage.getItem('octocat');
        setInputUser(octocat);
        setNotFound(true);
      } else {
        setUserState(userResponse);
      }
  }
  


  useEffect( () => {
    gettingUser(inputUser)
  }, [inputUser])


  return (
      <>
        <Container className="appContainer">
          <Searcher inputUser = {inputUser} setInputUser={setInputUser} />
          <UserCard userState = {userState} />
        </Container>
      </>
    
  )
}

export default App
