// STYLE 
import style from './main.module.css'

// COMPONENTS 
import AddContact from '../AddContact/AddContact.jsx'
import ContactList from '../ContactList/ContactList.jsx'
import { useState } from 'react'
export default function Main(){
    const [users , setUsers] = useState(JSON.parse(localStorage.getItem('users')))

    return <main>
        <AddContact users={users} setUsers={(e) => setUsers(e)}/>
        <section>
          
            <ContactList  users={users}/>
        </section>
    </main>
}