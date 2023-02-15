import fb from "./fb.png";
import insta from "./insta.png";
import linkedin from "./linkedin.png";
import youtube from "./youtube.png";
import twitter from "./twitter.png";

function Contact() {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Contact page">
      <h2 className="pageHeading">Contact</h2>
      <h3>Connect with me on these platforms</h3>
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/muditdahiya/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin"></img>
        </a>
        <a
          href="https://www.instagram.com/mudit.music/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="Instagram"></img>
        </a>
        <a
          href="https://www.youtube.com/muditdahiya"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="Youtube"></img>
        </a>
        <a
          href="https://www.facebook.com/MuditDahiya"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fb} alt="Facebook"></img>
        </a>
        <a
          href="https://twitter.com/muditdahiya"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Twitter"></img>
        </a>
      </div>
      <h3>Or contact me using this form!</h3>
      <div className="contactForm">
        <form onSubmit={submitForm}>
          <div className="cardWrap">
            <div className="cardLeft">
              <label htmlFor="name">Name:</label>
              <br />
              <input type="text" id="name" name="name" />
            </div>
            <div className="cardRight">
              <label htmlFor="email">Email:</label>
              <br />
              <input type="email" id="email" name="email" />
            </div>
          </div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea type="text" id="message" htmlFor="message" />
          <br />
          <input className="submitButton" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
