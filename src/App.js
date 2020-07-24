import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SpellsPage from './pages/Spells';
import CharacterPage from './pages/Characters';
import HousePage from './pages/Houses';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFound';
import HeaderComponent from './layouts/Header/header';
import FooterComponent from './layouts/Footer/footer';
import { ToastContainer } from 'react-toastify';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer/>
        <Router>
          <HeaderComponent/>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/spells" exact component={SpellsPage} />
            <Route path="/characters" exact component={CharacterPage} />
            <Route path="/houses" exact component={HousePage} />
            <Route path="/not-found" component={NotFoundPage} />
            <Redirect to="/not-found" />
          </Switch>
          <FooterComponent/>
        </Router>

      </div>
    );
  }
}

export default App;
