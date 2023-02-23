function Resume() {
  return (
    <div className="Resume page">
      <h2 className="pageHeading">Resume</h2>
      <div className="PDF">
        <object
          className="PDF"
          data="https://drive.google.com/file/d/1mmKu0ik3QeYlCt-fQ5GqoPMcfizF0F1l/preview"
          type="application/pdf"
        >
          <div>
            No online PDF viewer installed.{" "}
            <a
              href="https://drive.google.com/file/d/1mmKu0ik3QeYlCt-fQ5GqoPMcfizF0F1l/preview"
              target="_blank"
              rel="noreferrer"
            >
              Click here
            </a>{" "}
            to view PDF.
          </div>
        </object>
      </div>
    </div>
  );
}

export default Resume;
