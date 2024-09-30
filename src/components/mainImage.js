import "./mainImage.css"

function MainImage() {
  return (
    <div className="mainImageContainer">
        <img className="mainImage" alt="Wedding announcement" src="https://picsum.photos/1920/800"/>
        <div className="mainText">
            <h1>Σας προσκαλούμε στον γάμο μας και την βάφτιση της κόρης μας</h1>
        </div>
    </div>
  );
}

export default MainImage;
