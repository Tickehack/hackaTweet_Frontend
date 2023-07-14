import styles from '../styles/EssaisComponents.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {login, logout } from './Login';
import Login from './Login';
import SignUp from './SignUp';
import SignIn from './SignIn';
//import SignIn from './SignIn';
//import Tweet from './Tweet';


function EssaisComponents() {
    
	const [composant, setComposant] = useState('');
    
    const changeDeComposant = (newComponent) => {
        if (newComponent === 'SignUp') {setComposant(<SignUp />);}
        else if (newComponent === 'SignIn') {setComposant(<SignIn />);}
        else if (newComponent === 'Tweet') {setComposant(<Tweet />);}
    }

    return (
      <div>
        <main className={styles.essaisComponentsContainer}>
          <div className={styles.boutons}>
              <button onClick={()=> changeDeComposant('SignUp')} className={styles.buttonTemp}>Composant SignUp</button>
              <button onClick={()=> changeDeComposant('SignIn')} className={styles.buttonTemp}>Composant SignIn</button>
              <button onClick={()=> changeDeComposant('Tweet')} className={styles.buttonTemp}>Composant Tweet</button>
          </div>
          <div className={styles.composant}>
            {composant}
          </div>
        </main>
      </div>
    );
}






export default EssaisComponents;
