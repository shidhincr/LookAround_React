var React = require('react');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');

/** @jsx React.DOM */
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