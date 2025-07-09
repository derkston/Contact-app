// STYLE
import './App.css'
// HOOKS 
import { useEffect, useState } from 'react'
// Components
import Header from './components/header/header.jsx'
import Login from './components/Login/Login.jsx'
import Main from './components/Main/Main.jsx'


export default function App() {
  const [isLoading , setIsLoading] = useState<boolean>(true)
  
  const user : JSON = JSON.parse(localStorage.getItem('user')!);
  
  useEffect(()=> {
    
    if  ( user != null  ){
      setIsLoading(false)
    }
  }, [])
  
 

  return (
    <>
      {isLoading ? <Login setIsLoading={setIsLoading}/> :<><Header/><Main/></>}
  
    </>
  )

}


