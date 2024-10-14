import Card from "./card";
import "./faq.css";

function FaQ() {
  return (
    <div className="faqContainer">
      <div className="faqTitle">Fun facts</div>
      <div className="faqCards">
        <Card
          frontText="Ποιός έκανε την πρώτη κίνηση;"
          backText="Η Μαρία γιατί ο Γιάννης ήταν χαζός"
        />
        <Card
          frontText="Ποιός έκανε την πρώτη κίνηση;"
          backText="Η Μαρία γιατί ο Γιάννης ήταν χαζός"
        />
        <Card
          frontText="Ποιός έκανε την πρώτη κίνηση;"
          backText="Η Μαρία γιατί ο Γιάννης ήταν χαζός"
        />
      </div>
    </div>
  );
}

export default FaQ;
