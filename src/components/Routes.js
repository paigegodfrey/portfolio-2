import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>       
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default Routes