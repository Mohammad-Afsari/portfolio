import './Footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <section className='contactHoursContainer'>
            <div className="contactHours">
                    <h2>Contact Hours:</h2>
                    <p><span>Mon-Fri:</span> 08:00 - 20:00</p>
                    <p><span>Sat:</span> 08:00 - 12:00</p>
                    <p><span>Sun:</span> 10:00 - 14:00</p>
                </div>
            </section>
            <section className="footerDetails">
                <div className="footerName"><span>Design and Developer by:</span> Mohammad Afsari</div>
            </section>
        </div>
     );
}
 
export default Footer;