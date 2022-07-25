function ProjectCard(props) {
  return (
    <div className="ProjectCard card">
      <div className="arrange">
        <div>
          <h3>{props.name}</h3>
          <p>
            <a target="_blank" href={props.link} rel="noreferrer">
              Open app
            </a>
          </p>
        </div>
        <div>
          <img alt="logo" src={props.link + "/favicon.ico"}></img>
        </div>
      </div>

      <p>{props.description}</p>
    </div>
  );
}

export default ProjectCard;
