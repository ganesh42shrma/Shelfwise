import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doSignOut } from '../../firebase/auth';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket , faIdCard , faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    const handleLogout = async () => {
        try {
            await doSignOut();
            navigate('/login');
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };

    return (
        <nav className='header-container'>
            {userLoggedIn ? (
                <button onClick={handleLogout} className='logout-button'> <FontAwesomeIcon icon={faRightFromBracket} /> Logout</button>
            ) : (
                <>
                    <Link className="header-button" to="/login"><button className='header-link'> <FontAwesomeIcon icon={faRightToBracket} /> Login</button></Link>
                    <Link className="header-button" to="/register"><button className='header-link-register'> <FontAwesomeIcon icon={faIdCard} /> Register</button></Link>
                </>
            )}
        </nav>
    );
};

export default Header;
