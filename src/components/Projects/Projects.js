function Projects() {
  return (
    <div className="Projects page">
      <h2 className="pageHeading">Projects</h2>
      <div className="Cards">
        <h3>
          I have many projects under my belt. Here are a few that I have hosted
          online:
        </h3>
        <hr />
        <div className="cardWrap">
          <div className="card">
            <div className="cardLeft">
              <h3>ThoughtServe</h3>
              <p>
                <a
                  href="https://muditdahiya.com/thought-serve/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open app
                </a>
              </p>
            </div>
            <div className="cardRight">
              <img
                src="https://muditdahiya.com/thought-serve/favicon.ico"
                alt="logo"
              ></img>
            </div>
          </div>
          <p>
            This is a blogging app made with React on the front end and Express
            on the back end. It uses PostgreSQL as the database, making it an
            app made with the PERN stack.
          </p>
          <ul>
            <li>Some information</li>
            <li>Some information</li>
            <li>Some information</li>
            <li>Some information</li>
            <li>Some information</li>
          </ul>
        </div>
        <hr />
        <div className="cardWrap">
          <div className="card">
            <div className="cardLeft">
              <h3>Beat Maker</h3>
              <p>
                <a
                  href="https://beat-maker-md.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open app
                </a>
              </p>
            </div>
            <div className="cardRight">
              <img
                src="https://beat-maker-md.herokuapp.com/favicon.ico"
                alt="logo"
              ></img>
            </div>
          </div>
          <p>This is a React web app that uses the sound API.</p>
          <ul>
            <li>Some information</li>
            <li>Some information</li>
            <li>Some information</li>
            <li>Some information</li>
            <li>Some information</li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Projects;
