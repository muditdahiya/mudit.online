import share from "./share.png";
export default function Card(props) {
  return (
    <div className="Card card">
      <h2>{props.projectName}</h2>

      <div className="skills">
        {props.skills.map((skill, i) => {
          return <span>{skill}</span>;
        })}
      </div>

      <p>{props.description}</p>
      <ul>
        {props.points.map((point, i) => {
          return <li>{point}</li>;
        })}
      </ul>
      <div className="links">
        {props.iOSLink ? (
          <a href={props.iOSLink} target="_blank" rel="noreferrer">
            iOS App <img src={share} alt=""></img>
          </a>
        ) : (
          <p></p>
        )}
        {props.webLink ? (
          <a href={props.webLink} target="_blank" rel="noreferrer">
            Web Link <img src={share} alt=""></img>
          </a>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
