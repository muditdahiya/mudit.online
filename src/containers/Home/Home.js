import { useEffect } from "react";
import code from "./code.jpeg";
import guitar from "./guitar.jpg";
import math from "./math.jpg";

function Home() {
  useEffect(() => {
    const texts = [
      "I am a software developer ...",
      "I love mathematics ...",
      "I enjoy playing the guitar ...",
    ];

    const images = [code, math, guitar];

    const timeouts = [];

    const writeText = (text, image) => {
      return new Promise((resolve, reject) => {
        const time = 60;
        for (let i = 0; i < text.length; i++) {
          const t1 = setTimeout(() => {
            document.getElementById("animateText").innerHTML += text[i];
          }, i * time);
          timeouts.push(t1);
        }

        document.getElementById("animateImage").src = image;

        const t2 = setTimeout(() => {
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
        timeouts.push(t2);

        const t3 = setTimeout(() => {
          resolve();
        }, (text.length + 20) * time);
        timeouts.push(t3);
      });
    };

    const deleteText = (text, image) => {
      return new Promise((resolve, reject) => {
        const time = 60;
        for (let i = 0; i < text.length; i++) {
          const t4 = setTimeout(() => {
            document.getElementById("animateText").innerHTML = document
              .getElementById("animateText")
              .innerHTML.slice(0, -1);
          }, i * time);
          timeouts.push(t4);
        }

        const t5 = setTimeout(() => {
          let i = 1;
          const imageFadeOut = setInterval(() => {
            if (i >= -0.05) {
              document.getElementById("animateImage").style.opacity = i;
              i -= 0.04;
            } else {
              clearInterval(imageFadeOut);
            }
          }, 10);
        }, (text.length * time) / 2);
        timeouts.push(t5);

        const t6 = setTimeout(() => {
          resolve();
        }, (text.length + 5) * time);
        timeouts.push(t6);
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
