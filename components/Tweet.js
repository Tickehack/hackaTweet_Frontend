
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {login, logout } from '../reducers/user';
//import Moment from 'react-moment';
//import { actions } from '../reducers/bookmarks';
import styles from '../styles/Tweet.module.css';
//import {  } from '@fortawesome/react-fontawesome';
//import {  } from '@fortawesome/free-solid-svg-icons';


function Tweet() {
	
	const dispatch = useDispatch();
	
    const handleDeleteTweet = () => {
        //supprime le tweet de la collection des messages
        //supprime chaque couple hashtag/messageId de la collection des hashtags
    }
	
    const handleLikeTweet = () => {
        //like ou unLike le tweet

	return (
		<div className={styles.tweetContainer}>
            <div className={styles.userLine}>
                <img src='Avatar.png' className={styles.grandLogo} alt='Avatar de '{/* username */} />
            </div> 
			
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

export default Tweet;
