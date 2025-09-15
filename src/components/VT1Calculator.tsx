import { useEffect, useState } from "react";

export const VT1Calculator = () => {
  const [avgPaceMins, setAvgPaceMins] = useState(0);
  const [avgPaceSecs, setAvgPaceSecs] = useState(0);
  const [vt1, setVt1] = useState([0, 0]);

  useEffect(() => {
    if (avgPaceMins || avgPaceSecs) {
      setVt1(calcVT1());
    }
  }, [avgPaceMins, avgPaceSecs]);

  const paceToSpeed = (minutes: number, seconds: number) => {
    const totalMinutes = minutes + seconds / 60;
    return 60 / totalMinutes;
  };

  const speedToPace = (speed: number) => {
    const totalMinutes = 60 / speed;
    const minutes = Math.floor(totalMinutes);
    const seconds = Math.round((totalMinutes - minutes) * 60);
    return [minutes, seconds];
  };

  const calcVT1 = () => {
    const speed = paceToSpeed(avgPaceMins, avgPaceSecs);
    return speedToPace(speed * 0.65);
  };

  return (
    <div className="md:grid grid-cols-12 items-center border-2 border-b-elba p-6 pb-10">
      <div className="col-span-9">
        <p className="text-elba text-base mb-1">
          After running a&nbsp;
          <span className="font-semibold">
            six-minute max effort time trial
          </span>
          , what was your <span className="font-semibold">average pace</span>?
        </p>
        <p className="mb-2 text-sm text-elba/80">(in miles or kilometers)</p>
      </div>

      <div className="col-span-3 justify-self-center md:justify-self-end">
        <input
          className="w-12 text-center text-elba border-elba border-2 transition-all focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
          type="number"
          min={1}
          max={60}
          placeholder="00"
          value={avgPaceMins}
          onChange={({ target }) => setAvgPaceMins(Number(target.value))}
        />
        <span className="mx-1">&#58;</span>
        <input
          className="w-12 text-center text-elba border-elba border-2 transition-all focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
          type="number"
          min={0}
          max={60}
          placeholder="00"
          value={avgPaceSecs}
          onChange={({ target }) => setAvgPaceSecs(Number(target.value))}
        />
      </div>

      <div className="col-span-12 mt-4">
        {Boolean(vt1[0] || vt1[1]) ? (
          <p className="text-white bg-green-700 p-4">
            Your <span className="font-semibold">VT1</span> pace is:&nbsp;
            <span className="font-semibold underline">
              {vt1[0]}:{vt1[1].toString().padStart(2, "0")}
            </span>
          </p>
        ) : (
          <p className="text-sm text-fog italic">
            Enter your average pace to find out your VT1.
          </p>
        )}
      </div>
    </div>
  );
};
