import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuthContext } from '../../hooks/useAuthContext'
export default function Navbar() {
  const { user } = useAuthContext()
  return (
    <div className="navbar">
      <ul>
      {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
