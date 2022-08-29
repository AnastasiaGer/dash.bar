import "./Dashboard.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { DateContext } from "../../context/DateContext";
import { useContext } from "react";
import bellIcon from "../../assets/bell.svg";
export default function Dashboard() {
  const { user } = useAuthContext();
  const { formatDate, formatTime } = useContext(DateContext);
  return (
    <div className="dashboard">
      <div className="header">
        <div className="header-data">
          <h2 className="header-title">Project Management</h2>
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
      <div>
        <div>card</div>
      </div>
    </div>
  );
}
