import { useState, useEffect } from 'react';

export default function ProgressBar({ time }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const remain = setInterval(() => {
      console.log('interval');
      setRemainingTime((prev) => prev - 10);
    }, 10);
    return () => {
      clearInterval(remain);
    };
  }, []);

  return (
    <>
      <progress value={remainingTime} max={time} />
    </>
  );
}
