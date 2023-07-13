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
      <div><button onClick={()=> changedepage()}> Change de page</button>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <Login />
          </h1>
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <main className={styles.main}><button onClick={()=> changedepage()}> Change de page</button>
          <h1 className={styles.title}>
            Messages
          </h1>
        </main>
      </div>
    );
  }




  
}

export default Home;
