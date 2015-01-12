var React = require('react');
var Router = require('react-router');
var ZipcodeDialog = require('../ui/ZipcodeDialog.js');
var Link = Router.Link;

var Home  = React.createClass({
    render: function(){
        var tempStyle = { backgroundColor: '#fff', padding:'10px' };
        return (
            <div className="map-background">
                <ZipcodeDialog />
            </div>
        )
    }
});

module.exports = Home;
