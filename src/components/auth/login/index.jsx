import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'; // Import from brands icons
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './login.css';

const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="login-container">
                <div className="login-form">
                    <div className="login-header">
                        <h3><img src="favicon.ico" alt="favicon" /> Shelfwise </h3>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                autoComplete='current-password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {errorMessage && (
                            <span className='error-message'>{errorMessage}</span>
                        )}

                        <div className="button-container">
                            <button
                                className='signIn-btn'
                                type="submit"
                                disabled={isSigningIn}
                            >
                                {isSigningIn ? 'Signing In...' :<> <FontAwesomeIcon icon={faRightToBracket}/> Sign In </>}
                            </button>
                        </div>
                    </form>
                    <p>Don't have an account? <Link to={'/register'}>Sign up</Link></p>
                    <div className='separator'>
                        <div className='line'></div><div className='or'>OR</div><div className='line'></div>
                    </div>
                    <div className="button-container">
                        <button
                            className='googleSignIn-btn'
                            disabled={isSigningIn}
                            onClick={onGoogleSignIn}
                        >
                            {isSigningIn ? 'Signing In...' : <><FontAwesomeIcon icon={faGoogle} /> Continue with Google</>}
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login;
