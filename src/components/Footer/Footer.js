import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <section className="contactHoursContainer">
        <div className="contactHours">
          <h2>Contact Hours:</h2>
          <p>
            <span>Mon-Fri:</span> 08:00 - 20:00
          </p>
          <p>
            <span>Sat:</span> 08:00 - 12:00
          </p>
          <p>
            <span>Sun:</span> 10:00 - 14:00
          </p>
          <p>Copyright &copy; {currentYear} M.A All Rights Reserved</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
