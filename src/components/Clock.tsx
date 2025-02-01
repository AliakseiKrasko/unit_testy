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

    const ruDate = time.toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })
    const ruTime = new Date(ruDate);

    const hours = ruTime.getHours();
    const minutes = ruTime.getMinutes();
    const seconds = ruTime.getSeconds();

    const formatDate = (num: number) => (num < 10 ? `0${num}` : num)

    return (
        <div>
            <span>{formatDate(hours)}:{formatDate(minutes)}:{formatDate(seconds)}</span>

        </div>
    );
};