function Projects() {
  return (
    <div className="Projects page">
      <h2 className="pageHeading">Projects</h2>
      <div className="Cards">
        <div className="cardWrap">
          <div className="card">
            <div className="cardLeft">
              <h2>ThoughtServe</h2>
              <p>
                <a
                  href="http://muditdahiya.com/thought-serve/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web Link
                </a>
              </p>
            </div>
            <div className="cardRight">
              <a
                href="http://muditdahiya.com/thought-serve/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="http://muditdahiya.com/thought-serve/favicon.ico"
                  alt="logo"
                ></img>
              </a>
            </div>
          </div>
          <strong>
            Blogging app made with React on the front end and Express on the
            back end. <br /> Uses a Postgres database, Node.js backend and
            Express framework.
          </strong>
          <ul>
            <li>Web app where people can share their blogs</li>
            <li>Made using PERN stack</li>
            <li>Deployed front and back end on GCP Compute Engine</li>
            <li>Monitor and manage individual posts as Admin of the page</li>
          </ul>
          <strong>
            Skills: JavaScript, SQL, HTML, CSS, REST API, GCP hosting, Git, Open
            Graph, Reverse Proxy server, NGINX
          </strong>
        </div>
        <div className="cardWrap">
          <div className="card">
            <div className="cardLeft">
              <h2>Beat Maker</h2>
              <p>
                <a
                  href="http://muditdahiya.com/beat-maker"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web Link
                </a>
              </p>
            </div>
            <div className="cardRight">
              <a
                href="http://muditdahiya.com/beat-maker"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="http://muditdahiya.com/beat-maker/favicon.ico"
                  alt="logo"
                ></img>
              </a>
            </div>
          </div>
          <strong>React web app that uses the sound API.</strong>
          <ul>
            <li>Web app to demonstrate usage of sound API</li>
            <li>Made using Node.js and React</li>
            <li>Used Howler library</li>
            <li>Use of React Hooks to improve functionality</li>
            <li>Deployed on GCP Compute Engine</li>
          </ul>
          <strong>
            Skills: JavaScript, React Hooks, HTML, SASS, GCP hosting, Git,
            Reverse Proxy server, NGINX
          </strong>
        </div>
        <div className="cardWrap">
          <div className="card">
            <div className="cardLeft">
              <h2>Speech Emotion Recognition</h2>
              <p>
                <a
                  href="http://muditdahiya.com/beat-maker"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* Web Link */}
                </a>
              </p>
            </div>
            <div className="cardRight">
              {/* <img
                src="http://muditdahiya.com/beat-maker/favicon.ico"
                alt="logo"
              ></img> */}
            </div>
          </div>
          <strong>
            Research project where we built a machine learning model to
            recognise speech from emotions.
          </strong>
          <ul>
            <li>Built a Speech Emotion Recognition (SER) system</li>
            <li>Aim to apply system to call centre environments</li>
            <li>Read about current innovations in the field</li>
            <li>Explored audio features that provide best accuracy</li>
            <li>Improved accuracy by 15% by tweaking the model and features</li>
          </ul>
          <strong>Skills: Machine Learning, Python</strong>
        </div>
      </div>
    </div>
  );
}

export default Projects;
