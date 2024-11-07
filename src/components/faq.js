import Card from "./card";
import "./faq.css";

function FaQ() {
  return (
    <div className="faqContainer">
      <div className="title faqTitle">Fun facts</div>
      <div className="faqCards">
        <Card
          frontText="Πού έγινε η πρόταση;"
          backText="Στην Disneyland αλλά χωρίς δαχτυλίδι."
        />
        <Card
          frontText="Αγαπημένες διακοπές μαζί;"
          backText="ΜΥΚΟΝΟΟΟΟΟΟΣ! Δεν έχουμε πάει. Ρώμη!"
        />
        <Card
          frontText="Πώς γνωριστήκατε;"
          backText="Στην ένδοξη Pobuca, όπου δουλεύαμε μαζί."
        />
        <Card
          frontText="Αγαπημένη ανάμνηση με την Νεφέλη;"
          backText="Όταν ξεκαρδίζεται με χαζομάρες (Χεχεχεχε)."
        />
        <Card
          frontText="Ποιός είναι πιο αγχωμένος;"
          backText="Ο Γιάννης. Πάντα, για τα πάντα."
        />
        <Card
          frontText="Ποιο θα είναι το τραγούδι που θα χορέψετε;"
          backText="Ερευνάται ακόμα, φέρτε βοήθεια."
        />
      </div>
    </div>
  );
}

export default FaQ;
