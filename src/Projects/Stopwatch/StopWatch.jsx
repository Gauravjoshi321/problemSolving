import { useRef } from "react";
import { useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timeRef = useRef(null);

  function startTimer() {
    setRunning(true);
    timeRef.current = setInterval(() => {
      setTime(time => time + 10);
    }, 10);
  }
  function resumeTimer() {
    clearInterval(timeRef.current);
    setRunning(false);
  }
  function stopTimer() {
    clearInterval(timeRef.current);
    setRunning(false);
    setTime(0);
  }

  return (
    <div>

      <div style={{ fontSize: "2em", marginLeft: "35px" }}>
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>

      <Button onClick={startTimer} context={"Start"} />
      <Button onClick={resumeTimer} context={"Resume"} />
      <Button onClick={stopTimer} context={"Reset"} />
    </div>
  )
}

function Button({ onClick, context }) {
  return (
    <button onClick={onClick} style={{ margin: "6px", border: "1px solid" }}>{context}</button>
  )
}