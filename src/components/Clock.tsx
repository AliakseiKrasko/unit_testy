import * as React from 'react';
import {useEffect, useMemo, useState} from 'react';

type Props = {};
export const Clock = (props: Props) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => clearInterval(timerId);
    }, []);


    const ruDate = time.toLocaleString('ru-RU', {timeZone: 'Europe/Moscow'})
    const ruTime = new Date(ruDate);

    const hoursRu = ruTime.getHours();
    const minutesRu = ruTime.getMinutes();
    const secondsRu = ruTime.getSeconds();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const formatDate = (num: number) => (num < 10 ? `0${num}` : num)

    return (
        <div>
            <div>{formatDate(hours)}:{formatDate(minutes)}:{formatDate(seconds)} - Local time</div>
            <div>{formatDate(hoursRu)}:{formatDate(minutesRu)}:{formatDate(secondsRu)} - Minsk time</div>
        </div>
    );
};