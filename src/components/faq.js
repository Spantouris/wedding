import Card from "./card";
import "./faq.css";

function FaQ() {
  return (
    <div className="faqContainer">
      <div className="title faqTitle">Fun facts</div>
      <div className="faqCards">
        <Card
          frontText="Ποιός έκανε την πρώτη κίνηση;"
          backText="Η Μαρία"
        />
        <Card
          frontText="Ποιός είναι πιο αγχωμένος;"
          backText="Φυσικά ο Γιάννης"
        />
        <Card
          frontText="Που είναι ο κυριος Λιοντάρης;"
          backText="Θα σας απαντήσει η Νεφέλη"
        />
      </div>
    </div>
  );
}

export default FaQ;
