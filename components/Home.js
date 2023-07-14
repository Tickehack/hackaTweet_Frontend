import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {login, logout } from './Login';
import Login from './Login';
import EssaisComponents from './EssaisComponents';


function Home() {

  const dispatch = useDispatch();


	const [date, setDate] = useState('2050-11-22T23:59:59');
	const [signUpFirstname, setSignUpFirstname] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

	
	useEffect(() => {
		setDate(new Date());
	}, []);
	
	
    const handleSignUp = () => {
        //ouvrir le popo vert du composant Signup
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				console.log(data)
				if (data.result) {
					dispatch(login({username: signUpUsername, token: data.token }));
					setSignUpFirstname('');
					setSignUpUsername('');
					setSignUpPassword('');
				}
			});
	
    }
	
    const handleSignIn = () => {
        //ouvrir le popo vert du composant Signin
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		})
		.then(response => response.json())
			.then(data => {
				console.log(data)
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
				}
			});
    }
    const handleLogout = () => {
      dispatch(logout());
      
    };

	const [homepage, setHomepage] = useState(true);

	const changedepage = () => {
	  setHomepage(!homepage)
	}
  
  
	if (homepage){
	  return (
		<div>
		  <button onClick={()=> changedepage()} className={styles.buttonTemp}> Change de page</button>
			  <Login />
		</div>
	  );
	} else {
	  return (
		<div><button onClick={()=> changedepage()} className={styles.buttonTemp}> Change de page</button>
		  <main className={styles.main}>
		  	<EssaisComponents />
		  </main>
		</div>
	  );
	}
}






export default Home;
