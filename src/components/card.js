import { useState } from "react";

function Card({ frontText, backText }) {
  const [active, setActive] = useState(false);

  function handleClick(e) {
    e.target.parentElement.style.transform = "rotateY(180deg)";
    e.target.parentElement.style.transition = "0.6s";
    setTimeout(() => {
      e.target.parentElement.style.transform = "rotateY(0deg)";
      e.target.parentElement.style.transition = "0s";
      setActive(!active);
    }, 250);
  }

  return (
    <div>
      <div
        className="faqCard"
        onClick={handleClick}
        style={{
          backgroundColor: "#f8f2e1",
          display: active ? "none" : "flex",
        }}
      >
        <div className="faqText">
          <h2>{frontText}</h2>
        </div>
      </div>
      <div
        className="faqCard"
        onClick={handleClick}
        style={{
          backgroundColor: "#ebdaec",
          display: active ? "flex" : "none",
        }}
      >
        <div className="faqText">
          <h2>{backText}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
