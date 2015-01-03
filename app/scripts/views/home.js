var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home  = React.createClass({
    render: function(){
        var tempStyle = { backgroundColor: '#fff', padding:'10px' };
        return (
            <div className="map-background">
                <div style={tempStyle}>
                    <Link to="search">Goto search </Link>
                </div>
                {/* 
                    @TODO: @Ivin
                    Add the zipcode component inside here
                    like this
                    <ZipcodeDialog />
                */}
            </div>
        )
    }
});

module.exports = Home;