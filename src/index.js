import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<HashRouter>
	  <Switch>
		    <Route exact path="/" component={Home}/>
		    <Route exact path="/user" component={User}/>
	  </Switch>
	</HashRouter>, document.getElementById('root'));
registerServiceWorker();
