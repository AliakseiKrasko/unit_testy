import React, {useState} from 'react';

export const TextComponent = () => {
    const [name, setName] = useState('');

    const userNameHundler = () => {
       const user = prompt('Введите имя')
        if(user) {
            setName(user);

        } else{
            return alert('No name intered')
        }
    }
    return (
        <div>
            <button onClick={userNameHundler}>Имя пользователя</button>
            <h3>Привет {name}</h3>
        </div>

    )

};

