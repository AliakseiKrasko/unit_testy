import * as React from 'react';
import {useState} from 'react';

type Props = {
    
};
export const Counter = (props: Props) => {
    const [count, setCount] = useState(0);
    const [disable, setDisable] = useState(false);
    const negativeStyle = {color: 'red'}
    const onClickHundler = () => {
        setCount(count-1)
        setDisable(true);
    }


    return (
        <div>
            <h5 style={count < 0 ? negativeStyle : undefined}>{count}</h5>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)} disabled={count === 0} >-</button>
        </div>
    );
};

