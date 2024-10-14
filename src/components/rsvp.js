import "./rsvp.css";

function Rsvp() {
  return (
    <div className="rsvpContainer">
      <div className="rsvpTitle">RSVP</div>
      <p>
        Σας παρακαλούμε όπως μας ενημερώσετε μέχρι <b>31/05/2025</b> αν θα
        παρευρεθείτε στην τελετή.
      </p>
      <div className="telephones">
        <div style={{ marginRight: "8vw", textAlign: "center" }}>
          <p>Σπαντούρης Γιάννης</p>
          <p>6946862891</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>Χεκίμογλου Μαρία</p>
          <p>6945658096</p>
        </div>
      </div>
      <div>
        Προαιρετική λίστα γάμου: <b>GR2602600340000710201370006</b> (Eurobank)
      </div>
    </div>
  );
}

export default Rsvp;
