// STYLE
import './App.css'
// HOOKS 
import {  useEffect, useState } from 'react'
// Components
import Login from './components/Login/Login.jsx'
import Header from './components/header/header.jsx'
import Main from './components/Main/Main.jsx'


export default function App() {
  const [isLoading , setIsLoading] = useState(true)
  
  const user = JSON.parse(localStorage.getItem('user'));
  
  useEffect(()=> {
    
    if  ( user != null  ){
      setIsLoading(false)
    }
  }, [])
  
 

  return (
    <>
      {isLoading ? <Login setIsLoading={setIsLoading} Loading={isLoading}/> :<><Header/><Main/></>}
  
    </>
  )

}


