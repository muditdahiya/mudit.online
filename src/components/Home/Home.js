import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import anim from "./anim.gif";

import fb from "./fb.png";
import insta from "./insta.png";
import linkedin from "./linkedin.png";
import youtube from "./youtube.png";
import twitter from "./twitter.png";

Chart.register(CategoryScale);

function Home() {
  // text animation function
  useEffect(() => {
    const texts = [
      "IIT Ropar | Humber College 🎓 \tMath Lover 📚  \tMusician 🎸 ",
    ];

    const timeouts = [];

    const writeText = (text) => {
      return new Promise((resolve, reject) => {
        const time = 40;
        document.getElementById("animateText").innerHTML = "";
        for (let i = 0; i < text.length; i++) {
          const t1 = setTimeout(() => {
            document.getElementById("animateText").innerHTML += text[i];
            if (text[i] === "\t")
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

  //function to add country to demographic table
  async function updateTable() {
    //getting ip of the client
    let res = await axios.get("https://api.ipify.org/?format=json");
    let ip = res.data.ip;
    // console.log(ip);

    //UNCOMMENT before sending to production
    //sending ip to backend
    await axios.post(
      `${process.env.REACT_APP_API_SERVER_URL}/updateDemographic`,
      { ip: ip }
    );
  }
  //runs once when page reloads
  useEffect(() => {
    updateTable();
  }, []);

  // scroll to top when page appears
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home page">
      <div className="stage">
        <Link className="about card" to={"about"}>
          <div className="spacer">
            <img src={anim} alt="Loading animation ..." />
            <div>
              <h2>Hi, I'm Mudit</h2>
              <h3>Software Developer 💻</h3>
            </div>
          </div>
        </Link>
        <Link className="projects card" to={"projects"}>
          <div>
            <h2>Projects</h2>
          </div>
        </Link>
        <Link
          className="resume card"
          to="https://drive.google.com/file/d/1mmKu0ik3QeYlCt-fQ5GqoPMcfizF0F1l/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <h2>Resume</h2>
          </div>
        </Link>
        <div className="contact card">
          <div className="front">
            <h2>Let's chat</h2>
          </div>
          <div className="back">
            <div className="socialMedia">
              <a
                href="https://www.linkedin.com/in/muditdahiya/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Linkedin"></img>
              </a>
              <a
                href="https://www.instagram.com/mudit.music/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="Instagram"></img>
              </a>
              <a
                href="https://www.youtube.com/muditdahiya"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} alt="Youtube"></img>
              </a>
              <a
                href="https://www.facebook.com/MuditDahiya"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fb} alt="Facebook"></img>
              </a>
              <a
                href="https://twitter.com/muditdahiya"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="Twitter"></img>
              </a>
            </div>
            <div className="email">
              <a href="mailto: contact@muditdahiya.com">
                <strong>contact@muditdahiya.com</strong>
              </a>
            </div>
          </div>
        </div>
        <div className="description">
          <h2 id="animateText"> </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
