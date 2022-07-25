import ProjectCard from "../Cards/ProjectCard";

function Projects() {
  return (
    <div className="Projects page">
      <h2 className="pageHeading">Projects</h2>
      <div className="Cards">
        <ProjectCard
          name="ThoughtServe"
          link="https://thought-serve.herokuapp.com/"
          description="This is a blog site made with React and Express. It uses PostgreSQL as the database."
        />
        <ProjectCard
          name="Beat Maker"
          link="https://beat-maker-md.herokuapp.com/"
          description="This is app uses sound API"
        />
      </div>
    </div>
  );
}

export default Projects;
