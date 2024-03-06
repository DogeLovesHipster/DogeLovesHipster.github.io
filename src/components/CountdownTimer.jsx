import { useEffect, useState } from 'react';

const CountdownTimer = ({ duration, start }) => {
    const [timeLeft, setTimeLeft] = useState(() => {
        const [minutes, seconds] = duration.split(':').map(Number);
        return minutes * 60 + seconds;
    });

    useEffect(() => {
        if (!start || timeLeft <= 0) {
            return;
        }

        const timerId = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [start, timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <span>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
    );
};

export default CountdownTimer;