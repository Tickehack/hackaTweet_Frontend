import { useDispatch, useSelector } from 'react-redux';
//import { actions } from '../reducers/login';
import styles from '../styles/Login.module.css';
//import {  } from '@fortawesome/react-fontawesome';
//import {  } from '@fortawesome/free-solid-svg-icons';


function Login() {

	const dispatch = useDispatch();
	
    const handleSignUp = () => {
        //ouvrir le popo vert du composant Signup
    }
	
    const handleSignIn = () => {
        //ouvrir le popo vert du composant Signin
    }

	return (
		<div className={styles.loginContainer}>
			<img src='logoTweeter.png' className={styles.grandLogo} alt='Grand logo Tweeter' />
			<div className={styles.loginRight}>
                <img src='logoTweeter.png' className={styles.petitLogo} alt='Petit logo Tweeter' />
				<h1 className={styles.title}>See what's<br />happening</h1>
				<h2 className={styles.title2}>Join Hackatweet today.</h2>
				<button onClick={() => handleSignUp()} className={styles.signUpButton} >Sign Up</button>
				<p className={styles.already}>Already have an account ?</p>
				<button onClick={() => handleSignIn()} className={styles.signInButton} >Sign In</button>
			</div>
		</div>
	);
}

export default Login;
