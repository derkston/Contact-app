// STYLE
import './App.css'
// HOOKS 
import {  useEffect, useState } from 'react'
// Components
import Login from './components/Login/Login.jsx'
import Header from './components/header/header.jsx'
import Main from './components/Main/Main.jsx'




export default function App() {
  const [isLoading , setIsLoading] = useState(false)

  useEffect(()=> {
    if (localStorage.length != 0){
      setIsLoading(true)
    }
  }, [])
  
 

  return (
    <>
      {isLoading ? <><Header/><Main/></> : <Login setIsLoading={setIsLoading} Loading={isLoading}/>}
      {/* <button onClick={() => setIsLoading(!isLoading)}>{isLoading ? 'Выйти' : "Войти"}</button> */}
    </>
  )

}


