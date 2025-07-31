import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'; 
import NavbarButton from './navbar-button';
import HomeButton from './home-button';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

  const navigate = useNavigate()

  const handleGoToAbout = () => {
    navigate('/TMCStudiosSite/about'); // Navigates to the /about path
  };

  const handleGoToProjects = () => {
    navigate('/TMCStudiosSite/projects'); 
  };

  const handleGoToContact = () => {
    navigate('/TMCStudiosSite/contact'); 
  };

  const handleGoToHome = () => {
    navigate('/TMCStudiosSite');
  };
      return (
        <nav className="navbar">
          <HomeButton name="TMCStudios" link="/" onClick={handleGoToHome} />
          <div className='navbar-links'>
            <NavbarButton name="Projects" link="/projects" onClick={handleGoToProjects}/>
            <NavbarButton name="About" link="/about" onClick={handleGoToAbout}/>
            <NavbarButton name="Contact" link="/contact" onClick={handleGoToContact} />
          </div>
        </nav>
      );
    };

export default Navbar;

