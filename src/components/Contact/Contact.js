import "./Contact.css";
import CV from "../Assets/Mohammad-A_CV_dev.pdf";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cv0ctrp",
        "template_q6i79m7",
        form.current,
        "nvCHZpBsc5b4ao8bd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Get the snackbar DIV
    const messageElement = document.getElementById("userMessage");

    // Add the "show" class to DIV
    messageElement.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      messageElement.className = messageElement.className.replace("show", "");
    }, 3000);

    e.target.reset();
  };

  return (
    <div className="contact">
      <section className="contactInfo" data-aos="fade-up">
        <div className="locationMessage">
          <p>
            For more detailed information regarding my experience, technical
            skills and educational background, please feel free to download my
            CV below.
          </p>
        </div>
        <a href={CV} download className="cv">
          <div>Download CV</div>
        </a>
        <div className="locationMessage">
          <p>
            Thank you for taking the time to go through my portfolio, any
            feedback is welcome!
          </p>
        </div>
      </section>
      <section className="formContainer" data-aos="fade-up">
        <div className="message">
          <p>
            For any <span>enquiries</span> please feel to get in contact by
            filling out the <span>form</span> below. You can also get in touch
            through <span>LinkedIn,</span> <span>email </span> or by{" "}
            <span>phone</span> which can be found in my CV.
          </p>
        </div>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" required></input>
          <input type="email" placeholder="Email" name="email" required></input>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
          ></input>
          <textarea
            placeholder="Message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="submitBtn">
            Send
          </button>
        </form>
      </section>
      <div id="userMessage">Message sent!</div>
    </div>
  );
};

export default Contact;
