// STYLE 

import style from './ContactList.module.css'
// 

import { useEffect, useState } from 'react'
export default function ContactList({users}){
    const user = JSON.parse(localStorage.getItem('user'))
  
    const [value , setValue] = useState('')
    const newUsers = users.filter(e => {
       return e.name.toLowerCase().includes(value.toLowerCase())
    })
 
    return <>
        <div className={style.search__contact}>
            <h2>
                {`${user.name} ${user.family}`}
            </h2>
            <input onChange={e => setValue(e.target.value)} type="text" placeholder='Найти контакт' name='search' />
        </div>
         <ul className={style.contact__list}>
        {newUsers.map((e) => {
             return <li key={e.name} className={style.contact__item}>
                <h2>{e.name}</h2>
                <div className={style.contact__info}>
                    <a href={`tel:${e.tel}`}>{e.tel}</a>
                    <a href={`Email:${e.email}`}>{e.email}</a>
                </div>
                <p>Описание: {e.description}</p>
            </li>})
         }
    </ul>
    </>
    
   
}