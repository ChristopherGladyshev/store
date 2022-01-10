import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { Context } from '.';
import { Home, Listing, Basket, Login } from './pages';
import { Header, Footer } from './components';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [store])

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/basket'} element={<Basket />} />
        <Route path={'/listing'} element={<Listing />} />
        <Route path={'/login'} element={<Login />} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default observer(App);
