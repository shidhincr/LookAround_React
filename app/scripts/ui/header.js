'use strict';

var React = require('react');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var ZipcodeInput = require('./ZipcodeInput.js');

var Header = React.createClass({
    displayName: 'Header',
    render: function () {
        return (
            <div>
                <Navbar inverse>
                    <Nav>
                        <ZipcodeInput ackWhenValid={false} zipcode={this.props.zipcode} />
                    </Nav>
                </Navbar>
            </div>
        );
    }
});

module.exports = Header;
