import "./about.css";
import Modal from './Modal'

function About() {

  return (
    <>
      <div>
        <h1 className="aboutTitle">About the calculator and its uses</h1>
        <p className="aboutP">
          This calculator is for calculating the Soul Imprint of units in Grand Chase Kakao <br/>
          The Soul Imprint is the hardest level of upgrades to reach, each level taking 3 weeks of real time to full upgrade a unit. <br/>
          The calculator assists in calculating the level from base (Soul Imprint 0) to anywhere in between (0-15). <br/><br/>
        </p>

        <p className="list">
          Current to-do list:
          <li>Fix navbar hamburger button list</li>
          <li>Add initial imprint state (allows for calculations not just at SI0)</li>
          <li>Add images for website aesthetic</li>
        </p>
      </div>
    </>
  );
}

export default About;