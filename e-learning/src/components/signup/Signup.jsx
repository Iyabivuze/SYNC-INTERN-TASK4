import './Signup.css'
import ClearIcon from '@mui/icons-material/Clear';
// import { useState } from 'react';
import {Link} from 'react-router-dom'
// import Login from './Login';


const Signup = ({showLogin, handleCloseLogin, handleShowLogin}) => {

    // const [showLoginComp, setShowLoginComp] = useState(false)

  return (

      <div className={showLogin ? 'login active': 'login '}
    >
            <div className="intro ">
                <h1>Sign Up</h1>
                <p>Already a member?
                    <Link 
                        onClick={handleShowLogin}
                        className='signup-link'>Login</Link>
                </p>
            </div>
            {/* <ClearIcon onClick={handleCloseLogin} className='cancel'/> */}
            <div className="login-form">
                <form action="" className='my-form signup-form'>
                    <input type="text" name="username"
                        placeholder='username'
                    />
                    <input type="text" name="fname"
                        placeholder='full name'
                    />
                    <input type="email" name="email"
                        placeholder='email'
                    />
                    <input type="password" name="password"
                        placeholder='password'
                    />
                    <input type="password" name="cpassword"
                        placeholder='confirm password'
                    />
                    <button className='login-btn signup-btn'>Sign Up</button>
                </form>
            </div>
            <ClearIcon onClick={handleCloseLogin} className='cancel'/>

    </div>
  )
}

export default Signup

