import './Navbar.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import Login from '../signup/Login';
import Signup from '../signup/Signup';

const Navbar = () => {

    const [toggleNav, setToggleNav] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)

    // Nav bar
    const handleToggle = () => {
      setToggleNav(!toggleNav)
    }

    const handleClick = () => {
      setToggleNav(false)
    }

    // Handle Login
    const handleShowLogin = () => {
      setShowLogin(true)
      setShowSignup(false)
    }

    const handleCloseLogin = () => {
      setShowLogin(false)
    }

    // Handle Singnup
    const handleSignUp = () => {
        setShowSignup(true)
        // setShowLogin(false)  
    }

  return (
    <header>
      <nav className='nav-bar'
      >
        <div className="my-logo">
            <h1><Link to="/">ACADEMICA</Link></h1>
        </div>
        {/* <div className="media toggle-mobile"> */}
            <ul className='nav-link'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/courses'>All Courses</Link></li>
                <li><Link to='/team'>Team</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="signup">
                <div 
                  onClick={handleShowLogin}
                  className="signup-button">Sign Up</div>
                  
            </div>

          {/* </div> */}
          <ViewWeekIcon className='toggle' onClick={handleToggle}/>

          <div className={toggleNav ? "nav-links active":"nav-links"}>
            <ul className='mobile-links'>
                <li><Link onClick={handleClick} to='/'>Home</Link></li>
                <li><Link onClick={handleClick} to='/courses'>All Courses</Link></li>
                <li><Link onClick={handleClick} to='/team'>Team</Link></li>
                <li><Link onClick={handleClick} to='/contact'>Contact</Link></li>
            </ul>
             <div className="signup-links">
                <div 
                onClick={handleShowLogin}
                className="signup-button">Sign Up</div>
            </div>
              <ClearIcon className=' toggle-cut' onClick={handleToggle}/>
          </div>
      </nav>

      {showLogin ? (<Login
        showLogin = {showLogin}
        setShowLogin = {setShowLogin}
        handleCloseLogin = {handleCloseLogin}
        handleSignUp = {handleSignUp}
      />) : null}

      {showSignup ? (
        <Signup
        showSignup={showSignup}
        handleSignUp = {handleSignUp}
        showLogin = {showLogin}
        handleShowLogin = {handleShowLogin}
        handleCloseLogin = {handleCloseLogin}
      />): null}
      

    </header>
  )
}

export default Navbar
