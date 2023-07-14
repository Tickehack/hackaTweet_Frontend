
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {login, logout } from '../reducers/user';
//import Moment from 'react-moment';
//import { actions } from '../reducers/bookmarks';
import styles from '../styles/Sign.module.css';
//import {  } from '@fortawesome/react-fontawesome';
//import {  } from '@fortawesome/free-solid-svg-icons';


function SignIn() {
	
	const dispatch = useDispatch();
	
    const handleCloseSignIn = () => {
        //ferme le showmodal, même si l'enregistrement n'a pas été fait
    }
	
    const handleSignIn = () => {
        //on vient de cliquer sur le bouton SignIn
    }

	return (
		<div className={styles.signContainer}>
            <div className={styles.closeShowmodal}>
                <button onClick={()=> handleCloseSignIn () } className={styles.croix} >X{/* favicon de croix */}</button>
            </div> 
            <div className={styles.divLogo}>
                <img src='logoTweeter.png' className={styles.petitLogo} alt='Petit logo Tweeter' />
            </div>            
			<h2 className={styles.create}>Connect to HackaTweet</h2>
            <input type="text" className={styles.inputSign} placeholder="Username" id="SignInUsername" />
			<input type="password" className={styles.inputSign} placeholder="Password" id="SignInPassword" />
			<button id="register" className={styles.buttonSign} onClick={() => handleRegister()}>Sign In</button>
		</div>
	);
}

export default SignIn;
