import './Header.css'
import bellIcon from "../../assets/bell.svg";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { DateContext } from "../../context/DateContext";
import { useContext } from "react";
export default function Header({title}) {
  const { user } = useAuthContext();
  const { formatDate, formatTime } = useContext(DateContext);
  return (
    <div className="header">
    <div className="header-data">
      <h2 className="header-title">{title}</h2>
      <p className="header-time"> {formatTime} {formatDate}</p>
    </div>
    <div className="header-navigation">
      <input className="search" placeholder="search..." />
      <Link to="/notifications" className="notifications">
        <img src={bellIcon} alt="bellIcon" />
      </Link>
      <Avatar src={user.photoURL} />
    </div>
  </div>
  )
}
