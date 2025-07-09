// STYLE 
import { useRef } from 'react'
import { IUsers } from '../../types/types.ts'
import { handleSubmit } from '../services/handleSubmit.tsx'
import style from './AddContact.module.css'

export default function AddContact({users , setUsers} : {users : IUsers[] , setUsers : (e : IUsers[]) => void}){ 
    

    const formRef = useRef<HTMLFormElement>();  
    return <aside>
        <h2>Добавьте контакт</h2>
        <form ref={formRef}  onSubmit={(e) => handleSubmit(e , users, setUsers,formRef)} className={style.add_contact}>
            <div className={style.name}>
                <img src="/public/img/user.svg" alt="" className="icon" />
                <input type="text" name='name' placeholder='Введите имя' />
            </div>
            <div className={style.family}>
                <img src="/public/img/secondname.svg" alt="" className="icon" />
                <input type="text" name='family' placeholder='Введите фамилию' />
            </div>
            <div className={style.tel}>
                <img src="/public/img/phone.svg" alt="" className="icon" />
                <input type="tel" name='tel'placeholder='Введите номер телефона' />
            </div>
            <div className={style.email}>
                <img src="/public/img/email.svg" alt="" className="icon" />
                <input type="text" name='email' placeholder='Введите email' />
            </div>
            <div className={style.description}>
                <img src="/public/img/desc.svg" alt="" className="icon" />
                <textarea className='description' name='description' placeholder='Дополнительная информация'/>
            </div>
            <button type='submit'>Добавить контакт</button>
        </form>
    </aside>
}