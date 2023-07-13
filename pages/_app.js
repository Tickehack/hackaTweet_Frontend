import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
//import { persistStore, persistReducer } from 'redux-persist';
//import { PersistGate } from 'redux-persist/integration/react';
//import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit'

//!!!\\ Ne pas oublier d'importer les reducers ici un par un
//import  from '../reducers/';

//!!!\\ A la fin du projet, prévoir le store persistant
// const reducers = combineReducers({  });
// const persistConfig = { key: 'hackatweet', storage };
const store = configureStore({
  reducer: {  }, // mettre ici les reducers, on les rendra persistants plus tard
  //!!!\\ Les deux ci-dessous pour le persistant
  //reducer: persistReducer(persistConfig, reducers),
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

//!!!\\ A la fin du projet, prévoir le store persistant
// const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/*<PersistGate persistor={persistor}>*/}
        <Head>
          <title>Projet hackaTweet d'Alioune et Benjamin</title>
        </Head>
        <Component {...pageProps} />       
      {/*</PersistGate>*/}
    </Provider>
  );
}

export default App;
