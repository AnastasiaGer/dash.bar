import Logo from '../Logo/Logo'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='logo'>
          <Logo />
        </div>
        <nav className='links'>
          <ul>
            <li>
              <NavLink exact to='/' >
                <span>Dashbord</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create' >
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;