import { useEffect } from "react";
import faceAnimation from "./faceAnimation.gif";

function Home() {
  useEffect(() => {
    const texts = [
      "I am a software developer 💻 ... I love mathematics 🔢 ... I enjoy playing the guitar 🎸 ...",
    ];

    const timeouts = [];

    const writeText = (text) => {
      return new Promise((resolve, reject) => {
        const time = 40;
        document.getElementById("animateText").innerHTML = "";
        for (let i = 0; i < text.length; i++) {
          const t1 = setTimeout(() => {
            document.getElementById("animateText").innerHTML += text[i];
            if (text[i] === " " && text[i - 1] === ".")
              document.getElementById("animateText").innerHTML += "<br/>";
          }, i * time);
          timeouts.push(t1);

          const t2 = setTimeout(() => {
            resolve();
          }, (text.length + 100) * time);
          timeouts.push(t2);
        }
      });
    };

    const deleteText = (text) => {
      return new Promise((resolve, reject) => {
        const time = 15;
        for (let i = 0; i < text.length; i++) {
          const t4 = setTimeout(() => {
            document.getElementById("animateText").innerHTML = document
              .getElementById("animateText")
              .innerHTML.slice(0, -1);
          }, i * time);
          timeouts.push(t4);

          const t2 = setTimeout(() => {
            resolve();
          }, (text.length + 20) * time);
          timeouts.push(t2);
        }
      });
    };

    async function animate() {
      let i = 0;
      while (true) {
        await writeText(texts[i]);
        await deleteText(texts[i] + "..");
        i++;
        if (i === texts.length) {
          i = 0;
        }
      }
    }

    const t7 = setTimeout(() => {
      animate();
    }, 500);
    timeouts.push(t7);

    return () => {
      timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  });

  return (
    <div className="Home page">
      <div className="stage">
        <div className="leftStage">
          <div className="leftContent">
            <h1 className="pageHeading">Hi, this is Mudit &#128075;</h1>
            <h2>Welcome to my portfolio!</h2>
            <div id="fixedSpace">
              <h3>
                <p id="animateText">
                  <br />
                  <br />
                  <br />
                </p>
              </h3>
            </div>
          </div>
        </div>
        <div className="rightStage">
          <img className="gif" src={faceAnimation} alt="Animated gif"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
