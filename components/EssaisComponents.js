import styles from '../styles/EssaisComponents.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {login, logout } from './Login';
import Login from './Login';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Tweet from './Tweet';
import Post from './Post';


function EssaisComponents() {
    
	const [composant, setComposant] = useState('');
    
    const changeDeComposant = (newComponent) => {
        if (newComponent === 'SignUp') {setComposant(<SignUp />);}
        else if (newComponent === 'SignIn') {setComposant(<SignIn />);}
        else if (newComponent === 'Post') {setComposant(<div className={styles.touslestweets}><Post /></div>);}
        else if (newComponent === 'Tweet') {setComposant(<div className={styles.touslestweets}><Tweet /></div>);}
        else if (newComponent === 'PlusieursTweets') {setComposant(<div className={styles.touslestweets}><Post /><Tweet /><Tweet /></div>);}
    }

    return (
      <div>
        <main className={styles.essaisComponentsContainer}>
          <div className={styles.boutons}>
              <button onClick={()=> changeDeComposant('SignUp')} className={styles.buttonTemp}>Composant SignUp</button>
              <button onClick={()=> changeDeComposant('SignIn')} className={styles.buttonTemp}>Composant SignIn</button>
              <button onClick={()=> changeDeComposant('Post')} className={styles.buttonTemp}>Composant Post</button>
              <button onClick={()=> changeDeComposant('Tweet')} className={styles.buttonTemp}>Composant Tweet</button>
              <button onClick={()=> changeDeComposant('PlusieursTweets')} className={styles.buttonTemp}>Plusieurs Tweets</button>
          </div>
          <div className={styles.composant}>
            {composant}
          </div>
        </main>
      </div>
    );
}






export default EssaisComponents;
