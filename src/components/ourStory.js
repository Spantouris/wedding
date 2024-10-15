import "./ourStory.css"
import cats from "../assets/Cats.jpg"
import engage from "../assets/Engage.jpg"
import met from "../assets/Met.jpg"
import moved from "../assets/Moved.jpg"
import nefeli from "../assets/Nefeli.jpg"

function OurStory() {
    return (
        <div className="ourStoryContainer">
            <div className="ourStoryTitle">Our Story</div>
            <div>
                <div className="storyStep">
                    <img className="stepImage" src={met} alt="" />
                    <div className="stepText">
                        <p>Όταν ξεκινήσαμε να βγαίνουμε</p>
                        <p>3/1/2018</p>
                    </div>
                </div>
                <div className="storyStep">
                    <div className="stepText">
                        <p>Όταν μετακομίσαμε μαζί</p>
                        <p>1/1/2022</p>
                    </div>
                    <img className="stepImage" src={moved} alt="" />
                </div>
                <div className="storyStep">
                    <img className="stepImage" src={cats} alt="" />
                    <div className="stepText">
                        <p>Όταν υιοθετήσαμε τις γάτες μας</p>
                        <p>17/10/2022</p>
                    </div>
                </div>
                <div className="storyStep">
                    <div className="stepText">
                        <p>Όταν αρραβωνιαστήκαμε</p>
                        <p>19/02/2023</p>
                    </div>
                    <img className="stepImage" src={engage} alt="" />
                </div>
                <div className="storyStep">
                    <img className="stepImage" src={nefeli} alt="" />
                    <div className="stepText">
                        <p>Όταν γεννήθηκε η Νεφέλη</p>
                        <p>19/11/2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory;
