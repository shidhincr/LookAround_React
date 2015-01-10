var React = require('react');
var Router = require('react-router');
var Zipcode = require('../ui/zipcode.js');
var Link = Router.Link;

var Home  = React.createClass({
    render: function(){
        var tempStyle = { backgroundColor: '#fff', padding:'10px' };
        return (
            <div className="map-background">
                <Zipcode />
            </div>
        )
    }
});

module.exports = Home;
