import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { Button } from '@/components/ui/button';

interface TimerProps {
  startTime: number; // in minutes
  endTime: number; // in minutes
}

const Timer: React.FC<TimerProps> = ({ startTime, endTime }) => {
  const startDate = new Date();
  startDate.setMinutes(startDate.getMinutes() + startTime);

  const endDate = new Date();
  endDate.setMinutes(endDate.getMinutes() + endTime);

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: endDate,
    onExpire: () => console.warn('Timer expired'),
  });

  useEffect(() => {
    start();
  }, [start]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="text-2xl font-bold mb-4">
        {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </div>
      <div className="flex space-x-2">
        <Button onClick={pause} variant="outline" disabled={!isRunning}>
          Pause
        </Button>
        <Button onClick={resume} variant="outline" disabled={isRunning}>
          Resume
        </Button>
        <Button onClick={() => restart(endDate)} variant="outline">
          Restart
        </Button>
      </div>
    </div>
  );
};

export default Timer;
