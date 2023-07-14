
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {login, logout } from '../reducers/user';
//import Moment from 'react-moment';
//import { actions } from '../reducers/bookmarks';
import styles from '../styles/Sign.module.css';
//import {  } from '@fortawesome/react-fontawesome';
//import {  } from '@fortawesome/free-solid-svg-icons';


function SignUp() {
	
	const dispatch = useDispatch();
	
    const handleCloseSignUp = () => {
        //ferme le showmodal, même si l'enregistrement n'a pas été fait
    }
	
    const handleSignUp = () => {
        //on vient de cliquer sur le bouton SignUp
    }

	return (
		<div className={styles.signContainer}>
            <div className={styles.closeShowmodal}>
                <button onClick={()=> handleCloseSignUp () } className={styles.croix} >X{/* favicon de croix */}</button>
            </div> 
            <div className={styles.divLogo}>
                <img src='logoTweeter.png' className={styles.petitLogo} alt='Petit logo Tweeter' />
            </div>            
			<h2 className={styles.create}>Create your HackaTweet account</h2>
            <input type="text" className={styles.inputSign} placeholder="Firstname" id="signUpFirstname"/>
            <input type="text" className={styles.inputSign} placeholder="Username" id="signUpUsername" />
			<input type="password" className={styles.inputSign} placeholder="Password" id="signUpPassword" />
			<button id="register" className={styles.buttonSign} onClick={() => handleRegister()}>Sign Up</button>
		</div>
	);
}

export default SignUp;
