import { useEffect } from "react";
import code from "./code.jpeg";
import guitar from "./guitar.jpg";
import math from "./math.jpg";

function Home() {
  //left side
  useEffect(() => {
    const texts = [
      "I am a software developer ...",
      "I love mathematics ...",
      "I enjoy playing the guitar ...",
    ];

    const images = [code, math, guitar];

    const writeText = (text, image) => {
      return new Promise((resolve, reject) => {
        const time = 60;
        for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
            document.getElementById("animateText").innerHTML += text[i];
          }, i * time);
        }

        document.getElementById("animateImage").src = image;

        setTimeout(() => {
          let i = 0;
          const imageFadeIn = setInterval(() => {
            if (i <= 1) {
              document.getElementById("animateImage").style.opacity = i;
              i += 0.04;
            } else {
              clearInterval(imageFadeIn);
            }
          }, 10);
        }, time * 5);

        setTimeout(() => {
          resolve();
        }, (text.length + 20) * time);
      });
    };

    const deleteText = (text, image) => {
      return new Promise((resolve, reject) => {
        const time = 60;
        for (let i = 0; i < text.length; i++) {
          setTimeout(() => {
            document.getElementById("animateText").innerHTML = document
              .getElementById("animateText")
              .innerHTML.slice(0, -1);
          }, i * time);
        }

        setTimeout(() => {
          let i = 1;
          const imageFadeOut = setInterval(() => {
            if (i >= -1) {
              document.getElementById("animateImage").style.opacity = i;
              i -= 0.04;
            } else {
              clearInterval(imageFadeOut);
            }
          }, 10);
        }, (text.length * time) / 2);

        setTimeout(() => {
          resolve();
        }, (text.length + 5) * time);
      });
    };

    async function animate() {
      let i = 0;
      while (true) {
        await writeText(texts[i], images[i]);
        await deleteText(texts[i], images[i]);
        i++;
        if (i === 3) {
          i = 0;
        }
      }
    }

    animate();
  });

  return (
    <div className="Home">
      <h1>Hi, this is Mudit</h1>
      <div id="stage">
        <div className="leftStage">
          <p>
            <span id="animateText"></span>
          </p>
        </div>
        <div className="rightStage">
          <div>
            <img id="animateImage" alt="support"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
