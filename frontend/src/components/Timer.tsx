import React from 'react';
import { useTimer } from 'react-timer-hook';
import { Clock } from 'lucide-react';

interface TimerProps {
  remainingTime: number; // in seconds
}

const Timer: React.FC<TimerProps> = ({ remainingTime }) => {
  const endDate = new Date();
  endDate.setSeconds(endDate.getSeconds() + remainingTime);

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: endDate,
    onExpire: () => console.warn('Timer expired'),
  });

  return (
    <div className="flex flex-col items-center justify-start w-fit p-2 text-text rounded-lg shadow-md">
      {remainingTime === 0 ? <span className='text-nowrap dark:text-green-600'>
        Interview Ended!
      </span> :
        <div className="font-bold flex gap-2 items-center w-fit">
        <Clock size={16} />
        {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </div>}
    </div>
  );
};

export default Timer;
