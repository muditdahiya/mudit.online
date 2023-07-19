function Projects() {
  return (
    <div className="Projects page">
      <h2 className="pageHeading">Projects</h2>
      <div className="Cards">
        <div className="cardWrap">
          <div className="card">
            <div className="cardLeft">
              <h2>ThoughtServe (Web and iOS)</h2>
              <p>
                <a
                  href="http://muditdahiya.com/thought-serve/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Web Link
                </a>
                &emsp;
                <a
                  href="https://apps.apple.com/in/app/thoughtserve/id6450876868"
                  target="_blank"
                  rel="noreferrer"
                >
                  iOS Link
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
            back end. iOS app made with SwiftUI. Uses a Postgres database hosted
            in GCP.
          </strong>
          <ul>
            <li>
              Developed a blog-sharing web application using the PERN stack for
              web and SwiftUI for iOS
            </li>
            <li>
              Deployed frontend and backend separately on GCP Compute Engine to
              ensure scalability and maintainability
            </li>
            <li>Used same backend API for web and iOS app</li>
            <li>
              Future plans include adding a comments section and user management
            </li>
          </ul>
          <strong>
            Skills: JavaScript, SwiftUI, iOS, SQL, HTML, Sass, REST API, GCP,
            Git, Open Graph, Nginx
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
            <li>
              Developed a web application showcasing sound API integration using
              Node.js and React
            </li>
            <li>
              Leveraged the Howler library and employed React Hooks for enhanced
              functionality
            </li>
            <li>
              Successfully deployed the application on GCP and used Nginx to
              serve the static webapp
            </li>
          </ul>
          <strong>
            Skills: JavaScript, React Hooks, HTML, SASS, GCP, Git, Nginx
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
