function Resume() {
  return (
    <div className="Resume page">
      <h2 className="pageHeading">Resume</h2>
      <div className="PDF">
        <object
          className="PDF"
          data="https://drive.google.com/file/d/16OFTqW7bEU23BFg1aT7H3LRQrbI8JPtj/preview"
          type="application/pdf"
        >
          <div>
            No online PDF viewer installed.{" "}
            <a
              href="https://drive.google.com/file/d/16OFTqW7bEU23BFg1aT7H3LRQrbI8JPtj/preview"
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
