var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;  
//import { browserHistory } from 'react-router';

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component = {Main}>
			<IndexRoute component = {Home} />
	
			
		</Route>
	</Router>
);

module.exports = routes;