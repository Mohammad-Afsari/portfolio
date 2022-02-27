import './Footer.css'
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        aos.init({duration: 3000});
    }, [])

    return ( 
        <div className="footer" data-aos="fade-up">
            <section className='contactHoursContainer' data-aos="fade-up">
            <div className="contactHours">
                    <h2>Contact Hours:</h2>
                    <p><span>Mon-Fri:</span> 08:00 - 20:00</p>
                    <p><span>Sat:</span> 08:00 - 12:00</p>
                    <p><span>Sun:</span> 10:00 - 14:00</p>
                </div>
            </section>
            <section className="footerDetails" data-aos="fade-up">
                <div className="footerName"><span>Design and Developer by:</span> Mohammad Afsari</div>
            </section>
        </div>
     );
}
 
export default Footer;