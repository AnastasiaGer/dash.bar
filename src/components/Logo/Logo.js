import './Logo.css'
import logo from '../../assets/dash-bar-logo.png';

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  )
}