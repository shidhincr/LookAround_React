var React   = require('react');
var Input   = require('react-bootstrap/Input');
var Button  = require('react-bootstrap/Button');

/** @jsx React.DOM */
var ZipcodeInput = React.createClass({
    displayName: 'ZipcodeInput',
    render: function(){
        return(
            <div className="zipcodeComponent">
                <Input
                    type="text"
                    placeholder="560068"
                    className="zipcodeInput"
                />
                <Button bsStyle="primary">Go</Button>
            </div>
        );
    }
});

module.exports = ZipcodeInput;
