import "./countdownTimer.css"

function CountdownTimer() {
    return (
        <div className="timerContainer">
            <div className="card">
                <span id="month" className="remainingNumber">00</span>
                <span>Months</span>
            </div>
            <div className="card">
                <span id="days" className="remainingNumber">00</span>
                <span>Days</span>
            </div>
            <div className="card">
                <span id="hours" className="remainingNumber">00</span>
                <span>Hours</span>
            </div>
            <div className="card">
                <span id="minutes" className="remainingNumber">00</span>
                <span>Minutes</span>
            </div>
            <div className="card">
                <span id="seconds" className="remainingNumber">00</span>
                <span>Seconds</span>
            </div>
        </div>
    );
}

export default CountdownTimer;
