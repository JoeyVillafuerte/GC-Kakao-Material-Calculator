import React from "react";
import "./index.css";

// Home landing page, index counts for website landing page as well
const Home = () => {
  return (
    <div>
      <h1>Grand Chase Kakao Soul Imprint Calculator</h1>

      <h3>
        Created by{" "}
        <a href="https://github.com/JoeyVillafuerte" target="_blank">
          Joey Villafuerte
        </a>{" "}
        on Github <br/>

        Source code {" "}
        <a href="https://github.com/JoeyVillafuerte/GC-Kakao-Material-Calculator" target="_blank">
          on Github
        </a>{" "}
      </h3>

      <p className="p1">
        Soul Imprint calculator created for the Grand Chase Kakao community. <br/>
        Click on the Calculator button to begin.
      </p>

      <h3>
        Click{" "}
        <a href="/calculator" target="_blank">
          here
        </a>{" "}
        to begin.
        </h3>
      
      
    </div>
  );
};

export default Home;
