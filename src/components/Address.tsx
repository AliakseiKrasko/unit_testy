import * as React from 'react';

type Props = {
    name: string
    address: string
};
export const Address = (props: Props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            {props.address ? <p>{props.address}</p> : 'Address is not available'}
        </div>
    );
};