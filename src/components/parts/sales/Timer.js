import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const {
    initialTuan = 2,
    initialDay = 2,
    initialHour = 5,
    initialMinute = 50,
    initialSeconds = 0,
  } = props;
  const [tuan, setTuan] = useState(initialTuan);
  const [day, setDay] = useState(initialDay);
  const [hours, setHours] = useState(initialHour);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (day === 0) {
              if (tuan === 0) {
                clearInterval(myInterval);
              }
            }
          }
        } else {
          setMinutes(minutes-1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="sale-times">
      <ul>
        <li className="week">
        <h3>{tuan}</h3>
          <p>Tuần</p>
        </li>
        <li className="day">
        <h3>{day}</h3>
          <p>Ngày</p>
        </li>
        <li className="hours">
        <h3>{hours}</h3>
          <p>Giờ</p>
        </li>
        <li className="minutes">
        <h3>{minutes}</h3>
          <p>Phút</p>
        </li>
        <li className="seconds">
        <h3>{seconds}</h3>
          <p>Giây</p>
        </li>
      </ul>
    </div>
  );
};

export default Timer;
