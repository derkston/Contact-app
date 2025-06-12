// STYLE 
import style from './main.module.css'

// COMPONENTS 
import AddContact from '../AddContact/AddContact.jsx'
import SearchContact from '../SearchContact/SearchContact.jsx'
import ContactList from '../ContactList/ContactList.jsx'
export default function Main(){
    return <main>
        <AddContact/>
        <section>
            <SearchContact/>
            <ContactList/>
        </section>
    </main>
}