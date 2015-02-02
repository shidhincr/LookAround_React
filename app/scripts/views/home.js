'use strict';

var React = require('react');
var Router = require('react-router');
var ZipcodeDialog = require('../ui/ZipcodeDialog.js');
var Map = require('../ui/Map.js');
var Link = Router.Link;

var Home  = React.createClass({
    render: function(){
        var tempStyle = { backgroundColor: '#fff', padding:'10px' };
        return (
            <div className="home-page">
                <Map zipcode={'683518'}/>
                <ZipcodeDialog />
            </div>
        )
    }
});

module.exports = Home;
