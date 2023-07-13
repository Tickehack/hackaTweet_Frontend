
import { useEffect, useState } from 'react';
import {login, logout } from '../reducers/user';
//import Moment from 'react-moment';
//import { actions } from '../reducers/bookmarks';
import styles from '../styles/Login.module.css';
//import {  } from '@fortawesome/react-fontawesome';
//import {  } from '@fortawesome/free-solid-svg-icons';


function Login() {
	

	return (
		<div className={styles.loginContainer}>
			<img src='../public/logoTweeter.png' className={styles.grandLogo} alt='Grand logo Tweeter' />
			<div className={styles.loginRight}>
                <img src='../public/logoTweeter.png' className={styles.petitLogo} alt='Petit logo Tweeter' />
				<h1>See what's happening</h1>
				<h2>Join Hackatweet today.</h2>
				<button onClick={() => handleSignUp()} className={styles.signUpButton} >Sign Up</button>
				<p>Already have an account ?</p>
				<button onClick={() => handleSignIn()} className={styles.signInButton} >Sign In</button>
			</div>
		</div>
	);
}

export default Login;
