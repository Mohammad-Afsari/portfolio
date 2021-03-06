import './Contact.css'
import CV from '../Assets/Mohammad-A_CV.pdf'
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    useEffect(() => {
        aos.init({duration: 3000});
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cv0ctrp', 'template_q6i79m7', form.current, 'nvCHZpBsc5b4ao8bd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        // Get the snackbar DIV
        const messageElement = document.getElementById("userMessage");
      
        // Add the "show" class to DIV
        messageElement.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ messageElement.className = messageElement.className.replace("show", ""); }, 3000);

        e.target.reset();
    };

    return ( 
        <div className="contact">
            <section className="contactInfo" data-aos="fade-up">
                <div className="locationMessage">
                    <p>For more detailed information, please feel free to download my resume below.</p>
                </div>
                <div className="cv"><a href={CV} download>Download CV</a></div>
                <div className="locationMessage">
                    <p>Based in:</p>
                </div>
                <div className="location">Farringdon, London, United Kingdom</div>
            </section>
            <section className="formContainer" data-aos="fade-up">
                <div className="message">
                    <p>For <span>freelance</span> projects, <span>job</span> opportunities or if you wish to just have a <span>general chat,</span> please feel free to get in touch by filling out the <span>form</span> below. You can also reach out to me on <span>LinkedIn</span>, <span>email</span> or by <span>phone</span> (details held in my CV).</p>
                </div>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Your Full Name' name='name' required></input>
                    <input type="email" placeholder='Your Email' name='email' required></input>
                    <input type="text" placeholder='Subject' name='subject' required></input>
                    <textarea placeholder='Your Message' rows="7" name="message" required></textarea>
                    <button type='submit' className='submitBtn'>Send</button>
                </form>
            </section>
            <div id="userMessage">Message sent!</div>
        </div>
     );
}

export default Contact;