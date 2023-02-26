import React, { useEffect, useRef, useState } from 'react';

const Timer: React.FC = () => {
  const [timerValue, setTimerValue] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [animationInterval, setAnimationInterval] = useState<number | null>(null);
  const prevTimerValueRef = useRef<number>(0);

  const startTimer = () => {
    console.log("running...");
    
    setRunning(true);
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTimerValue((prevValue) => prevValue + 1000);
      }, 1000);

      setAnimationInterval(setInterval(() => {
        const element = document.getElementById('timer-value')!;
        element.classList.remove('animate');

        setTimeout(() => {
          element.classList.add('animate');
        }, 10);
      }, 300));

      return () => {
        clearInterval(interval);
        clearInterval(animationInterval!);
      };
    }
  }, [running]);

  useEffect(() => {
    prevTimerValueRef.current = timerValue;
  }, [timerValue]);

  const formatUSD = (usd: number) => {
    return usd.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  console.log("rerendered...");
  console.log(timerValue);
  
  

  return (
    <div>
      <h1>${formatUSD(1000)} per hour</h1>
      <p id="timer-value" className="timer-value animate">{formatUSD(timerValue / (60 * 60))} per hour</p>
      <div className="button-container">
        {!running && (
          <button onClick={startTimer}>Start</button>
        )}
        {running && (
          <button onClick={pauseTimer}>Pause</button>
        )}
      </div>
    </div>
  );
};

export default Timer;
