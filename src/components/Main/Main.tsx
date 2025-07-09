// STYLE 

// COMPONENTS 
import { useState } from 'react'
import { IUsers } from '../../types/types.js'
import AddContact from '../AddContact/AddContact.jsx'
import ContactList from '../ContactList/ContactList.jsx'
export default function Main(){
    const [users , setUsers] = useState<IUsers[]>(JSON.parse(localStorage.getItem('users')!))

    return <main>
        <AddContact users={users} setUsers={(e : IUsers[]) => setUsers(e)}/>
        <section>
            <ContactList  users={users}/>
        </section>
    </main>
}