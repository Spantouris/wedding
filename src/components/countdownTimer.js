import { useEffect, useMemo, useState } from "react";
import "./countdownTimer.css"

function CountdownTimer() {
    const targetTime = useMemo(() => new Date("2025-06-15T15:30:00Z"), [])
    let [remainingTime, setRemainingTime] = useState(0);
    let days, hours, minutes, seconds = 0;

    useEffect(() => {
        setInterval(() => {
            const currentTime = new Date();
            const diff = targetTime - currentTime;
            setRemainingTime(diff <= 0 ? 0 : diff);
        }, 1000);
    }, [targetTime]);

    days = Math.floor((remainingTime) / 86400000)
    remainingTime = (remainingTime) % 86400000
    hours = Math.floor(remainingTime / 3600000)
    remainingTime = remainingTime % 3600000
    minutes = Math.floor(remainingTime / 60000)
    seconds = Math.floor(remainingTime % 60000 / 1000)

    return (
        <div className="timerContainer">
            <div className="card">
                <span id="days" className="remainingNumber">{days.toString().padStart(2, '0')}</span>
                <span className="remainingCategory">Ημέρες</span>
            </div>
            <div className="card">
                <span id="hours" className="remainingNumber">{hours.toString().padStart(2, '0')}</span>
                <span className="remainingCategory">Ώρες</span>
            </div>
            <div className="card">
                <span id="minutes" className="remainingNumber">{minutes.toString().padStart(2, '0')}</span>
                <span className="remainingCategory">Λεπτά</span>
            </div>
            <div className="card">
                <span id="seconds" className="remainingNumber">{seconds.toString().padStart(2, '0')}</span>
                <span className="remainingCategory">Δεύτερα</span>
            </div>
        </div>
    );
}

export default CountdownTimer;
