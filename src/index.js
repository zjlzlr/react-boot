import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/front/home';
import Course from './pages/front/course';
import Index from './pages/front/index';
import Download from './pages/front/download';
import Teacher from './pages/front/teacher';
import UserHome from './pages/admin/home';
import User from './pages/admin/user';
import Login from './pages/admin/login';
import Register from './pages/admin/register';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<HashRouter>
	  <Switch>
	   	<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
			<Home>
		    <Route path="/index" component={Index}/>
				<Route path="/course" component={Course}/>
				<Route path="/teacher" component={Teacher}/>
				<Route path="/download" component={Download}/>
			</Home>
			<UserHome>
		    <Route path="/user" component={User}/>
			</UserHome>
	  </Switch>
	</HashRouter>, document.getElementById('root'));
registerServiceWorker();
