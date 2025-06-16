// HOOKS
import { useRef, useState } from 'react'
// STYLE
import style from './login.module.css'

export default function Login({setIsLoading , isLoading}){
   
    const first_name = useRef()
    const last_name = useRef()
    const [error , setError] = useState('')
    function addProfile(e){
        e.preventDefault();

        if (first_name.current.value != '' && last_name.current.value != ''){
            localStorage.setItem('user' , JSON.stringify({
                name : first_name.current.value ,
                family : last_name.current.value
            }))
            localStorage.setItem('users' , JSON.stringify([]))
            setError('')
            setIsLoading(false)
        }else {
            localStorage.clear()
            setError('error')
        }
    }
    return <div className={style.login}>
            <img className={style.icon} src="/public/img/contact.svg" alt="" />
            <img className={style.icon} src="/public/img/contact1.svg" alt="" />
            <img className={style.icon} src="/public/img/contact.svg" alt="" />
            <form onSubmit={(e) => addProfile(e)} className={style.login_form}>
                <h2>Пожалуйста введите свои данные</h2>
                <div  className={ error == 'error' ? `${style.first_name} error` : style.first_name}>
                    <img src="/public/img/user.svg" alt="" />
                    <input type="text" ref={first_name} placeholder='Введите свое имя'/>
                </div>
                <div  className={ error == 'error' ? `${style.last_name} error` : style.last_name}>
                    <img src="/public/img/secondname.svg" alt="" />
                    <input type="text" ref={last_name} placeholder='Введите свою фамилию'/>
                </div>
                <button>Войти</button>
            </form>
    </div>
}