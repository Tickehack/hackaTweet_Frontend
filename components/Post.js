
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {login, logout } from '../reducers/user';
//import Moment from 'react-moment';
//import { actions } from '../reducers/bookmarks';
import styles from '../styles/Post.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faHeart } from '@fortawesome/free-solid-svg-icons';


function Post() {
	
	const dispatch = useDispatch();
	
    const handlesendTweet = () => {
        //envoie le tweet
	}

	return (
		<div className={styles.postContainer}>
		    <h1 className={styles.title}>Home</h1>
            <input type="text" className={styles.inputMessage} placeholder="What's Up ?" id="inputMessage"/> 
            <div className={styles.sousMessage}>
                <p>dfh/280</p>
				<button onClick={() => handlesendTweet()} className={styles.sendTweet} >Tweet</button>
            </div>         
		</div>
	);
}

export default Post;
