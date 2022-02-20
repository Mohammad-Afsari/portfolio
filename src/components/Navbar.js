import '../styles/Navbar.css'

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <nav className="container navbar">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Projects</a>
                <a href="/">Skills</a>
                <a href="/">Contact</a>
            </nav>
        </div>
     );
}

export default Navbar;