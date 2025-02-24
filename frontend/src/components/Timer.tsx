import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { Clock } from 'lucide-react';

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
    <div className="flex flex-col items-center justify-center p-2 text-text rounded-lg shadow-md">
       {/* <div className="flex space-x-1">
        <Button onClick={pause} variant="outline" disabled={!isRunning}>
          <Pause size={8} />
        </Button>
        <Button onClick={resume} variant="outline" disabled={isRunning}>
          <Play size={8} />
        </Button>
        <Button onClick={() => restart(endDate)} variant="outline">
        <RotateCcw size={8} />
        </Button>
      </div> */}
      <div className="text-lg font-bold flex gap-2 items-center">
       <Clock size={20} />
        {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </div>
     
    </div>
  );
};

export default Timer;
