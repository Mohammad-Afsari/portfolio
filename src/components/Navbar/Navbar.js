import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { TiContacts } from 'react-icons/ti'
import { GiTrail } from 'react-icons/gi'
import './Navbar.css'
import { useState } from 'react'



const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#home')

    return ( 
        <nav className="nav-container">
            <a href='#home' 
            id='menuItem' 
            className={activeNav === '#home' ? 'active' : ''}
            onClick={() => setActiveNav('#home')}
            ><AiOutlineHome /></a>
            <a href='#about' 
            id='menuItem' 
            onClick={() => setActiveNav('#about')} 
            className={activeNav === '#about' ? 'active': ''}
            ><AiOutlineUser /></a>
            <a href='#journey' 
            id='menuItem'
            onClick={() => setActiveNav('#journey')} 
            className={activeNav === '#journey' ? 'active': ''}
            ><GiTrail /></a>
            <a href='#projects' 
            id='menuItem' 
            onClick={() => setActiveNav('#projects')} 
            className={activeNav === '#projects' ? 'active': ''}
            ><RiServiceLine /></a>
            <a href='#skills' 
            id='menuItem' 
            onClick={() => setActiveNav('#skills')} 
            className={activeNav === '#skills' ? 'active': ''}
            ><BiBook /></a>
            <a href='#contact' 
            id='menuItem' 
            onClick={() => setActiveNav('#contact')} 
            className={activeNav === '#contact' ? 'active': ''}
            ><TiContacts /></a>
        </nav>
     );
}

export default Navbar;