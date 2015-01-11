/** @jsx React.DOM */
var React   = require('react');
var Router = require('react-router');
var Modal   = require('react-bootstrap/Modal');
var ZipcodeInput = require('./ZipcodeInput.js');

var ZipcodeDialog = React.createClass({
    displayName: 'ZipcodeDialog',
    render: function(){
        return(
            <Modal title="Enter your zipcode" closeButton={false}>
                <div className="modal-body">
                    <ZipcodeInput />
                </div>
                <div className="modal-footer"></div>
            </Modal>
        );
    }
});

module.exports = ZipcodeDialog;
