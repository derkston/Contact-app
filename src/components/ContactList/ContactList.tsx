// STYLE 

import { useState } from 'react'
import { IUsers, TUser } from '../../types/types'
import style from './ContactList.module.css'
// 

export default function ContactList({users } : {users : IUsers[]}){

    const user : TUser = JSON.parse(localStorage.getItem('user')!)
    const [value , setValue] = useState<string>('')
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
             return <ContactItem item={e}/>})
         }
    </ul>
    </>
}

function ContactItem({item}: {item : IUsers}){    
    return <li key={item.name} className={style.contact__item}>
                <h2>{item.name}</h2>
                <div className={style.contact__info}>
                    <a href={`tel:${item.tel}`}>{item.tel}</a>
                    <a href={`Email:${item.email}`}>{item.email}</a>
                </div>
                <p>Описание: {item.description}</p>
            </li>
}