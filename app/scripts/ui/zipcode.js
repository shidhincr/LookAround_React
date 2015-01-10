/** @jsx React.DOM */
var React   = require('react');
var Modal   = require('react-bootstrap/Modal');
var Button  = require('react-bootstrap/Button');
var Input   = require('react-bootstrap/Input');

var Zipcode = React.createClass({
    displayName: 'Zipcode',
    render: function(){
        return(
            <Modal title="Enter your zipcode">
                <div className="modal-body" id="zipcode-body">
                    <Input
                        type="text"
                        placeholder = "560068"
                    />
                    <Button bsStyle="primary">Search</Button>
                </div>
            </Modal>
        );
    }
});

module.exports = Zipcode
