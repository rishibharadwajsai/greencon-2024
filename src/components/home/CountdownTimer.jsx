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
    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg border border-gray-200 sm:w-1/2 mx-auto mt-8 mb-28">
      <h1 className="w-full text-lg md:text-2xl font-bold mb-16 bg-gray-200 text-[#3c5a96] text-center py-4">GREENCON 2025</h1>
      <div className="flex space-x-8 text-xl font-semibold mb-8">
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl">
          <span className="text-4xl text-[#3c5a96]">{timeLeft.days}</span>
          <span className="text-gray-500 mt-2 text-sm">Days</span>
        </div>
        <div className="flex flex-col items-center bg-gray-100 px-5 py-4 rounded-xl">
          <span className="text-4xl text-[#3c5a96]">{timeLeft.hours}</span>
          <span className="text-gray-500 mt-2 text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl">
          <span className="text-4xl text-[#3c5a96]">{timeLeft.minutes}</span>
          <span className="text-gray-500 mt-2 text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center bg-gray-100 p-4 rounded-xl">
          <span className="text-4xl text-[#3c5a96]">{timeLeft.seconds}</span>
          <span className="text-gray-500 mt-2 text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <CountdownTimer targetDate="2025-02-15T00:00:00" />;
};

export default App;
