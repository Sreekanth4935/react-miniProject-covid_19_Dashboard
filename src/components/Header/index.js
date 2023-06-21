import {Link} from 'react-router-dom'
import './index.css'

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-width-adjust">
        <Link to="/" className="link">
          <h1 className="covid-nav-heading">
            COVID19<span className="span-element">INDIA</span>
          </h1>
        </Link>
        <div className="about-container">
          <p className="home">Home</p>
          <p className="about">About</p>
        </div>
      </div>
    </nav>
  )
}
