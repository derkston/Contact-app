export function handleSubmit(e , users , setUsers, formRef){        
        e.preventDefault()
        
        const data = new FormData(e.target)
        const {name , family , tel , email , description} = formRef.current
        
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
            localStorage.setItem('users' , JSON.stringify([...users , newUser]))
            setUsers(JSON.parse(localStorage.getItem('users')))
        }else {
            alert('Заполните все поля')
        }
    }