import "./countdownTimer.css"

function CountdownTimer() {
    const currentTime = new Date("2025-06-15T16:30:00Z")
    const targetTime = new Date("2025-06-15T15:30:00Z")
    
    let days,hours,minutes,seconds,remainingTime = 1;
    if (currentTime < targetTime)
    {   
        days = Math.floor((targetTime - currentTime) / 86400000)
        remainingTime = (targetTime - currentTime) % 86400000
        hours = Math.floor(remainingTime / 3600000)
        remainingTime = remainingTime % 3600000
        minutes = Math.floor(remainingTime / 60000)
        seconds = Math.floor(remainingTime % 60000 / 1000)    
    }

    return (
        <div className="timerContainer">
            <div className="card">
                <span id="days" className="remainingNumber">{days}</span>
                <span>Days</span>
            </div>
            <div className="card">
                <span id="hours" className="remainingNumber">{hours}</span>
                <span>Hours</span>
            </div>
            <div className="card">
                <span id="minutes" className="remainingNumber">{minutes}</span>
                <span>Minutes</span>
            </div>
            <div className="card">
                <span id="seconds" className="remainingNumber">{seconds}</span>
                <span>Seconds</span>
            </div>
        </div>
    );
}

export default CountdownTimer;
