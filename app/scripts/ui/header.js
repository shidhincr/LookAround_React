'use strict';

var React = require('react');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');

var Header = React.createClass({
    displayName: 'Header',
    render: function () {
        return (
            <div>
                <Navbar inverse>
                    <Nav>
                        This is the navigation
                    </Nav>
                </Navbar>
            </div>
        );
    }
});

module.exports = Header;