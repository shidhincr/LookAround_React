var React = require('react');
var Navbar = require('../ui/navbar.js');
var Filters = require('../ui/filters.js');
var Results = require('../ui/results.js');

var Search  = React.createClass({
    render: function(){
        return (
            <div className="search">
                <Navbar />
                <div className="row-fluid">
                    <Filters />
                    <Results />
                </div>
            </div>
        )
    }
});

module.exports = Search;