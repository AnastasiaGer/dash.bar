import "./Dashboard.css";
import Header from '../../components/Header/Header'
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header title='Project Management'/>
      <div>
        <div>card</div>
        <Link to='/create' className="create-link">+ Add Task</Link>
      </div>
    </div>
  );
}
