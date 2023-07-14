
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {login, logout } from '../reducers/user';
//import Moment from 'react-moment';
//import { actions } from '../reducers/bookmarks';
import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faHeart } from '@fortawesome/free-solid-svg-icons';


function Tweet() {
	
	const dispatch = useDispatch();
	
    const handleDeleteTweet = () => {
        //supprime le tweet de la collection des messages
        //supprime chaque couple hashtag/messageId de la collection des hashtags
    }
	
    const handleLikeTweet = () => {
        //like ou unLike le tweet
	}

	const username ='';
		//ça doit être pris dans le store, depuis la bdd, pour être utilisé dans toutes les pages

	const message ='xxxA EXTRAIRE DE LA COLLECTION, EN TRAITANT LES #Hashtagsxxx';
		//il faudra un regex pour traiter différemment la class des Hashtags, et le lien


	return (
		<div className={styles.tweetContainer}>
            <div className={styles.userLine}>
                <img src='default_avatar.png' className={styles.avatar} alt='Avatar de xxxUsernamexxx'  />
				<p className={styles.firstname}>xxxFirstnamexxx</p>
				<p className={styles.username}>@xxxUsernamexxx . </p>
				<p className={styles.username}>xxxtempsécouléxxx</p>
            </div> 
			<div className={styles.message}>
				{message}<br />
				<FontAwesomeIcon key={1} icon={faHeart} className={styles.iconHeart} /> 4  <FontAwesomeIcon key={2} icon={faTrashCan} className={styles.iconTrashCan} />
			</div>
		</div>
	);
}

export default Tweet;
