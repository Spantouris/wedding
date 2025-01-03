import "./invitation.css"

function Invitation() {
    return (
        <div className="invitationContainer">
            <div className="invitationCard">
                <div className="invitationText">
                    <p className="names">Γιάννης & Μαρία</p>
                    <p>και η μικρή μας Νεφέλη</p>
                    <p className="location">Σας περιμένουμε στο γάμο μας και την βάφτιση της κόρης μας στο <a href="https://maps.app.goo.gl/fYjP1vEpcKQEcsi87" target="_blank" rel="noreferrer">Ιπποστάσιο Μειμαρίδη</a> στο Κορωπί</p>
                    <p>Κυριακή 15 Ιουνίου</p>
                    <p className="time">18:30</p>
                    <p>Κουμπάροι</p>
                    <p className="manOfHonor">Μάκης Μήλιος - Ζωή Αγγελοπούλου</p>
                </div>
            </div>
        </div>
    );
}

export default Invitation;
