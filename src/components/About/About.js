function About() {
  return (
    <div className="About page">
      <h2 className="pageHeading">About me</h2>
      <h3>I'll just leave my resume here for you to judge :)</h3>
      <div className="PDF">
        <object
          className="PDF"
          data="https://drive.google.com/file/d/1hkVs2cTJnawdDW5WOMfUrBwsMMAAUqK2/preview"
          type="application/pdf"
        >
          <div>
            No online PDF viewer installed.{" "}
            <a href="https://drive.google.com/file/d/1hkVs2cTJnawdDW5WOMfUrBwsMMAAUqK2/preview">
              Click here
            </a>{" "}
            to view PDF.
          </div>
        </object>
      </div>
    </div>
  );
}

export default About;
