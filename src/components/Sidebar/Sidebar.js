import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

import dashboardIcon from "../../assets/dashboard.svg";
import analyticsIcon from "../../assets/analytics.svg";
import reportsIcon from "../../assets/reports.svg";
import profileIcon from "../../assets/profile.svg";
import inboxIcon from "../../assets/message.svg";
import settingsIcon from "../../assets/settings.svg";

function Sidebar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Logo />
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={dashboardIcon} alt="dashboardIcon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/analytics">
                <img src={analyticsIcon} alt="analyticsIcon" />
                <span>Analytics</span>
              </NavLink>
              <li>
                <NavLink to="/reports">
                  <img src={reportsIcon} alt="reportsIcon" />
                  <span>Reports</span>
                </NavLink>
              </li>
              <br />
              <hr />
              <br />
              <li>
                <NavLink to="/profile">
                  <img src={profileIcon} alt="profileIcon" />
                  <span>Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/inbox">
                  <img src={inboxIcon} alt="inboxIcon" />
                  <span>Inbox</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings">
                  <img src={settingsIcon} alt="settingsIcon" />
                  <span>Settings</span>
                </NavLink>
              </li>
            </li>
          </ul>
          <div>
          {user && (
          <div>
            {!isPending && <button className="btn" onClick={logout}>Logout</button>}
            {isPending && <button className="btn" disabled>Logging out...</button>}
          </div>
        )}
          </div>
        </nav>
        <p className="sidebar-p">BeautIful UI components, designed 
handcrafted with eye to the detail.</p>
      </div>
    </div>
  );
}

export default Sidebar;
