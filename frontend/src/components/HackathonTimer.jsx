import React, { useEffect, useState } from 'react';

const HackathonTimer = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date('2025-02-02T08:00:00');
        const now = new Date();
        const difference = eventDate - now;

        return {
        days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-white font-chakra text-[10px] pt-4 lg:text-[40px] mt-10 flex justify-center space-x-3 mb-8">
  {/* Time Block */}
  {[
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
  ].map((unit, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-4 text-xs bg-gradient-to-br from-[#1c1f3a] to-[#2a2d4a] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-12 "
    >
      <span className="font-chakrapetch text-[32px] md:text-5xl pt-2 ">
        {String(unit.value).padStart(2, '0')}
      </span>
      <span className="text-xs md:text-base mt-2 pt-2 uppercase tracking-wide text-gray-400">
        {unit.label}
      </span>
    </div>
  ))}
</div>

    );
};

export default HackathonTimer;
