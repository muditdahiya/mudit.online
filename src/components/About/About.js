import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const options = {
  colorAxis: {
    colors: [
      // "#ebfefe",
      // "#e3fefe",
      // "#dbfefe",
      "#d3fefe",
      "#cbfdfd",
      "#c3fdfd",
      "#bbfdfd",
      "#b3fdfd",
      "#abfdfd",
      "#a3fdfd",
      "#9bfcfc",
      "#93fcfc",
      "#8bfcfc",
      "#83fcfc",
      "#7bfcfc",
      "#73fcfc",
      "#6bfbfb",
      "#63fbfb",
      "#5bfbfb",
      "#53fbfb",
      "#4bfbfb",
      "#43fbfb",
      "#3bfafa",
      "#33fafa",
      "#2bfafa",
      "#23fafa",
      "#1bfafa",
      "#13f9f9",
      "#0bf9f9",
      "#05f7f7",
      "#05efef",
      "#04e7e7",
      "#04dfdf",
      "#04d7d7",
      "#04cfcf",
      "#04c7c7",
      "#04bfbf",
      "#03b7b7",
      "#03afaf",
      "#03a7a7",
      "#039f9f",
      "#039797",
      "#038f8f",
      "#028787",
      "#027f7f",
      "#027777",
      "#026f6f",
      "#026767",
      "#025f5f",
      "#015757",
      "#014f4f",
      "#014747",
      "#013f3f",
      "#013737",
      "#012f2f",
      "#002727",
      "#001f1f",
      "#001717",
      "#000f0f",
      "#000707",
    ],
  },
  backgroundColor: "#f4f4f4",
  datalessRegionColor: "#FFFFFF",
  defaultColor: "#FFFFFF",
  domain: "IN",
};

const About = () => {
  const [dataArray, setDataArray] = useState([
    ["Country Code", "Visits"],
    ["US", 179],
    ["FR", 10],
  ]);

  //Get the countries and counts and update the dataArray
  //runs once when page reloads
  useEffect(() => {
    async function updateData() {
      //getting the country labels
      const countryCount = await axios.get(
        `${process.env.REACT_APP_API_SERVER_URL}/countryCount`
      );
      console.log(countryCount);
      let data = [["Country Code", "Visits"]];
      countryCount.data.forEach((pair) => {
        data.push([pair.country, pair.count]);
      });
      setDataArray(data);
    }
    updateData();
  }, []);

  return (
    <div>
      <div className="About page">
        <h1 className="pageHeading">About</h1>

        <p className="description card">
          Mudit Dahiya, mechanical engineer by heart, and software engineer by
          mind.
          <br /> <br />
          He attained his high school credentials from The Gurukul, Panchkula,
          India. Demonstrating unwavering versatility, he proficiently
          maintained a harmonious equilibrium between academic endeavors and
          active participation in extracurricular activities. Notably, during
          his final year at school, he assumed the distinguished role of school
          captain.
          <br /> <br />
          He subsequently undertook his engineering studies at the Indian
          Institute of Technology (IIT) Ropar, situated in Punjab, India. During
          his tenure, he actively participated in the university's basketball
          team and engaged in activities within the music club. It was within
          this academic environment that he discerned his fervent interest in
          software engineering and education. Concurrently, he initiated an
          exploration into the realms of stock markets and the business sector,
          broadening his knowledge in these areas during his academic tenure at
          the institution.
          <br /> <br />
          Commencing a new phase of his journey, he relocated to Canada to
          pursue postgraduate studies. At Humber College in Toronto, he focused
          on Information Technology. Concurrently, he delved into part-time
          tutoring, gaining exposure to the vibrant work culture in Canada. Upon
          completing his studies, he transitioned into his first full-time role
          as a Software Developer at Appfabs, where he currently applies his
          skills and expertise.
        </p>

        <h3>Here's a map showing where I get the most visits from!</h3>

        <div className="chart">
          <Chart
            chartType="GeoChart"
            height="100%"
            width="100%"
            data={dataArray}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
