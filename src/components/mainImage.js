import "./mainImage.css";
import main from "../assets/Μain.jpg";

function MainImage() {
  return (
    <div className="mainImageContainer">
      <img className="mainImage" alt="Wedding announcement" src={main} />
    </div>
  );
}

export default MainImage;
