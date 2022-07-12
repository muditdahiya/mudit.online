import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const texts = [
      "I am a software developer ...",
      "I love mathematics ...",
      "I enjoy playing the guitar ...",
    ];

    const timeouts = [];

    const writeText = (text) => {
      return new Promise((resolve, reject) => {
        const time = 60;
        for (let i = 0; i < text.length; i++) {
          const t1 = setTimeout(() => {
            document.getElementById("animateText").innerHTML += text[i];
          }, i * time);
          timeouts.push(t1);

          const t2 = setTimeout(() => {
            resolve();
          }, (text.length + 20) * time);
          timeouts.push(t2);
        }
      });
    };

    const deleteText = (text) => {
      return new Promise((resolve, reject) => {
        const time = 30;
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
        await deleteText(texts[i]);
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
        <h2>
          <span id="animateText"></span>
        </h2>
      </div>
    </div>
  );
}

export default Home;
