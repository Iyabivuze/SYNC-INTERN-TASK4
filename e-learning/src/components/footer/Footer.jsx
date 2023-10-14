import './Footer.css'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <>
        <footer>
        <div className="my-container padding">
            <div className="box my-logo first">
                <h1><Link>Academica</Link></h1>
                <span>Online education and learning</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus dolorem fugit assumenda, expedita voluptates 
                    temporibus in voluptas ducimus sequi omnis earum saepe quod. 
                    </p>
                <LinkedInIcon className='icon'/>
                <TwitterIcon className='icon'/>
                <InstagramIcon className='icon'/>
                <FacebookIcon className='icon'/>
                <EmailIcon className='icon'/>
            </div>

            <div className="box link">
                <h3>Explore</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">courses</Link></li>
                    <li><Link to="/team">Our Team</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                </div>
                <div className="box link">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>All Courses</li>
                    <li>Our Team</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        </footer>
        <div className="box last">
                <p>Copy right &copy; All rights reserved 2023. </p>
                <p>Developed by Dieudonne Iyabivuze </p>

                <Link to=""><LinkedInIcon className='icon'/></Link>
                <Link to=""><TwitterIcon className='icon'/></Link>
                <Link to=""><GitHubIcon className='icon'/></Link>
                <Link to=""><EmailIcon className='icon'/></Link>
            </div>
    </>
  )
}

export default Footer
