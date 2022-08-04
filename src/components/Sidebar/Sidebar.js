import Logo from '../Logo/Logo'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import dashbordIcon from '../../assets/dashboard.svg';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <Logo />
        <nav className='links'>
          <ul>
            <li>
              <NavLink exact to='/' >
              <img src={dashbordIcon} alt="logo" />
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