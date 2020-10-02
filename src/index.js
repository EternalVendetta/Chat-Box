import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// My Components
import { App } from './App';
import { Connexion } from './Components/Connexion';
import { NotFound } from './Components/NotFound';

// React Router V4
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// Component Root is Stateless & Redirect Depending on the URL
const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Connexion} />
        <Route path='/pseudo/:pseudo' component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode> 
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
