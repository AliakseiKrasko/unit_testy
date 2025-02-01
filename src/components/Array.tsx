import * as React from 'react';

type Props = {};

export const Array = (props: Props) => {
    const state = ["Jack", "Max", "Leo", "Alex"]
    return (
        <div>
            <ol>
                {state.map(name => {
                    return (
                        <li>{name}</li>
                    )
                } )}
            </ol>

        </div>
    );
};