import { useEffect } from "react";
import { Link } from "react-router-dom";
import faceAnimation from "./faceAnimation.gif";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { BarChart } from "./BarChart";

Chart.register(CategoryScale);
// Chart.defaults.scale.grid.display = false;

function Home() {
  const [countries, setCountries] = useState([]);
  const [counts, setCounts] = useState([]);

  const [chartData, setChartData] = useState({
    labels: countries,
    datasets: [
      {
        label: "Visitors",
        data: counts,
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const texts = [
      "💻 I am a software developer  ... 🔢 I love mathematics  ... 🎸 I enjoy playing the guitar  ...",
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

  //runs once when page reloads
  //add country to demographic table
  //get the labels and counts for the graph
  useEffect(() => {
    async function updateTable() {
      //getting ip of the client
      let res = await axios.get("https://api.ipify.org/?format=json");
      let ip = res.data.ip;

      //sending ip to backend
      await axios.post(
        `${process.env.REACT_APP_API_SERVER_URL}/updateDemographic`,
        { ip: ip }
      );

      //getting the country labels
      const countriesResult = await axios.get(
        `${process.env.REACT_APP_API_SERVER_URL}/countryCount`
      );
      let countriesList = [];
      let countsList = [];
      countriesResult.data.forEach((obj) => {
        countriesList.push(obj.country);
        countsList.push(obj.count);
      });
      setCountries(countriesList);
      setCounts(countsList);
    }
    updateTable();
  }, []);

  useEffect(() => {
    setChartData({
      labels: countries,
      datasets: [
        {
          label: "Visitors",
          data: counts,
          borderWidth: 2,
        },
      ],
    });
  }, [countries, counts]);

  return (
    <div className="Home page">
      <div className="stage">
        <div className="leftStage">
          <div className="leftContent">
            <h1 className="pageHeading">Hi, I am Mudit &#128075;</h1>
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
            <h3>
              Check out what I've been working on<span> </span>
              <Link to="/projects">here</Link>
            </h3>
          </div>
        </div>
        <div className="rightStage">
          <img className="gif" src={faceAnimation} alt="Animated gif"></img>
        </div>
      </div>
      <div className="demographic">
        <h2>
          Here's an interesting graph that shows where my portfolio gets the
          most visits from
        </h2>
        <BarChart chartData={chartData} />
      </div>
    </div>
  );
}

export default Home;
