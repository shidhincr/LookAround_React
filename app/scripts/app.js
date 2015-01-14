'use strict';

var React = window.React = require('react');
var Timer = require("./ui/Timer");
var mountNode = document.getElementById("app");
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

// views
var Home = require('./views/home');
var Search = require('./views/search');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="search" handler={Search}/>
    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={Home} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, mountNode);
});

