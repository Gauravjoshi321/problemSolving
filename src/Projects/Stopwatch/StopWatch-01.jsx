import { useState, useRef } from "react";

export default function StopWatch01() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  function start() {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  }

  function stop() {
    clearInterval(timerRef.current);
    setRunning(false);
  }

  function reset() {
    clearInterval(timerRef.current);
    setTime(0);
    setRunning(false);
  }

  return (
    <div>
      <div style={{ fontSize: "2em" }}>
        {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}
      </div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
