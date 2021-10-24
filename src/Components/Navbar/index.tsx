import { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './sideBarData';
import { IconContext } from 'react-icons';
import { NavBar } from './navbar';


export function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <NavBar>
    <IconContext.Provider value={{color: '#000000'}}>
    <div className="navbar">
      <button className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
      </button>
    </div>
    
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className="navbar-toggle">
          <button className='menu-bars'>
            <AiIcons.AiOutlineClose />
          </button>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {/* {item.icon} */}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
    </NavBar>
    </>
  )
}