import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';


function Home() {
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
          <h1 className={styles.title}>
            Messages
          </h1>
        </main>
      </div>
    );
  }




  
}

export default Home;
