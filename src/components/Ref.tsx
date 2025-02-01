import * as React from 'react';
import {useRef, useState} from 'react';

type Props = {};
export const Ref = (props: Props) => {
    const [text, setText] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const onChangeHundler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }
    const onclickHundler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(text, inputRef.current);
        e.preventDefault();
    }
    return (
        <div>
            <input ref={inputRef} onChange={onChangeHundler} type="text" placeholder={'Введите текст'}/>
            <button onClick={onclickHundler}>submit</button>
        </div>
    );
};