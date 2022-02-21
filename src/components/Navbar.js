import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { TiContacts } from 'react-icons/ti'
import '../styles/Navbar.css'

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <a href='#home' className='menuItem'><AiOutlineHome /></a>
            <a href='#about' className='menuItem'><AiOutlineUser /></a>
            <a href='#skills' className='menuItem'><BiBook /></a>
            <a href='#projects' className='menuItem'><RiServiceLine /></a>
            <a href='#contact' className='menuItem'><TiContacts /></a>
        </div>
     );
}

export default Navbar;