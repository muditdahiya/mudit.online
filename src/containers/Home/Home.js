import { useEffect, useTimeout } from "react";

function Home() {
  useEffect(() => {
    const typingAnimation = (text) => {
      if (text) {
        document.getElementById("animateText").innerHTML += text[0];
      }
    };
    typingAnimation("am a software developer ...");
  });
  return (
    <div className="Home">
      <h1>Hi, this is Mudit</h1>
      <div id="stage">
        <div className="leftStage">
          <p>
            I <span id="animateText"></span>
          </p>
        </div>
        <div className="rightStage">
          <div id="animateImage">this is right stage</div>
        </div>
      </div>

      {/* love mathematics */}
      {/* enjoy playing the guitar */}
    </div>
  );
}

export default Home;
