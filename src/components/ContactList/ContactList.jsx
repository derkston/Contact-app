// STYLE 

import { useEffect, useState } from 'react'
import style from './ContactList.module.css'

export default function ContactList({users}){

    return <ul className={style.contact__list}>
        {users.map((e) => {
            return <li key={e.name} className={style.contact__item}>
                <h2>{e.name}</h2>
                <div className={style.contact__info}>
                    <a href={`tel:${e.tel}`}>{e.tel}</a>
                    <a href={`Email:${e.email}`}>{e.email}</a>
                </div>
                <p>Описание: {e.description}</p>
            </li>
        })}
    </ul>
}