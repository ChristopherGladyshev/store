import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import { Store } from './store';
import reportWebVitals from './reportWebVitals';

import './index.scss';


const store = new Store();
interface State {
  store: Store;
}
export const Context = createContext<State>({ store });


ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
