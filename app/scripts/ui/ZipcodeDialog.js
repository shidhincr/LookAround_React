'use strict';

var React   = require('react');
var Router = require('react-router');
var Modal   = require('react-bootstrap/Modal');
var ZipcodeInput = require('./ZipcodeInput.js');

var ZipcodeDialog = React.createClass({
    displayName: 'ZipcodeDialog',
    render: function(){
        return(
            <Modal title="Enter your zipcode" closeButton={false} onRequestHide={this.onHide}>
                <div className="modal-body">
                    <ZipcodeInput ackWhenValid={true} />
                </div>
                <div className="modal-footer">&nbsp;</div>
            </Modal>
        );
    },
    onHide: function(){}
});

module.exports = ZipcodeDialog;
