import React from 'react';
import './App.scss';

import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Users from './components/Users/UsersContainer';

const App = () => (
  <div className="App">
    <Header />
    <Navigation />
    <Route path="/profile" render={() => <Profile />} />
    <Route path="/dialogs" render={() => <Dialogs />} />
    <Route path="/users" render={() => <Users />} />
    <Footer />
  </div>
);

export default App;
