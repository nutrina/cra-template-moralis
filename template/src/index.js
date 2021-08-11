import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { MoralisProvider } from "react-moralis";


async function init() {
  const MORALIS_APP_ID = process.env.REACT_APP_MORALIS_APP_ID;
  const MORALIS_SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

  ReactDOM.render(
    <>
      <React.StrictMode>
        <Provider store={store}>
          <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
            <App />
          </MoralisProvider>
        </Provider>
      </React.StrictMode>
    </>,

    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();

}

init();
