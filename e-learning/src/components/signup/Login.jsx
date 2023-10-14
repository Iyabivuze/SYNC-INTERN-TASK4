import './Signup.css'
import ClearIcon from '@mui/icons-material/Clear';
import {Link} from 'react-router-dom'

const Login = ({showLogin, handleCloseLogin, handleSignUp}) => {


  return (

    <div className={showLogin ? 'login active': 'login'}>
        <div className="intro">
            <h1>Login</h1>
            <p>Not a member?
                <Link 
                    onClick={handleSignUp}
                    className='signup-link'>Signup</Link>
            </p>
        </div>
        <ClearIcon onClick={handleCloseLogin} className='cancel'/>
        <div className="login-form">
            <form action="" className='my-form'>
                <input type="text" name="username"
                    placeholder='username'
                />
                <input type="password" name="password"
                    placeholder='password'
                />
                <p id='forgot-password'><Link>Forgot password?</Link></p>
                <button className='login-btn'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
