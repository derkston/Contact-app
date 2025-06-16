// STYLE 
import { useRef } from 'react'
import style from './AddContact.module.css'

export default function AddContact(){
 
    const formRef = useRef();
    
    function handleSubmit(e){
        
        e.preventDefault()
        const data = new FormData(e.target)
        const {name , family , tel , email , description} = formRef.current
        const users = JSON.parse(localStorage.getItem('users'));
        const newUser = {}
     
        for (let key of data.keys()){

            switch (key){
                case 'name' : {
                    if ( data.get(key) != ''){

                        newUser[key] = data.get(key)
                        name.value =''
                        continue
                    }
                    
                    break;
                }
                case 'family' : {
                    if ( data.get(key) != ''){

                        newUser[key] = data.get(key)
                        family.value =''
                        break;
                    }
                    
                    break;
                }
                case 'tel' : {
                    if ( data.get(key) != ''){

                        newUser[key] = data.get(key)
                        tel.value =''
                        continue
                    }
                    
                    break;
                }
                case 'email' : {
                    if ( data.get(key) != ''){

                        newUser[key] = data.get(key)
                        email.value =''
                        continue
                    }
                    
                    break;
                }
                case 'description' : {
                    if ( data.get(key) != ''){
                        newUser[key] = data.get(key)
                        description.value =''
                        continue
                    }
                    
                    break;
                }
                
            }
            
        }
        
        if (Object.keys(newUser).length == 5){
           users.push(newUser)
        
            localStorage.setItem('users' , JSON.stringify(users))
        }else {
            alert('Заполните все поля')
        }
        
    }
    return <aside>
        <h2>Добавьте контакт</h2>
        <form ref={formRef}  onSubmit={(e) => handleSubmit(e)} className={style.add_contact}>
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