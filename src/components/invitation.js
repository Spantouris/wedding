import "./invitation.css"

function Invitation() {
    return (
        <div className="invitationContainer">
            <div className="invitationCard">
                <div className="invitationText">
                    <p>Γιάννης</p>
                    <p>&</p>
                    <p>Μαρία</p>
                    <p>
                        <span>Κυριακή</span>
                        <span>15</span>
                        <span>Ιουνίου</span>
                    </p>
                    <p>18:30</p>
                    <p>Σας περιμένουμε στο γάμο και την βάφτιση της κόρης μας στις 15/06/2025 στο Ιπποστάσιο Μειμαρίδη στο Κορωπή</p>
                </div>
            </div>
        </div>
    );
}

export default Invitation;