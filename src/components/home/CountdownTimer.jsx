import React, { useState, useEffect, useCallback } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  });

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, targetDate]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Countdown Timer</h1>
      <div className="flex space-x-4 text-lg font-semibold">
        <div className="flex flex-col items-center">
          <span className="text-4xl">{timeLeft.days}</span>
          <span>Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">{timeLeft.hours}</span>
          <span>Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">{timeLeft.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">{timeLeft.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <CountdownTimer targetDate="2025-02-15T00:00:00" />;
};

export default App;
