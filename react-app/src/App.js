import React from 'react';
import HomePage from './components/HomePage';
import SpecificGroup from './components/SpecificGroup';
import Theme from './Theme';
import ReactDOM from 'react-dom';
import CalendarComponent from './components/Calendar';
import SignIn from './components/SignIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  CssBaseline,
} from "@material-ui/core";

const App = () => {

  return(
    <>
      <CssBaseline />
      <Theme>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/groups/:id" component={SpecificGroup} />
        <Route path ="/calendar" component={CalendarComponent} />
        <Route path="/signin" component={SignIn} />
      </Theme>
    </>
  )

}

export default App;
