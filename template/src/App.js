import React from 'react';
import { useMoralis } from "react-moralis";
import Wallet from './features/wallet/Wallet';
import Header from './features/header/Header';

import logo from './moralis/Powered-by-Moralis-Badge-Green.svg';
import styles from "./App.module.css";


function App() {
  const { isAuthenticated, isAuthenticating, isInitialized, authenticate, auth, hasAuthError, authError } = useMoralis();
  let content = null;

  const handleLoginWithMetamask = () => {
    authenticate();
  }

  if (!window.ethereum) {
    content = <div> You need to use supported browser like
      <a href="https://chrome.google.com/"> Chrome </a>
      or
      <a href="https://brave.com/"> Brave </a>
      and install a Web3 Wallet like
      <a href="https://metamask.io"> Metamask </a>
    </div>
  } else if (!isInitialized || isAuthenticating) {
    content = <div className={styles.row}>
      <div> Please wait, we are authentication you ... </div>
    </div>
  } else {
    if (!isAuthenticated) {
      content = <div className={styles.row}>
        <button className={styles.button} onClick={handleLoginWithMetamask}>Login with Metamask</button>
      </div>
    } else {
      content = <Wallet />
    }
  }

  let error = null;
  if (hasAuthError) {
    error = <div>Auth Error: {authError.message}</div>;
  }

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.row}>
        <img src={logo} alt="Built With Moralis" />
      </div>
      <div className={styles.row}>
        <div className={styles.learnParagraph}>Learn more about Moralis <a href="https://moralis.io">here</a></div>
      </div>
      <div className={styles.row}>
        {error}
      </div>
      {content}
    </div>
  );
}

export default App;
