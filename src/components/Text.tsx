import * as React from 'react';
import {useState} from 'react';

type Props = {

};
export const Text = (props: Props) => {

    const [text, setText] = useState('');

    const changeHundler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }
    return (
        <div>
            <input onChange={changeHundler} type="text"/>
            <h1>{text}</h1>
        </div>
    );
};