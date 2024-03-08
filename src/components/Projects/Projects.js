import { useEffect } from "react";
import Card from "./Card";
function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="Projects page">
      <h1 className="pageHeading">Projects</h1>
      <div className="Cards">
        <Card
          projectName="ThoughtServe (Web and iOS)"
          skills={[
            "JavaScript",
            "SwiftUI",
            "iOS",
            "SQL",
            "HTML",
            "Sass",
            "REST API",
            "GCP",
            "Git",
            "Open Graph",
            "Nginx",
          ]}
          description="Blogging app made with React on the front end and Express on the back end. iOS app made with SwiftUI. Uses a Postgres database hosted in GCP."
          points={[
            "Developed a blog-sharing web application using the PERN stack for web and SwiftUI for iOS",
            "Deployed frontend and backend separately on GCP Compute Engine to ensure scalability and maintainability",
            "Used same backend API for web and iOS app",
            "Future plans include adding a comments section and user management",
          ]}
          webLink="http://muditdahiya.com/thought-serve/"
          iOSLink="https://apps.apple.com/in/app/thoughtserve/id6450876868"
        />
        <Card
          projectName="Beat Maker"
          skills={[
            "JavaScript",
            "React Hooks",
            "HTML",
            "Sass",
            "GCP",
            "Git",
            "Nginx",
          ]}
          description="React web app that uses the sound API."
          points={[
            "Developed a web application showcasing sound API integration using Node.js and React",
            "Leveraged the Howler library and employed React Hooks for enhanced functionality",
            "Successfully deployed the application on GCP and used Nginx to serve the static webapp",
          ]}
          webLink="http://muditdahiya.com/beat-maker"
        />
        <Card
          projectName="Speech Emotion Recognition"
          skills={["Machine Learning", "Python"]}
          description="Research project where we built a machine learning model to recognise speech from emotions."
          points={[
            "Developed a Speech Emotion Recognition (SER) system to classify call center audio into different emotions",
            "Iterated upon model features and training techniques in TensorFlow to improve accuracy by 15%",
            "Prepared 100-page documentation for knowledge transfer during handoff",
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
