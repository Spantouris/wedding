import { useState, useId } from "react";

function Card({ frontText, backText }) {
  const [active, setActive] = useState(false);
  const frontId = useId();
  const backId = useId();

  function handleClick(elementId) {
    const element = document.getElementById(elementId);
    element.style.transform = "rotateY(180deg)";
    element.style.transition = "0.6s";
    setTimeout(() => {
      element.style.transform = "rotateY(0deg)";
      element.style.transition = "0s";
      setActive(!active);
    }, 250);
  }

  return (
    <div>
      <div
        id={frontId}
        className="faqCard"
        onClick={() => handleClick(frontId)}
        style={{
          backgroundColor: "#f8f2e1",
          color: "#4e8a7d",
          display: active ? "none" : "flex",
        }}
      >
        <div className="faqText">
          <h2>{frontText}</h2>
        </div>
      </div>
      <div
        id={backId}
        className="faqCard"
        onClick={() => handleClick(backId)}
        style={{
          backgroundColor: "#ebdaec",
          color: "#4e1d4e",
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
